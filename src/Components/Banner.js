import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll/modules";

const Banner = () => {
  return (
    <section
      name="home"
      className="w-full h-full md:h-screen bg-primary flex justify-center items-center pt-20 md:pt-10"
    >
      {/* Container */}
      <div class="hero-content w-full flex-col lg:flex-row-reverse max-w-6xl mx-auto px-8 flex  justify-center">
        <img
          src="https://i.ibb.co/kSNKRnh/IMG-20220603-194531-removebg-preview.png"
          class=" max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#dae3ff]">
            Shahriyar Hosen
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#959bad]">
            I'm a Mern Stack Web Developer
          </h2>

          <Link to="project" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-20 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
