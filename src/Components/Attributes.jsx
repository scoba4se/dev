import React from "react";
import lap2 from "../assets/lap2.png";
import lap1 from "../assets/lap1.png";
import lap3 from "../assets/lap3.png";

export const Attributes = () => {
  return (
    <div className="bg-[#222222]  w-full  ">
      <div className="   justify-center items-center bg-[#FFFFFF] w-full  mx-auto py-16 px-4 grid md:grid-cols-3 gap-6 h-full ">
        <img className="" src={lap2} alt="king" />
        <img className="" src={lap1} alt="king" />
        <img className="" src={lap3} alt="king" />
      </div>
    </div>
  );
};
export default Attributes;
