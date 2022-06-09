import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";import Scroll from "../Components/Scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed px-12 w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={logo} style={{ width: "50px" }} alt="" /> */}
        <a
          href="https://drive.google.com/file/d/179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex justify-center items-center gap-2">
            <BsFillPersonLinesFill size={25} />
            <span>Resume</span>
          </span>
        </a>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Scroll to="home" smooth={true} duration={500}>
            Home
          </Scroll>
        </li>
        <li>
          <Scroll to="about" smooth={true} duration={500}>
            About
          </Scroll>
        </li>
        <li>
          <Scroll to="skills" smooth={true} duration={500}>
            Skills
          </Scroll>
        </li>
        <li>
          <Scroll to="project" smooth={true} duration={500}>
            Projects
          </Scroll>
        </li>
        <li>
          <Scroll to="contact" smooth={true} duration={500}>
            Contact
          </Scroll>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Scroll onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Scroll>
        </li>
        <li className="py-6 text-4xl">
          <Scroll onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Scroll>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Scroll onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Scroll>
        </li>
        <li className="py-6 text-4xl">
          <Scroll onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Scroll>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Scroll onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Scroll>
        </li>
      </ul>

      {/* Social Icon */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/feed/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/shahriyarhosen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Scroll
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Scroll>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
