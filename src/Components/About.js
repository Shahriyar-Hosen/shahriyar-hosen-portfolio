import { FaFileDownload } from "react-icons/fa";
import { FiExternalLink, FiLink } from "react-icons/fi";
import AboutMe from "../assets/about-me.png";
import Resume from '../assets/Resume/Resume of SHAHRIYAR HOSEN-Web-Developer.pdf';

const About = () => {
  return (
    <section name="about" className="w-full h-full bg-primary text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 my-20 ">
            About Me
          </h1>
        </div>
        <div className="max-w-6xl w-full  px-4 text-lg">
          <div className="card grid grid-cols-1 md:grid-cols-2">
            <figure>
              <img src={AboutMe} className="p-5" alt="About Me" />
            </figure>
            <div className="card-body">
              <p>
                I am Shahriar Hossain. Marn-Stack is a hard-working web
                developer in Bangladesh. I usually create applications with
                react.js. Before I start any project with the importance of UI /
                UX in each project. My goal is to finish the job on time and do
                my best to get the job done Nicely.
              </p>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small businesses to
                large enterprise corporations. What would you do if you had a
                software expert available at your fingertips?
              </p>
              <div className="card-actions justify-center items-center">
                {" "}
                <a
                  href="https://drive.google.com/file/d/179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white group border-2 px-6 py-3 my-20 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    View Resume
                    <FiExternalLink className="ml-3 " />
                  </button>
                </a>
                <span>
                  <FiLink />
                </span>
                <a
                  href={Resume}
                  download
                >
                  <button className="text-white group border-2 px-6 py-3 my-20 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                    Download
                    <FaFileDownload className="ml-3" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
