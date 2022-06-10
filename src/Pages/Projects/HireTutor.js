import React from "react";
import DetailsNav from "../../Components/DetailsNav";
import HomePage from "../../assets/HireTutorHome.png";
import Authentication from "../../assets//Authentication.png";
import CheckoutPage from "../../assets/CheckoutPage.png";
import Blogs from "../../assets/hireTutorBlogs.png";
import hireTutor from "../../assets/hire-tutor.png";
import { ImPlus, ImEyePlus } from "react-icons/im";

const HireTutor = () => {
  return (
    <section className=" bg-primary h-full pb-10">
      <DetailsNav />
      <div className="pt-24 max-w-7xl mx-auto flex flex-col justify-center items-center gap-10">
        {/* Project Details */}
        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img className="full" src={hireTutor} alt="CaliphTools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl">Hire Tutor</h2>
            <p>
              This App is for a Tutor Hire who provides many Types of Tuition.
              There are different types of tutors with different types of
              services.
            </p>
            
            <div class="grid  sm:flex justify-center items-center my-10 gap-3">
              {" "}
              <a
                href="https://hire-tutor-f0b91.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                  Demo
                  <ImEyePlus className="ml-3 " />
                </button>
              </a>
              <span className="flex justify-center">
                <ImPlus />
              </span>
              <a
                href="https://github.com/shahriyarhosen/hire-tutor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                  Code 
                  <ImEyePlus className="ml-3" />
                </button>
              </a>
            </div>

            <div class="card-actions justify-center mt-5">
              <div className="flex flex-wrap items-center gap-1">
                <span>Technology Used: </span>

                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React JS
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React Router
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Firebase
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React firebase hooks
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React bootstrap
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React MDB
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Framer Motion
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div class="card-body">
            <h2 class="card-title text-3xl">Home Page</h2>
            <div className="flex flex-col gap-2">
              <p>
                This is a tutor hire website. This website has a navigation menu
                from which you can go to different pages. Next to it is a banner
                and just below it is a description of what kind of service this
                tutor offers, price and button to take the service. In the next
                section, there is For That Reason Hire Me and below all, there
                is a footer where different means of communication are given.
              </p>
            </div>
          </div>
          <figure>
            <img className="w-full" src={HomePage} alt="CaliphTools" />
          </figure>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={Authentication} alt="CaliphTools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl">Authentication</h2>
            <p>
              There is a login and sign in page for authentication and there is
              a social login section
            </p>
          </div>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div class="card-body">
            <h2 class="card-title text-3xl">Checkout Page</h2>
            <p>
              Only those who are logged in to the page can come and fill out the
              form to book the service and submit
            </p>
          </div>
          <figure>
            <img src={CheckoutPage} alt="CaliphTools" />
          </figure>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={Blogs} alt="CaliphTools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl">Blogs</h2>
            <p>The following three questions are answered on this page</p>
            <p>1_ Difference between authorization and authentication</p>
            <p>
              2_ Why are you using firebase? What other options do you have to
              implement authentication?
            </p>
            <p>
              3_ What other services does firebase provide other than
              authentication?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTutor;
