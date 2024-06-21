import React from "react";
import sampatLogo from "../../images/Login/sampatName.png";
import {
  faBell,
  faGear,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  // console.log()
  return (
    <header
      className="h-[10vh] bg-bgBlack w-full flex justify-between items-center border-b-[1px]
    border-bgGray"
    >
      {/* Search Input */}
      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/* Adjusting to center the image */}
          <img src={sampatLogo} className="w-[12vw] mx-auto ml-6" alt="" />
        </div>
        <div className="flex absolute left-72 text-name bg-bgGray pt-2 pb-2 pl-5 pr-5 rounded-full w-[25vw] items-center justify-between">
          <input
            type="text"
            className="bg-transparent text-name font-poppins outline-none text-sm"
            placeholder="Search Your Asset"
          />
          <FontAwesomeIcon className="text-xl" icon={faSearch} />
        </div>
      </div>

      {/* Icons for Settings, Notifications, and User */}
      <div className="text-white flex gap-5 mr-10">
        {/* Settings */}
        <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faGear} className="text-flo" />
        </div>
        {/* Notifications */}
        <div className="relative text-flo w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faBell} />
          <p className="absolute -top-1 -right-1 bg-flo text-black rounded-full w-4 h-4 flex items-center justify-center text-sm">
            3
          </p>
        </div>
        {/* User */}
        <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-flo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
