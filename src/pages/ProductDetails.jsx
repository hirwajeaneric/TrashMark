import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"

const ProductDetails = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "Product Name",
  });

  return (
    <div className="flex justify-center w-full pt-20">
      <Helmet>
        <title>Product Details - {product.name}</title>
        <meta name='description' content='View product details - TrashMark.' />
      </Helmet>
      <div className="flex mx-auto px-2 gap-4 sm:px-6 lg:px-8 max-w-screen-xl w-full justify-between items-center">
        <div className="w-full md:w-1/2">
          <img src="/full_2024_3211-2_stitched-trial_P04_P5.jpg" alt="" className="w-full"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flow-root w-full">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">Bicycle</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Seller</dt>
                <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Quality</dt>
                <dd className="text-gray-700 sm:col-span-2">Extensively Used</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price</dt>
                <dd className="text-gray-700 sm:col-span-2">$100+</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                  doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                  aspernatur neque molestiae labore aliquam soluta architecto?
                </dd>
              </div>

              <button onClick={() => navigate("/cart")} className="py-3 mt-4 px-3 text-white bg-black rounded-3xl w-full">Add to cart</button>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails