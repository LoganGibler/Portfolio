import React from "react";
import { BiLogoJavascript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const About = () => {
  return (
    <div className="flex flex-col slide-in-effect mt-[4rem]">
      <div className="fade-in-effect text-sm">
        <div className="mt-0 flex text-base grow pl-2 pb-1 border-b-2 border-blue-500 font-bold">
          Skills
          <div className="flex justify-end grow">
            <GiSkills className="text-xl mr-2 mt-0.5" />
          </div>
        </div>
        <div className="flex mb-1 mt-3 px-2">
          <p>Javascript</p>
          <div className="flex justify-end grow">
            <BiLogoJavascript className="text-2xl" />
          </div>
        </div>

        <div className="flex my-1 px-2">
          <p>Python</p>
          <div className="flex justify-end grow">
            <FaPython className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>React</p>
          <div className="flex justify-end grow">
            <FaReact className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>HTML/CSS</p>
          <div className="flex justify-end grow">
            <FaHtml5 className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>Tailwind</p>
          <div className="flex justify-end grow">
            <SiTailwindcss className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>PostgresQL</p>
          <div className="flex justify-end grow">
            <BiLogoPostgresql className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>MongoDB</p>
          <div className="flex justify-end grow">
            <SiMongodb className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>Firebase</p>
          <div className="flex justify-end grow">
            <IoLogoFirebase className="text-2xl" />
          </div>
        </div>
        <div className="flex my-1 px-2">
          <p>Node.js</p>
          <div className="flex justify-end grow">
            <FaNodeJs className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
