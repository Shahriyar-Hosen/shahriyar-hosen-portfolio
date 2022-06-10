import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Pages/Blogs";
import BooksWarehouse from "./Pages/Projects/BooksWarehouse";
import HireTutor from "./Pages/Projects/HireTutor";
import ToolsManufacture from "./Pages/Projects/ToolsManufacture";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ToolsManufacture" element={<ToolsManufacture />} />
        <Route path="/BooksWarehouse" element={<BooksWarehouse />} />
        <Route path="/HireTutor" element={<HireTutor />} />
      </Routes>
    </main>
  );
};

export default App;
