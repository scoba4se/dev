import React from "react";
import king1 from "../assets/king1.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={king1}
        alt="king"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute  top-0 w-full h-full flex flex-col justify-top  text-[#FFFFFF] ">
        <div className="mt-[75px] ml-12"></div>
        <div className=" md:left-[9%] max-w-[1100px] m-auto absolute mt-[190px] p-4">
          <h1 className="font-bold text-4xl md:text-7xl drop-shadow-2xl">
            Scoba frontend - Web Developer
          </h1>

          <button className="bg-[#F5900D] my-10 hover:bg-[#2563eb]">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
