import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const NavigationBar = () => {
  const loggedIn = true;

  return (
    <div className="flex justify-between items-center gap-10 font-bold">
      <NavLink className={"text-slate-900"} to={'/'}>Home</NavLink>
      <NavLink className={"text-slate-900"} to={'/cart'}>
        <AiOutlineShoppingCart className="text-lg"/>
      </NavLink>
      {!loggedIn ? 
        <NavLink className={"text-slate-900"} to={'/singin'}>Login</NavLink>
        :
        <span className="flex items-center gap-3">
          <AiOutlineUser className="text-lg text-green-500"/>
          <NavLink className={"text-green-500"} to={'/account'}>jackson@gmail.com</NavLink>
        </span>
      }
    </div>
  )
}

export default NavigationBar