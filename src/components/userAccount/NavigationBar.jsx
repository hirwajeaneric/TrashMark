import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

const NavigationBar = () => {
  const loggedIn = true;

  return (
    <div className="flex justify-between items-center gap-10 font-bold">
      <NavLink className={"text-slate-900"} to={'/'}>Home</NavLink>
      <NavLink className={"text-slate-900 flex items-center gap-2"} to={'/search'}>
        Search
        <AiOutlineSearch className="text-lg"/>
      </NavLink>
      <NavLink className={"text-slate-900"} to={'/cart'}>
        <AiOutlineShoppingCart className="text-lg"/>
      </NavLink>
      {!loggedIn ? 
        <NavLink className={"text-slate-900"} to={'/singin'}>Login</NavLink>
        :
        <span className="flex items-center gap-3">
          <NavLink className={"text-green-600"} to={'/account'}>jackson@gmail.com</NavLink>
          <AiOutlineUser className="text-lg text-green-600"/>
        </span>
      }
    </div>
  )
}

export default NavigationBar