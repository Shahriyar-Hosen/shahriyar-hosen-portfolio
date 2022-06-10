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
      <div className="max-w-6xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 mt-10 mb-20">
            Projects
          </h1>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="card card-compact w-full bg-base-100 shadow-xl text-primary">
            <figure>
              <img src={CaliphTools} alt="CaliphTools" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Caliph Tools Manufacturer</h2>
              <p>
                This is a tools manufacturer's website. There are different
                types of user interfaces for general users and admin users.
              </p>
              <div class="card-actions justify-evenly mt-3">
                <a
                  href="https://caliph-tools-manufacturer.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Demo
                  </button>
                </a>
                <Link to="/ToolsManufacture ">
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="card card-compact w-full bg-base-100 shadow-xl text-primary">
            <figure>
              <img src={BdBooks} alt="BdBooks" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Bd Books Warehouse</h2>
              <p>
              This is a warehouse website. Here is the information about
                product storage accounting and product management.
              </p>
              <div class="card-actions justify-evenly mt-3">
                <a
                  href="https://bd-books-warehouse.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Demo
                  </button>
                </a>
                <Link to="/BooksWarehouse">
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="card card-compact w-full bg-base-100 shadow-xl text-primary">
            <figure>
              <img src={HireTutor} alt="HireTutor" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Hire Tutor</h2>
              <p>
              This App is for a Tutor Hire who provides many Types of Tuition.
                There are different types of tutors with different types of
                services.
              </p>
              <div class="card-actions justify-evenly mt-3">
                <a
                  href="https://hire-tutor-f0b91.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Demo
                  </button>
                </a>
                <Link to="/projectDetails">
                  <button className="text-white group btn btn-primary border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
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
