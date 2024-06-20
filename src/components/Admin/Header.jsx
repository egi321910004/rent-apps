import React from "react";
import Logo from "../../assets/RENT.png";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
// Import DarkModeSwitcher here if needed

import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full border bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-end py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex justify-end items-center 2xsm:gap-7">
          <ul className="flex justify-end items-center 2xsm:gap-4">
            <DropdownNotification />
            {/* <DropdownMessage /> */}
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
