/* eslint-disable react/prop-types */
const UserTrashTable = ({ products, setSelectedProduct }) => {
    const handleProductSelection = (selectedProduct) => {
        setSelectedProduct(selectedProduct);
    };
    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Quantity</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Perishable</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Category</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {products.length === 0 &&
                            <tr>
                                <td
                                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                                    colSpan={8}
                                >No available products</td>
                            </tr>
                        }

                        {products.map((product, index) => (<tr key={index}>                            
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.quantity}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.perishable ? "Yes": "No"}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.category}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-right">
                                <button type='button' onClick={() => handleProductSelection(product)} className='text-sm py-1 px-2 bg-black rounded-md text-white'>More details</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                    <li>
                        <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">1</a>
                    </li>
                    <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">2</li>
                    <li>
                        <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">3</a>
                    </li>
                    <li>
                        <a href="#" className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">4</a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default UserTrashTable