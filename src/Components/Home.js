import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Scroll from "../Components/Scroll";

const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shahriyar Hosen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Mern Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am Shahriar Hossain. Marn-Stack is a hard-working web developer in
          Bangladesh. I usually create applications with react.js. Before I
          start any project with the importance of UI / UX in each project. My
          goal is to finish the job on time and do my best to get the job done
          Nicely.
        </p>
        <div>
          <Scroll to="project" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Scroll>
        </div>
      </div>
    </section>
  );
};

export default Home;
