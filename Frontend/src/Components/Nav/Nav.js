import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../Assets/Logo.png";

function Nav() {
  return (
    <div className="  bg-gray-50">
      <div className="mx-2 flex justify-between">
        <Link to="/" class="navbar-brand">
          <img src={Logo} className="h-20 mx-4" />
        </Link>
        <div className="font-medium flex flex-row space-x-8 rtl:space-x-reverse my-auto justify-end mx-10 px-10">
          <Link
            to="/Resources"
            className="text-black  hover:bg-red-400 focus:outline-none font-lg rounded-lg text-sm px-5 py-2.5  dark:hover:bg-red-400"
          >
            Legal Resources
          </Link>
          <Link
            to="/Case"
            className="text-black  hover:bg-red-400 focus:outline-none font-lg rounded-lg text-sm px-5 py-2.5  dark:hover:bg-red-400"
          >
            Case Studies
          </Link>
          <Link
            to="/Workshop"
            className="text-black  hover:bg-red-400 focus:outline-none font-lg rounded-lg text-sm px-5 py-2.5  dark:hover:bg-red-400"
          >
            Empowerment Workshop
          </Link>
          <Link
            to="/Actions"
            className="text-black  hover:bg-red-400 focus:outline-none font-lg rounded-lg text-sm px-5 py-2.5  dark:hover:bg-red-400"
          >
            Legal Laws
          </Link>
          <Link
            to="/About"
            className="text-black  hover:bg-red-400 focus:outline-none font-lg rounded-lg text-sm px-5 py-2.5  dark:hover:bg-red-400"
          >
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
