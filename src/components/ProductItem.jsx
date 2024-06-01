import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductItem = ({product}) => {
    return (
        <li>
            <Link to={`/product/${product._id}`} className="group block overflow-hidden">
                <img
                    src={product.imageFiles[0]}
                    alt={product.name}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                    <h3
                        className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                        {product.name}
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> {product.unitPrice} Rwf </span>
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default ProductItem