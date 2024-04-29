import { Link } from 'react-router-dom';

const UserProductsTable = () => {
    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Client</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Location</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Product</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Quantity</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Amount</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Delivery status</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Kibagabaga</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Old school pc & accessories</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">40,000.00</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <span
                                    class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="-ms-1 me-1.5 h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <p class="whitespace-nowrap text-sm">Delivered</p>
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <Link
                                    href="#"
                                    class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                                >
                                    View more
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                        </tr>

                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                    <li>
                        <a
                            href="#"
                            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            1
                        </a>
                    </li>

                    <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                        2
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            4
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
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

export default UserProductsTable