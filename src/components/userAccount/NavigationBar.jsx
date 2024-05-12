import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';

const NavigationBar = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("client"));
    setUserInfo(userInfo);
  }, [])

  function logout(e) {
    e.preventDefault();

    localStorage.removeItem("client");
    Cookies.remove('access-token');
    window.location.replace("/");
  }

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
            <Popover>
              <PopoverButton
                className="text-sm/6 flex items-center gap-2 font-semibold text-green-600 focus:outline-none data-[active]:text-green-900 data-[hover]:text-green-500 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                <AiOutlineUser className="text-lg" />
                {userInfo.email}
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  anchor="bottom"
                  className="divide-y divide-white/5 rounded-xl bg-gray-50 text-sm/6 [--anchor-gap:var(--spacing-5)]"
                >
                  <div className="p-3">
                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="/account/profile">
                      <p className="font-semibold text-black">Profile</p>
                    </a>
                    <button className="block rounded-lg py-2 px-3 transition hover:bg-white/5" type='button' onClick={logout}>
                      <p className="font-semibold text-black">Logout</p>
                    </button>
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>
          </span>
        </>
      }
    </div>
  )
}

export default NavigationBar