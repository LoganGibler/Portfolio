import React from "react";
import selfie from "../imgs/selfie.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-10 pb-10 slide-in-effect">
      <div className="fade-in-effect flex flex-col items-center w-full">
        <img
          src={selfie}
          className="rounded-full w-[140px] h-[140px] object-cover shadow-xl ring-4 ring-blue-100 ring-offset-2"
        />

        <h1 className="font-bold text-2xl mt-5 text-gray-900 tracking-tight">
          <span className="text-blue-500">Hey!</span> I'm Logan.
        </h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Batch Operations &amp; Workload Automation Engineer
        </p>

        <p className="mt-4 text-sm text-gray-600 text-center max-w-md leading-relaxed px-2">
          3+ years of enterprise experience managing mission-critical job
          scheduling across z/OS mainframe, Azure cloud pipelines, DataStage
          ETL, and Windows environments. I build full-stack applications, write
          Python automation tools, and thrive on solving complex, cross-platform
          problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/logan-gibler")
            }
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </button>
          <button
            onClick={() => window.open("https://github.com/LoganGibler")}
            className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
          >
            <FaGithubSquare className="text-base" />
            GitHub
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/logangibler/")
            }
            className="flex items-center gap-1.5 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg transition-colors font-medium"
          >
            <FaInstagramSquare className="text-base" />
            Instagram
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <FaSquarePhone className="text-gray-400" />
            <span>+1(757) 639-7721</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MdEmail className="text-gray-400" />
            <span>Logan.Gibler5@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
