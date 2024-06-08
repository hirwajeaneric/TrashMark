import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const ProductCard = ({ product, order }) => {
    return (
        <li className={order === 2 && `lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1`}>
            <Link to={`/product/${product._id}`} className="group relative block">
                <img
                    src={product.imageFiles[0]}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">{product.name}</h3>
                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                        Shop Now
                    </span>
                </div>
            </Link>
        </li>
    )
}

export default ProductCard