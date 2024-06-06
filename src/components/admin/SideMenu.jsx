import { Link } from "react-router-dom"

const SideMenu = () => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white w-1/4 md:w-1/6">
            <div className="px-4 py-6">
                <Link to={'/admin'} className="text-green-800 text-2xl font-bold">TrashMark</Link>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            to="/admin/overview"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            Overview
                        </Link>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Trash </span>
                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        to="/admin/trash"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        All
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/trash/?type=renewable"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Renewable
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/admin/trash/?type=non-renewable"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Non-renewable
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <Link
                            to="/admin/sold"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Sold trash
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/admin/sellers"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Sellers
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/admin/reports"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Reports
                        </Link>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Account </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        to="/admin/profile"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Profile
                                    </Link>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            localStorage.removeItem('super-user');
                                            window.location.replace('/admin/sign-in');
                                        }}
                                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu