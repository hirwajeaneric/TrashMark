import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductItem from "../components/other-components/ProductItem";
import ProductFilters from "../components/other-components/ProductFilters";
import SortComponent from "../components/other-components/SortComponent";
import { getAllAvailableProductsRequest } from "../api/product";
import { Link } from "react-router-dom";
import DownArrowIcon from "../components/icons/DownArrowIcon";

const Search = () => {
  const [sortOptions, setSortOptions] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: 0, to: 600 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllAvailableProductsRequest();
        if (response) {
          setAllProducts(response.products);
          setFilteredProducts(response.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = allProducts;
    
      if (selectedTypes.length > 0) {
        filtered = filtered.filter((product) => selectedTypes.includes(product.type));
      }
    
      if (priceRange.from > 0 && priceRange.to < 600) {
        filtered = filtered.filter(
          (product) => product.unitPrice >= priceRange.from && product.unitrice <= priceRange.to
        );
      }
    
      setFilteredProducts(filtered);
    };
    
    filterProducts();
  }, [allProducts, priceRange.from, priceRange.to, selectedTypes]); // <-- Including selectedTypes and priceRange in the dependencies array

  const handleSortOptions = (e) => {
    const value = e.target.value;
    setSortOptions(value);
    sortProducts(value);
  };

  const sortProducts = (sortOption) => {
    const sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case "Name_DESC":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Name_ASC":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Price_DESC":
        sortedProducts.sort((a, b) => b.unitPrice - a.unitPrice);
        break;
      case "Price_ASC":
        sortedProducts.sort((a, b) => a.unitPrice - b.unitPrice);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type) ? prevTypes.filter((t) => t !== type) : [...prevTypes, type]
    );
  };

  const handlePriceRangeChange = (from, to) => {
    setPriceRange({ from, to });
  };

  return (
    <section>
      <Helmet>
        <title>Discover products - TrashMark</title>
        <meta name="description" content="Search and discover more products on TrashMark." />
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
            <DownArrowIcon />
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <SortComponent sortOptions={sortOptions} handleSortOptions={handleSortOptions} />
            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>
              <ProductFilters
                selectedTypes={selectedTypes}
                handleTypeChange={handleTypeChange}
                priceRange={priceRange}
                handlePriceRangeChange={handlePriceRangeChange}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {filteredProducts.length ? (
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductItem product={product} key={index} />
                ))}
              </ul>
            ) : (
              <p className="text-slate-700">
                No available products &nbsp;
                <Link className="text-green-500 hover:text-green-600" to="/account/manage-products">
                  Add product
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;