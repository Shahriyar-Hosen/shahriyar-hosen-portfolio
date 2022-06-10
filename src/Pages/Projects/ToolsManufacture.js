import React from "react";
import DetailsNav from "../../Components/DetailsNav";
import CaliphTools from "../../assets/caliph-tools-manufacturer.png";
import CaliphHomePage from "../../assets/Caliph-Home-Page.png";
import Dashboard from "../../assets/Dashboard.png";
import Blogs from "../../assets/caliph-Blogs.png";

const ToolsManufacture = () => {
  return (
    <section className=" bg-primary h-full">
      <DetailsNav />
      <div className="pt-24 max-w-7xl mx-auto flex flex-col justify-center items-center gap-10">
        {/* Project Details */}
        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={CaliphTools} alt="CaliphTools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl">Caliph Tools Manufacturer</h2>
            <p>
              This is a tools manufacturer's website. There are different types
              of user interfaces for general users and admin users.
            </p>
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
                  React Query
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Axios
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React Hook form
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Firebase
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Firebase Hooks
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Authentication
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Dotenv
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Tailwind CSS
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  daisy UI
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Tailwind Elements
                </button>
                <button class="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  sweet alert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div class="card-body">
            <h2 class="card-title text-3xl">Home Page</h2>
            <p>
              The homepage has a banner first. Then there is talk about Khalifa
              Tools and then there are Khalifa Tools. From where all clients can
              order. This is followed by a business summary of Khalifa Tools.
              Then it is said why order from Khalifa Tools. Then there are
              customer reviews & lasts Footer
            </p>
          </div>
          <figure>
            <img src={CaliphHomePage} alt="CaliphTools" />
          </figure>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={Dashboard} alt="CaliphTools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl">Dashboard</h2>
            <p>
              Two types of users will see two types of interfaces in the
              dashboard. First let's talk about the general user interface. A
              typical user will see: his profile, a list of everything he has
              ordered, and a review section for adding reviews. Now let's say
              about admin user, when admin user login, you can see: his profile,
              all orders, can be set, can manage tools and can make someone
              admin.
            </p>
          </div>
        </div>

        <div class="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div class="card-body">
            <h2 class="card-title text-3xl">Blogs</h2>
            <p>
              Six questions are answered in the Blogs section. Below are the
              questions:
            </p>

            <ul>
              <li>
                1_ How will you improve the performance of a React Application?
              </li>
              <li>
                2_ What are the different ways to manage a state in a React
                application?
              </li>
              <li>3_ How does prototypical inheritance work?</li>
              <li>
                4_ Why you do not set the state directly in React. For example,
                if you have const [products, setProducts] = useState([]). Why
                you do not set products = [...] instead, you use the setProducts
              </li>
              <li>
                5_ You have an array of products. Each product has a name,
                price, description, etc. How will you implement a search to find
                products by name?
              </li>
              <li>6_ What is a unit test? Why should write unit tests?</li>
            </ul>
          </div>
          <figure>
            <img src={Blogs} alt="CaliphTools" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ToolsManufacture;
