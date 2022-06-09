import React from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} style={{ width: "50px" }} alt="" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden">
        <FaBars />
      </div>
      {/* Mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* Social Icon */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
