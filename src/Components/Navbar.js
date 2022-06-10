import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import Resume from "../assets/Resume/Resume of SHAHRIYAR HOSEN-Web-Developer.pdf";
import NavRoute from "../Pages/NavRoute";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed px-5 w-screen md:px-12 h-[80px] flex justify-between items-center bg-primary text-gray-300 z-10 shadow-lg">
      <div>
        {/* <img src={logo} style={{ width: "50px" }} alt="" /> */}
        <a href={Resume} download>
          <span className="flex justify-center items-center gap-2">
            <BsFillPersonLinesFill size={25} />
            <span>Resume</span>
          </span>
        </a>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex justify-center items-center">
        <li>
          <Link to="home" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth="true" duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="project" smooth="true" duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <NavRoute to="/blogs">Blogs</NavRoute>
        </li>
        <li>
          <Link to="about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth="true" duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 pr-5">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth="true" duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="project" smooth="true" duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <NavRoute to="/blogs">Blogs</NavRoute>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth="true" duration={500}>
            Contact
          </Link>
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
            <Link
              to="contact"
              smooth="true"
              duration={500}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
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
