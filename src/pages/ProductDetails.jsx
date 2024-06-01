import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom"
import { getProductByIdRequest } from "../api/product";
import { AddOrderRequest } from "../api/order";
import { Store } from "../context/StoreContext";

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

  const handleAddProductToCart = async (productId) => {
    var user = JSON.parse(localStorage.getItem("client"));

    try {
      const { product } = await getProductByIdRequest(productId);
  
      const addOrderResponse = await AddOrderRequest({
        client: user._id,
        seller: product.seller,
        deliveryPrice: product.deliveryPrice,
        deliveryTime: product.deliveryTime,
        products: [{
          id: product._id,
          name: product.name,
          image: images[0],
          quantity: 1,
          maxQuantity: product.quantity,
          pricePerUnit: product.unitPrice
        }]
      });

      if (addOrderResponse.message) {
        setLoading(false);
        navigate("/cart");
      }
    } catch (error) {
      handleResponseMessage('error', error.message);
    }
  };

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

      <div className="flex mx-auto flex-wrap px-4 gap-4 sm:px-6 lg:px-8 max-w-screen-xl w-full justify-between items-start">
        <div className="w-full md:w-[49%]">
          <img
            src={images[0]}
            alt={product.name}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-[49%]">
          <div className="flow-root w-full">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.name}</dd>
              </div>


              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Delivery time</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.deliveryTime}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Quality</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.quantity}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price per unit</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.unitPrice} Rwf</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.description}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Seller</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.sellerName}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Contact seller</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.sellerPhone}</dd>
              </div>
              
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Delivery fee</dt>
                <dd className="text-gray-700 sm:col-span-2">{product.deliveryPrice} Rwf</dd>
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