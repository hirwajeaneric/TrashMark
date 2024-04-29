import { Outlet, NavLink} from "react-router-dom"

const Account = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 mt-9 mx-auto max-w-screen-xl justify-center">
        <NavLink to={'/account/orders'}>Orders</NavLink>
        <NavLink to={'/account/manage-products'}>Manage products</NavLink>
        {/* <NavLink to={'/account/my-products'}>My Products</NavLink> */}
        <NavLink to={'/account/purchases'}>Purchases</NavLink>
        <NavLink to={'/account/profile'} className={"active:text-green-600"}>Profile</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Account