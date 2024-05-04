import { Outlet, NavLink} from "react-router-dom";
import Cookies from "js-cookie";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GoContainer } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";

const Account = () => {
  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("client");
    Cookies.remove('access-token');
    window.location.replace("/");
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full gap-5 mt-9 mx-auto max-w-screen-xl justify-center px-8 md:px-0 pb-4 md:pb-0">
        <NavLink to={'/account/orders'} className="flex items-center gap-2 hover:font-bold">
          <MdOutlineRequestPage />
          Orders
        </NavLink>
        <NavLink to={'/account/manage-products'} className="flex items-center gap-2 hover:font-bold">
          <GoContainer />
          Manage products
        </NavLink>
        <NavLink to={'/account/purchases'} className="flex items-center gap-2 hover:font-bold">
          <IoCartOutline />
          Purchases
        </NavLink>
        <NavLink to={'/account/profile'} className="flex items-center gap-2 hover:font-bold active:text-green-500">
          <AiOutlineUser />
          Profile
        </NavLink>
        <button onClick={logout} className="flex items-center gap-2 text-red-600 hover:font-bold">
          <IoLogOutOutline />
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  )
}

export default Account