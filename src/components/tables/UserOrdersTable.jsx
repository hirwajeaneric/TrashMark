/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import DeliveryStatus from '../../components/other-components/DeliveryStatus';

const UserOrdersTable = ({ orders }) => {
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
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Paid Amount</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">Delivery status</th>
                            <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {orders.length === 0 &&
                            <tr>
                                <td
                                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                                    colSpan={8}
                                >You do not have orders yet</td>
                            </tr>
                        }
                        {orders.map((order, index) => (<tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.client.firstName+" "+order.client.lastName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.province +", "+order.district}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.products[0].name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.products[0].quantity}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.totalPrice}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <DeliveryStatus
                                    color={(order.deliveryStatus.seller == "Delivered") ? "green" : "orange"}
                                    text={order.deliveryStatus.seller}
                                />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            <Link to={`/account/order/${order._id}`} className='text-sm py-1 px-2 bg-black rounded-md text-white'>More details</Link>
                            </td>
                        </tr>))}

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

export default UserOrdersTable