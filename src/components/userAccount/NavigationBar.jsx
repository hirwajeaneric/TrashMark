import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("client"));
    setUserInfo(userInfo);
  }, [])

  return (
    <div className="flex justify-between items-center gap-10 font-bold">
      <NavLink className={"text-slate-900"} to={'/'}>Home</NavLink>
      <NavLink className={"text-slate-900 flex items-center gap-2"} to={'/search'}>
        Search
        <AiOutlineSearch className="text-lg" />
      </NavLink>
      {!userInfo ?
        <NavLink className={"text-slate-900"} to={'/sign-in'}>Login</NavLink>
        :
        <>
          <NavLink className={"text-slate-900"} to={'/cart'}>
            <AiOutlineShoppingCart className="text-lg" />
          </NavLink>
          <span className="flex items-center gap-3">
            <NavLink className={"text-green-600"} to={'/account'}>{userInfo.email}</NavLink>
            <AiOutlineUser className="text-lg text-green-600" />
          </span>
        </>
      }
    </div>
  )
}

export default NavigationBar