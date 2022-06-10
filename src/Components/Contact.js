import React from "react";
import ContactMe from "../assets/contact-me.png";

const Contact = () => {
  return (
    <>
      <section name="about" className="w-full h-full bg-primary text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex justify-center items-center pt-10">
            <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 my-20 ">
              CONTACT ME
            </h1>
          </div>
          <div className="max-w-6xl w-full  px-4 text-lg">
            <div className="card grid grid-cols-1 md:grid-cols-2">
              <figure>
                <img src={ContactMe} className="p-5" alt="About Me" />
              </figure>
              <div className="card-body">
                <form
                  method="POST"
                  action="https://getform.io/f/edbacf8a-d2b7-4aef-96fe-83630c5b10df"
                  className="flex flex-col max-w-[650px] w-full text-primary"
                >
                  <input
                    className=" p-2 input-info rounded py-3"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="my-4 p-2  input-info rounded py-3"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <textarea
                    className="p-2  input-info rounded py-3"
                    name="message"
                    rows="10"
                    placeholder="Your massage goes here..."
                    required
                  ></textarea>
                  <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-200">
                    Let's Collaborate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        name="contact"
        className="card w-full h-full bg-primary grid grid-cols-1 md:grid-cols-2 "
      >
        <figure>
          <img className="p-5" src={ContactMe} alt="" />
        </figure>
        
      </div> */}
    </>
  );
};

export default Contact;
