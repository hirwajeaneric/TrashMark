import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom"
import { getProductByIdRequest } from "../api/product";
import { AddOrderRequest, getClientOrderRequest, updateCartRequest } from "../api/order";
import { Store } from "../context/StoreContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [clientId, setClientId] = useState({});
  const { handleResponseMessage } = useContext(Store);

  useEffect(() => {
    setClientId(JSON.parse(localStorage.getItem("client")));
    setLoading(true);
    getProductByIdRequest(params.productId)
      .then(response => {
        setTimeout(() => {
          setProduct(response.product);
          setImages(response.product.imageFiles);
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.log(error)
      })
  }, [params.productId]);


  const verifyProductLimit = (order, product) => {
    let existingOrderProducts = [];
    existingOrderProducts = order.products;
    console.log(order.products);
    let existingProductOrderQuantity = existingOrderProducts.find(p => p.id === product._id).quantity;
    if (existingProductOrderQuantity !== undefined) {
      if (existingProductOrderQuantity == product.quantity) {
        handleResponseMessage('error', 'You have already added the maximum quantity of this product to your cart');
        setTimeout(() => {
          navigate('/search');
        }, 2000);
        return;
      } else {
        return Number(existingProductOrderQuantity);
      }
    } else {
     return 0;
    }
  }

  const handleAddProductToCart = async (productId) => {
    // Get user info
    var user = JSON.parse(localStorage.getItem("client"));

    // Find all product details
    const { product } = await getProductByIdRequest(productId);
    // Find if there are any existing orders
    const { order } = await getClientOrderRequest();

    if (order) {
      var currentProductQuantity = verifyProductLimit(order, product);
      var response = {};
      if (currentProductQuantity !== 0) {
        response = await updateCartRequest(
          {
            id: product._id,
            quantity: currentProductQuantity+1,
            pricePerUnit: Number(product.unitPrice)
          },
          order._id
        );
      } else {
        response = await updateCartRequest(
          {
            id: product._id,
            quantity: currentProductQuantity+1,
            pricePerUnit: Number(product.unitPrice)
          },
          order._id
        );
      }

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
          quantity: Number(product.quantity),
          pricePerUnit: Number(product.unitPrice)
        }]
      });
      console.log(addOrderResponse.message);

      if (addOrderResponse.message) {
        setLoading(false);
        navigate("/cart");
      }
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center w-full pt-20">
        <div className="flex justify-center items-center mx-auto px-2 gap-4 sm:px-6 lg:px-8 max-w-screen-xl w-full">
          <div className="lds-dual-ring"></div>
        </div>
      </div>
    )
  } else return (
    <div className="flex justify-center w-full pt-20">
      <Helmet>
        <title>{`Product Details - ${product.name}`}</title>
        <meta name='description' content='View product details - TrashMark.' />
      </Helmet>

      <div className="flex mx-auto px-2 gap-4 sm:px-6 lg:px-8 max-w-screen-xl w-full justify-between items-center">
        <div className="w-full md:w-1/2">
          <img
            src={`${API_BASE_URL}/images/${images[0]}`}
            alt={product.name}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flow-root w-full">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Seller</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.seller}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Quality</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.quantity}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.unitPrice} Rwf</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.description}</dd>
              </div>
              {
                clientId
                  ?
                  (<button
                    type="button"
                    onClick={() => { handleAddProductToCart(product._id) }}
                    className="py-3 mt-4 px-3 text-white bg-black rounded-3xl w-full">Add to cart
                  </button>
                  )
                  :
                  (<button
                    type="button"
                    onClick={() => navigate(`/sign-in?redirect=${'/cart'}&product=${product._id}`)}
                    className="py-3 mt-4 px-3 text-white bg-black rounded-3xl w-full">Add to cart
                  </button>
                  )
              }
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails