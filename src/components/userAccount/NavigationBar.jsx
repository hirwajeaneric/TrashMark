import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("client"));
    setUserInfo(userInfo);
  }, [])

  return (
    <div className="hidden md:flex justify-between items-center gap-10 font-bold">
      <a className={"text-slate-900"} href={'/'}>Home</a>
      <a className={"text-slate-900 flex items-center gap-2"} href={'/search'}>
        Search
        <AiOutlineSearch className="text-lg" />
      </a>
      {!userInfo ?
        <a className={"text-slate-900"} href={'/sign-in'}>Login</a>
        :
        <>
          <a className={"text-slate-900"} href={'/cart'}>
            <AiOutlineShoppingCart className="text-lg" />
          </a>
          <span className="flex items-center gap-3">
            <a className={"text-green-600"} href={'/account'}>{userInfo.email}</a>
            <AiOutlineUser className="text-lg text-green-600" />
          </span>
        </>
      }
    </div>
  )
}

export default NavigationBar