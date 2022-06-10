import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/edbacf8a-d2b7-4aef-96fe-83630c5b10df"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="flex justify-center pt-10">
        <h1 className="text-5xl font-bold inline border-b-4 border-pink-600 mt-10 text-gray-300">
        Contact
        </h1>
      </div>
        <div className="py-8">
          <p className="text-gray-300 py-4">
            / / Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
