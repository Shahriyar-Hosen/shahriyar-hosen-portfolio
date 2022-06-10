import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Pages/Blogs";
import ToolsManufacture from "./Pages/Projects/ToolsManufacture";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ToolsManufacture" element={<ToolsManufacture />} />
      </Routes>
    </main>
  );
};

export default App;
