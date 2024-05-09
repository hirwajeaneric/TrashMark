import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom"
import { getProductByIdRequest } from "../api/product";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [clientId, setClientId] = useState({});

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
                    onClick={() => navigate("/cart")}
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