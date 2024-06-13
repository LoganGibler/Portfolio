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
import { useInView } from "react-intersection-observer";

const BulletPoint = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex transition-transform duration-700 ${
        inView
          ? "transform translate-x-0 opacity-100"
          : "transform -translate-x-[300px] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col mt-[4rem]">
      <div className="fade-in-effect text-sm">
        <div className="mt-0 flex text-base grow pl-2 pb-1 border-b-2 border-blue-500 font-bold">
          Skills
          <div className="flex justify-end grow">
            <GiSkills className="text-xl mr-2 mt-0.5" />
          </div>
        </div>
        <BulletPoint>
          <div className="flex grow mb-1 mt-3 px-2">
            <p>Javascript</p>
            <div className="flex justify-end grow">
              <BiLogoJavascript className="text-2xl" />
            </div>
          </div>
        </BulletPoint>
        <BulletPoint>
          <div className="flex grow my-1 px-2">
            <p>Python</p>
            <div className="flex justify-end grow">
              <FaPython className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          {" "}
          <div className="flex grow my-1 px-2">
            <p>React</p>
            <div className="flex justify-end grow">
              <FaReact className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          {" "}
          <div className="flex grow my-1 px-2">
            <p>HTML/CSS</p>
            <div className="flex justify-end grow">
              <FaHtml5 className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          <div className="flex grow my-1 px-2">
            <p>Tailwind</p>
            <div className="flex justify-end grow">
              <SiTailwindcss className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          {" "}
          <div className="flex grow my-1 px-2">
            <p>PostgresQL</p>
            <div className="flex justify-end grow">
              <BiLogoPostgresql className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          {" "}
          <div className="flex grow my-1 px-2">
            <p>MongoDB</p>
            <div className="flex justify-end grow">
              <SiMongodb className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          <div className="flex grow my-1 px-2">
            <p>Firebase</p>
            <div className="flex justify-end grow">
              <IoLogoFirebase className="text-2xl" />
            </div>
          </div>
        </BulletPoint>

        <BulletPoint>
          <div className="flex grow my-1 px-2">
            <p>Node.js</p>
            <div className="flex justify-end grow">
              <FaNodeJs className="text-2xl" />
            </div>
          </div>
        </BulletPoint>
      </div>
    </div>
  );
};

export default About;
