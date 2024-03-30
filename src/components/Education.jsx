import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Education = () => {
  return (
    <div className="flex flex-col fade-in-effect mt-[3rem]">
      <div className="slide-in-effect flex flex-col">
        <div className="mt-1 flex text-base grow pl-2 pb-1 border-b-2 border-blue-500 font-bold">
          Education
          <div className="flex justify-end grow">
            <PiGraduationCap className="text-xl mr-2 mt-[1px]" />
          </div>
        </div>

        <div className="flex flex-col text-sm px-2 mt-2 border-b-2 pb-7">
          <div className="flex">
            <p>Western Governors University</p>
            <div className="flex justify-end grow">
              {" "}
              <p className="italic text-slate-400">Salt Lake City, Utah</p>
            </div>
          </div>
          <div className="flex text-sm">
            <p className="text-blue-400">B.S in Software Engineering</p>
            <div className="flex justify-end grow">
              <p className="text-slate-400">Expected: July 2025</p>
            </div>
          </div>

          <li className="text-sm mt-4">
            Studies focused on scripting, programming, web development, mobile
            application development, User experience design, software quality
            assurance{" "}
          </li>
          <li className="text-sm mt-2">
            <span className="text-blue-500">Relevant courses-</span> Data
            Structures and Algorithms, Advanced Data Management, Front-end Web
            Development, User Interface Design, User Experience Design, Backend
            Programming
          </li>
        </div>

        <div className="flex flex-col text-sm px-2 mt-[1rem] pb-3">
          <div className="flex whitespace-nowrap">
            <p>UNF Fullstack WebDev Bootcamp</p>
          </div>
          <div className="flex whitespace-nowrap text-sm">
            <p className="text-blue-400">WebDev Certificate, UNF</p>
            <div className="flex justify-end grow">
              <p className="text-slate-400">Jan 2022 - July 2022</p>
            </div>
          </div>
          <li className="text-sm mt-2">
            Rigorous coding bootcamp with a focus on fullstack development.
          </li>
          <li className="text-sm mt-1">
            The program emphasized pair programming in an agile environment,
            providing hands-on experience with industry standard tools such as
            React.js, PostgreSQL, Node.js, HTML/CSS, and jQuery.
          </li>
        </div>
        {/* <div
          className="flex flex-col justify-center mt-5 text-sm"
          onClick={() => {
            window.scrollTo({ top: 1400, behavior: "smooth" });
          }}
        >
          <div>
            <button className="mt-10 border-2 rounded-md px-3 border-blue-500 text-white bg-blue-500">
              View Experience
            </button>
          </div>

          <div className="flex justify-center">
            {" "}
            <FaArrowAltCircleDown className="mt-1 text-blue-500" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
