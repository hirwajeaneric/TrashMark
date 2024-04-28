const Search = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Materials for sale</h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
          >
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
            <div>
              <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

              <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 space-y-2">
                <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                  >
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                  >
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> The highest price is $600 </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
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
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>

                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>

                <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                  >
                    <span className="text-sm font-medium"> Colors </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterRed"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Red </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterBlue"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Blue </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterGreen"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Green </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterOrange"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Orange </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterPurple"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Purple </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterTeal"
                            className="size-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700"> Teal </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <a href="/product/23434qew3q4sfsdf34f434" className="group block overflow-hidden">
                  <img
                    src="/public/old-and-obsolete-computer-set-on-the-floor-with-grunge-concrete-wall-background-vintage-color-tone.png"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3
                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      Old school PC Monitor & Accessories
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> 40,000.00 Rwf </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="/public/dye-buckets.jpeg"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3
                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      3 Dye Buckets for sale
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> 10,000.00 Rwf </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="/public/full_2024_3211-2_stitched-trial_P04_P5.jpg"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3
                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      Used bike for adults
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> 90,000.00 Rwf </span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search