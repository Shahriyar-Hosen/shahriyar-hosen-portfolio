import React from "react";
import ComingSoon from "../assets/coming-soon.jpg";
import DetailsNav from "../Components/DetailsNav";

const Blogs = () => {
  return (
    <div className="w-full h-screen">
        <DetailsNav></DetailsNav>
      <img className="pt-10 w-full md:h-screen" src={ComingSoon} alt="" />
    </div>
  );
};

export default Blogs;
