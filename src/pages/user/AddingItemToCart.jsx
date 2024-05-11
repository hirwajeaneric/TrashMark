import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AddOrderRequest, getClientOrderRequest, updateCartRequest } from "../../api/order";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Store } from "../../context/StoreContext";
import { getProductByIdRequest } from "../../api/product";
import { GrStatusGood } from "react-icons/gr";

export default function AddingItemToCart() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleResponseMessage } = useContext(Store);

  useEffect(() => {
    const handleAddProductToCart = async () => {
      // Get user info
      var user = JSON.parse(localStorage.getItem("client"));

      // Find all product details
      const { product } = await getProductByIdRequest(searchParams.get("product"));
      // Decide whether there is an existing order or not
      const { order } = await getClientOrderRequest();
      
      if (order) {
        // Check the quantity of the existing order product
        let existingOrderProducts = [];
        existingOrderProducts = order.products;
        let existingProductOrderQuantity = existingOrderProducts.find(p => p.id === product._id).quantity;
        if (existingProductOrderQuantity === product.quantity) {
          handleResponseMessage('error', 'You have already added the maximum quantity of this product to your cart');
          setTimeout(() => {
            navigate('/search');
          }, 2000);
        }

        // Add product to existing order
        const response = await updateCartRequest({ id: product._id, quantity: product.quantity, pricePerUnit: product.price })
        console.log(response.message);
        if (response.messsage) {
          handleResponseMessage('error', 'Item added to cart successfully');
          setTimeout(() => {
            navigate('/cart');
          }, 2000);
        }  
      } else {
        // Add new order if there is no existing order
        const addOrderResponse = await AddOrderRequest({
          client: user._id,
          seller: product.seller,
          products: [{
            id: product._id,
            quantity: product.quantity,
            pricePerUnit: product.price
          }]
        });

        if (addOrderResponse.message) {
          setLoading(false);
          navigate("/cart");
        }
      }
    };

    handleAddProductToCart();

  }, [handleResponseMessage, navigate, searchParams]);

  // Use the setSearchParams function to update the search parameters
  useEffect(() => {
    const updateSearchParams = () => {
      setSearchParams({ product: searchParams.get("product") });
    };

    updateSearchParams();
  }, [searchParams, setSearchParams]);

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Helmet>
        <title>Adding item to cart - Trash Mark</title>
        <meta name='description' content='Adding item to cart.' />
      </Helmet>
      <div className="mx-auto max-w-lg flex flex-col items-center gap-5">
        {loading && <p>Adding item to cart!</p>}
        {loading && <div className="lds-dual-ring"></div>}
        {!loading && <GrStatusGood className="text-green-500 text-6xl text-center" />}
      </div>
    </div>
  )
}