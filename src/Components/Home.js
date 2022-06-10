import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <section>
    <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
