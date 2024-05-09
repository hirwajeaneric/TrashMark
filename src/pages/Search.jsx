import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async"
import ProductItem from "../components/ProductItem";
import { Store } from "../context/StoreContext";
import ProductFilters from "../components/ProductFilters";
import SortComponent from "../components/SortComponent";
import { getAllAvailableProductsRequest } from "../api/product";
import { Link } from "react-router-dom";

const Search = () => {
  const { products, setProducts } = useContext(Store);

  useEffect(() => {
    getAllAvailableProductsRequest()
      .then((response) => {
        if (response) {
          setProducts({ ...products, availableProducts: response.products });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [products, setProducts]);

  return (
    <section>
      <Helmet>
        <title>Discover products - TrashMark</title>
        <meta name='description' content='Search and discover more products on TrashMark.' />
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Materials for sale</h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <SortComponent />

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>
              <ProductFilters />
            </div>
          </div>

          {/* Products */}
          {products.availableProducts.length !== 0 &&
            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.availableProducts.map((product, index) => (
                  <ProductItem product={product} key={index} />
                ))}
              </ul>
            </div>
          }

          {products.availableProducts.length === 0 &&
            <div className="lg:col-span-3">
              {products.availableProducts.length === 0 &&
                <p className="text-slate-700">
                  No available products &nbsp;
                  <Link 
                    className="text-green-500 hover:text-green-600"
                    to={'/account/manage-products'}>
                      Add product
                  </Link>
                </p>
              }
            </div>
          }

        </div>
      </div>
    </section>
  )
}

export default Search