import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        
      <div className="flex justify-center items-center pt-10">
          <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 my-10 ">
            Projects
          </h1>
        </div>
        <div className="max-w-7xl w-full grid grid-cols-2 gap-8">
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 sm:text-right text-lg">
          <div>
            <p>I am Shahriar Hossain. Marn-Stack is a hard-working web developer in
            Bangladesh. I usually create applications with react.js. Before I
            start any project with the importance of UI / UX in each project. My
            goal is to finish the job on time and do my best to get the job done
            Nicely.</p>
          </div>
          <div  className="sm:text-left ">
            <p>
            I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small businesses to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
