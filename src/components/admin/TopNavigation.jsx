import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const TopNavigation = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('admin')));    
    }, [])
    
    return (
        <div className="flex items-center justify-between px-4 border-b border-gray-200 sticky">
            <div className="relative">
                <label htmlFor="Search" className="sr-only"> Search </label>
                <input
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md border-slate-400 py-2.5 pl-3 pe-10 shadow-sm sm:text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-opacity-50"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 hover:text-gray-700">
                        <span className="sr-only">Search</span>

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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
            <div className="inset-x-0 bottom-0 border-t border-gray-100">
                <Link to="/admin/profile" className="flex items-center gap-2 bg-white p-2 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://w7.pngwing.com/pngs/499/519/png-transparent-kashifarif-user-profile-person-account-pic-user-interface-line-icon-thumbnail.png"
                        className="size-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">{user.firstName+" "+user.lastName}</strong>
                            <span>{user.email}</span>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopNavigation