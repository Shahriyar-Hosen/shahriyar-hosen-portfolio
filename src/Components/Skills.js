import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Router from "../assets/react-router.png";
import Bootstrap from "../assets/bootstrap.png";
import Query from "../assets/react-query.png";
import Express from "../assets/Express-js.png";
import JWT from "../assets/JWT.png";
import Typescript from "../assets/typescript.png";
import Native from "../assets/React-Native.png";
import VSCode from "../assets/VS-Code.png";
import Heroku from "../assets/Heroku.png";
import Netlify from "../assets/Netlify.png";
import NextJs from '../assets/NextJs.png'

const Skills = () => {
  return (
    <section name="skills" className="w-full  h-full bg-primary text-gray-300  min-h-screen" >
      {/* Heading */}
      <div className="flex justify-center pt-10">
        <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 mt-10">
          Skills
        </h1>
      </div>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full  ">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Expertise
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 uppercase">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 uppercase">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 uppercase">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 uppercase">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto " src={Router} alt="HTML icon" />
            <p className="my-4 uppercase">React Router</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto " src={Bootstrap} alt="HTML icon" />
            <p className="my-4 uppercase ">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto " src={Tailwind} alt="HTML icon" />
            <p className="my-4 uppercase">Tailwind css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto " src={Query} alt="HTML icon" />
            <p className="my-4 uppercase">Query</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  ">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Comfortable
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 uppercase">Node js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 uppercase">Mongo db</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4  uppercase">Express js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto " src={FireBase} alt="HTML icon" />
            <p className="my-4 uppercase ">FireBase</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  ">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Familiar
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="HTML icon" />
            <p className="my-4 uppercase">Typescript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Native} alt="HTML icon" />
            <p className="my-4 uppercase">Native</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={JWT} alt="HTML icon" />
            <p className="my-4 uppercase">JWT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={NextJs} alt="HTML icon" />
            <p className="my-4 uppercase">Next Js</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Tools
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 uppercase">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={VSCode} alt="HTML icon" />
            <p className="my-4 uppercase">VS Code</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Heroku} alt="HTML icon" />
            <p className="my-4 uppercase">Heroku</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Netlify} alt="HTML icon" />
            <p className="my-4 uppercase">Netlify</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
