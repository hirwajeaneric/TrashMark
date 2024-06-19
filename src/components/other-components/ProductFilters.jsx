/* eslint-disable react/prop-types */
import { productTypes } from "../../utils/productTypes";
import DownArrowIconLarge from "../icons/DownArrowIconLarge";

const ProductFilters = ({ selectedTypes, handleTypeChange }) => {
//   const handlePriceChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "FilterPriceFrom") {
//       if (value < 0) {
//         alert("Price must be greater than or equal to 0");
//         return;
//       }
//       handlePriceRangeChange(value, priceRange.to);
//     } else if (id === "FilterPriceTo") {
//       if (value < 0 || value < priceRange.from) {
//         alert("Price must be greater than or equal to the minimum price");
//         return;
//       }
//       handlePriceRangeChange(priceRange.from, value);
//     }
//   };

  return (
    <div className="mt-1 space-y-2">
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Trash Type </span>
          <span className="transition group-open:-rotate-180">
            <DownArrowIconLarge />
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">{selectedTypes.length} Selected</span>
            <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={() => window.location.reload()}>
              Reset
            </button>
          </header>

          <ul className="space-y-1 border-t border-gray-200 p-4">
            {productTypes.map((product, index) => (
              <li key={index}>
                <label htmlFor={`FilterType_${index}`} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`FilterType_${index}`}
                    checked={selectedTypes.includes(product)}
                    onChange={() => handleTypeChange(product)}
                    className="size-5 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">{product}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </details>

      {/* <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Price </span>
          <span className="transition group-open:-rotate-180">
            <DownArrowIconLarge />
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">The highest price is {}</span>
            <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={() => handlePriceRangeChange(0, 600)}>
              Reset
            </button>
          </header>

          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>
                <input
                  type="number"
                  id="FilterPriceFrom"
                  placeholder="From"
                  value={priceRange.from}
                  onChange={handlePriceChange}
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
              <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>
                <input
                  type="number"
                  id="FilterPriceTo"
                  placeholder="To"
                  value={priceRange.to}
                  onChange={handlePriceChange}
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
            <button type="button" className="rounded-sm border-gray-200 mt-2 hover:bg-gray-100" onClick={() => filterProducts()}>
              Filter price range
            </button>
          </div>
        </div>
      </details>

      <div className="mt-4">
        <button type="button" className="rounded-sm border-gray-200 mt-2 mb-4" onClick={() => filterProducts()}>
          Filter products
        </button>
      </div> */}
      </div>)
      };

      export default ProductFilters;