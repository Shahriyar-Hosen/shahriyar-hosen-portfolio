import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProjectDetails from "./Components/ProjectDetails";
import Blogs from "./Pages/Blogs";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
};

export default App;
