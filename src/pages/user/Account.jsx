import { Outlet, NavLink} from "react-router-dom";
import Cookies from "js-cookie";

const Account = () => {
  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("client");
    Cookies.remove('access-token');
    window.location.replace("/");
  };

  return (
    <div className="w-full">
      <div className="flex gap-5 mt-9 mx-auto max-w-screen-xl justify-center">
        <NavLink to={'/account/orders'}>Orders</NavLink>
        <NavLink to={'/account/manage-products'}>Manage products</NavLink>
        <NavLink to={'/account/purchases'}>Purchases</NavLink>
        <NavLink to={'/account/profile'} className={"active:text-green-600"}>Profile</NavLink>
        <button onClick={logout} className={"text-red-600"}>Logout</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Account