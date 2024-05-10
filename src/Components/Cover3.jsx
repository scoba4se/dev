import React from "react";
import blog from "../assets/blog.png";

export const Cover3 = () => {
  return (
    <div className="bg-[#222222] text-[#FFFFFF] justify-center  items-center">
      <div className="justify-center flex">
        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
          Our Latest <span className="text-[#F5900D]">News & Articles</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
          From The <span className="text-[#F5900D]">Blog</span>
        </h1>
      </div>
      <div className=" justify-center items-center  w-full  mx-auto py-16 px-4 grid md:grid-cols-3 gap-6 h-full">
        <div className="">
          <img src={blog} alt="king" />
          <h1>Design . Comments are closed</h1>
          <ul>
            <li>Lorem ipsum dolo sit amet</li>
            <li> consectetur</li>
          </ul>
        </div>
        <div>
          <img src={blog} alt="king" />
          <h1>Design . Comments are closed</h1>
          <ul>
            <li>Lorem ipsum dolo sit amet</li>
            <li> consectetur</li>
          </ul>
        </div>
        <div>
          <img src={blog} alt="king" />
          <h1>Design . Comments are closed</h1>
          <ul>
            <li>Lorem ipsum dolo sit amet</li>
            <li> consectetur</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cover3;
