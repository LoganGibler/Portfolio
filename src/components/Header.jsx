import React from "react";
import selfie from "../imgs/selfie.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col justify-center mt-[5rem] slide-in-effect">
      <div className="fade-in-effect">
        <div className="flex justify-center">
          <img src={selfie} className="rounded-full w-[190px] shadow-xl"></img>
        </div>
        <p className="font-semibold text-lg mt-7 text-center">
          <span className="text-blue-500">Hey! </span>I'm Logan.
        </p>
        <div className="flex flex-wrap grow justify-center mt-[2rem] text-stone-600">
          <FaLinkedin
            className="text-2xl mx-2 rounded-full hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/logan-gibler");
            }}
          />
          <FaGithubSquare
            className="text-2xl mx-2 rounded-full hover:cursor-pointer"
            onClick={() => {
              window.open("https://github.com/LoganGibler");
            }}
          />
          <FaInstagramSquare
            className="text-2xl mx-2 rounded-full hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.instagram.com/logangibler/");
            }}
          />
          <div className="flex mb-2">
            <FaSquarePhone className="text-2xl mx-2 rounded-full" />
            <p>+1(757) 639-7721</p>
          </div>
          <div className="flex">
            <MdEmail className="text-2xl mx-2 rounded-full" />
            <p>Logan.Gibler5@gmail.com</p>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center mt-6">
          <p className="mt-5 text-base text-center">
            Passionate software engineer with expertise in Javascript, HTML/CSS,
            React.js, Node.js, and MongoDB. I thrive on turning ideas into
            reality through clean, efficient code and solving real world
            problems. Let's build!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
