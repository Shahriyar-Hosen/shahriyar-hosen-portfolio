import React from "react";
import CaliphTools from "../assets/caliph-tools-manufacturer.png";
import BdBooks from "../assets/bd-books-warehouse.png";
import HireTutor from "../assets/hire-tutor.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      name="project"
      className="w-full md:h-screen text-gray-300 bg-primary "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 mt-10 mb-20">
            Projects
          </h1>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${CaliphTools})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100  px-5">
              <span className="text-lg font-bold text-white tracking-wider">
                This is a tools manufacturer's website. There are different
                types of user interfaces for general users and admin users.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://caliph-tools-manufacturer.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <Link to="/project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BdBooks})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100  px-5">
              <span className="text-lg font-bold text-white tracking-wider">
                This is a warehouse website. Here is the information about
                product storage accounting and product management.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bd-books-warehouse.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <Link to="/project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${HireTutor})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 px-5">
              <span className="text-lg font-bold text-white tracking-wider">
                This App is for a Tutor Hire who provides many Types of Tuition.
                There are different types of tutors with different types of
                services.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://hire-tutor-f0b91.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <Link to="/project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
