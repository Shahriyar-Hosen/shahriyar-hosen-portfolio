import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </main>
  );
};

export default App;
