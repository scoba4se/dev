import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className=" absolute w-full flex justify-between pt-6 items-center">
      <ul className="hidden md:flex  w-full h-full items-center justify-center ">
        <li className="font-bold text-3xl  p-4">Home</li>
        <li className="font-bold text-3xl p-4">About</li>
        <li className="font-bold text-3xl p-4">Services</li>
        <li className="font-bold text-3xl p-4">Contact</li>
      </ul>

      <HiMenuAlt3
        onClick={handleNav}
        className="z-40 text-white block md:hidden cursor-pointer"
        size={40}
      />
      <div
        className={
          nav
            ? "ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : " absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex  flex-col fixed w-full h-full items-center justify-center ">
          <li className="font-bold text-3xl  p-4">Home</li>
          <li className="font-bold text-3xl p-4">About</li>
          <li className="font-bold text-3xl p-4">Services</li>
          <li className="font-bold text-3xl p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
