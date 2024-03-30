import React from "react";
import pixelpulsects from "../imgs/ppctsdash.png";
import dixie from "../imgs/dixieheader.png";
import WAWimage from "../imgs/WAWHeaderpage.png";
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="flex flex-col fade-in-effect text-sm mt-[3rem]">
      <div className="flex flex-col ">
        <div className="mt-10 flex pb-1 border-b-2 text-base border-blue-500 font-bold pl-2">
          Projects
          <div className="flex justify-end grow">
            <FaCode className="text-xl mr-2 mt-0.5" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-[2rem] sm:mt-[1rem] px-2 border-b-2 sm:border-b-0 pb-8">
          <div className="flex flex-col mr-0 sm:mr-5">
            <p className="flex text-sm font-semibold">
              <span className="text-blue-500 ml-[4rem]">PixelPulseCTS</span> -
              Ticketing Application
            </p>
            <div>
              <img
                src={pixelpulsects}
                className="mt-2 rounded-md border-2 shadow-md"
              ></img>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="flex text-left p-0 mt-1">
              This project is a full-stack application designed for small
              businesses using Google Workspace. It integrates MongoDB for the
              database, Node.js for the API, React with Tailwind CSS for the
              frontend, Firebase for uploading attachments, and Google's email
              API for notifications.
            </p>
            <p className="flex mt-2 text-left p-0">
              Key features include team dashboards, incident, service request,
              task, and change management with audit logs and comment systems
              for tracking activities and discussions.{" "}
            </p>
            <div className="flex sm:mt-2">
              <a
                className="mt-2 sm:mt-0 text-blue-400 underline"
                href="https://pixelpulsects.netlify.app/"
                target="_blank"
              >
                https://pixelpulsects.netlify.app/
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse mt-[2rem] p-2 border-b-2 sm:border-b-0 pb-8">
          <div className="flex flex-col sm:ml-3">
            <p className="font-semibold">
              <span className="text-blue-500">WinnDixie</span> - Mock E-commerce
            </p>
            <div>
              <img
                src={dixie}
                className="mt-2 sm:max-w-[350px] rounded-md border-2 shadow-md"
              ></img>
            </div>
          </div>

          <div>
            <p className="flex flex-col text-left p-0 mt-1">
              Mock of Winn Dixies homepage, with improved UI/UX Design. Created
              using React.js, Tailwind CSS.
              <span className="whitespace-nowrap mt-2">
                {" "}
                Original: https://www.winndixie.com/
              </span>
            </p>

            <div className="flex sm:mt-2">
              <a
                className="mt-2 sm:mt-0 text-blue-400 underline"
                href="https://winndixiemock.netlify.app/ "
                target="_blank"
              >
                https://winndixiemock.netlify.app/
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-[2rem] px-2 pb-5">
          <div className="sm:mr-4">
            <p className="font-semibold">
              <span className="text-blue-500">WebAppWarfare</span> - Guide/Blog
              Website
            </p>
            <img
              src={WAWimage}
              className="mt-2 rounded-md border-2 shadow-md"
            ></img>
          </div>

          <div className="">
            <p className="flex text-left p-0 mt-1 sm:mt-0">
              Users are able to create an account, post guides on vms and other
              topics, view other users posts, and like posts. Users can upload
              screenshots as well with their guides. Guides can be set to
              private/public, and users can search for guides by title,
              difficulty, or host.
            </p>
            <p className="flex text-left p-0 mt-1">
              All guides that are public are legitimate guides that I have
              published to the site.
            </p>
            <div className="flex">
              <a
                className="mt-2 text-blue-400 underline"
                href="https://webappwarfare.com"
                target="_blank"
              >
                https://webappwarfare.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
