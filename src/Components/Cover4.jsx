import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Cover4 = () => {
  const handleGithubClick = () => {
    window.location.href = "https://github.com/scoba4se";
  };

  return (
    <div className="bg-black text-white pl-10">
      <div className="flex px-4 py-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/scoba4se"
          onClick={handleGithubClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6 ml-4 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/aweda-ibrahim-ismaila-56a0a4290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 ml-4" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <SiGmail className="h-6 w-6 ml-4" />
        </a>
      </div>
      <div className="flex justify-end mr-40">
        <div className="text-[#5D5D5D] font-bold">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Hiring</li>
            <li>Our Blog</li>
          </ul>
        </div>
        <div className="pl-20 text-[#5D5D5D] font-bold">
          <ul>
            <li>Website Development</li>
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>Google Ads Management</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end ">
        <form action="">
          <input
            className="rounded hover:bg-[#2563eb] text-black pl-4 w-[350px] h-[64px]"
            type="text"
            name="Search"
            placeholder="Enter your email to Subscribe"
          ></input>
        </form>
        <div className="w-[130px] h-[64px] pl-7 mr-10 hover:bg-[#2563eb] rounded pt-4 bg-[#F5900D] font-bold text-[#FFFFFF]">
          Subscribe
        </div>
      </div>
    </div>
  );
};

export default Cover4;
