import logo from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ToogleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 shadow-sm bg-green-800 relative">
      <div className="flex items-center gap-2">
        <img src={logo} className="h-10" alt={""} />
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-100"> HealthBD </h1>
      </div>
      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search"
        className="border md:flex hidden p-2 rounded-full px-4 w-1/4 h-8 outline-none placeholder:text-sm text-sm text-gray-500"
      />
      {/* Language dropdown */}
      <select name="language" className="p-1  md:flex hidden  rounded-sm px-4 bg-white text-sm">
        <option value="English">English</option>
        <option value="French">French</option>
      </select>

      <CiMenuBurger className="text-white md:hidden flex cursor-pointer" onClick={() => ToogleShowMenu()} />

      {
        showMenu && (
          <div className={"absolute top-0 left-0  h-screen w-80 z-50"}>
            <Sidebar />
          </div>
        )
      }


    </div>
  );
};

export default Header;
