import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
};

export default App;
