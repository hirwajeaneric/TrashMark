/* eslint-disable react/prop-types */
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from "react";

const MobileNavigationBar = ({handleMenu}) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("client"));
    setUserInfo(userInfo);
  }, []);

  return (
    <div className="flex flex-col w-full md:hidden bg-slate-200 py-5 px-5 fixed top-20 left-0 z-50 items-start gap-8 font-bold">
      <a className={"text-slate-900 w-full"} onClick={handleMenu} href={'/'}>Home</a>
      <a className={"text-slate-900 flex items-center gap-2 justify-between w-full"} onClick={handleMenu} href={'/search'}>
        Search
        <AiOutlineSearch className="text-lg" />
      </a>
      {!userInfo ?
        <a className={"text-slate-900 flex items-center justify-between w-full"} onClick={handleMenu} href={'/sign-in'}>Login</a>
        :
        <>
          <a className={"text-slate-900 flex items-center justify-between w-full"} onClick={handleMenu} href={'/cart'}>
            Cart
            <AiOutlineShoppingCart className="text-lg" />
          </a>
          <span className="flex items-center gap-3 text-slate-900 justify-between w-full">
            <a className={"text-green-600"} onClick={handleMenu} href={'/account'}>{userInfo.email}</a>
            <AiOutlineUser className="text-lg text-green-600" />
          </span>
        </>
      }
    </div>
  )
}

export default MobileNavigationBar