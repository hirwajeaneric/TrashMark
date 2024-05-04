import { useState } from "react";
import NavigationBar from "./NavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex w-full border-b-2 border-green-800 justify-center h-20">
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl w-full justify-between items-center">
        <Link to={'/'} className="text-green-800 text-2xl font-bold">TrashMark</Link>
        <NavigationBar />
        <TiThMenuOutline 
          className="text-2xl block md:hidden" 
          onClick={handleMenu}
        />
        {isMenuVisible && <MobileNavigationBar handleMenu={handleMenu} />}
      </div>
    </div>
  )
}

export default Header