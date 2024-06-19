import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const TopNavigation = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('admin')));    
    }, [])
    
    return (
<div className="flex items-center justify-end px-4 border-b border-gray-200 sticky">
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