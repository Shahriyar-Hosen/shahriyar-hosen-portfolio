import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
