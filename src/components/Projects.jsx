import React from "react";
import pixelpulsects from "../imgs/ppctsdash.png";
import dixie from "../imgs/dixieheader.png";
import WAWimage from "../imgs/WAWHeaderpage.png";
import surfsightImg from "../imgs/surfsightfrontpage.png";
import { FaCode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({
  refProp,
  inView,
  title,
  subtitle,
  date,
  imageUrl,
  imageHref,
  codePlaceholder,
  description,
  links,
  reverse,
}) => {
  return (
    <div
      ref={refProp}
      className={`flex flex-col sm:${
        reverse ? "flex-row-reverse" : "flex-row"
      } gap-4 mt-5 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out ${
        inView
          ? "transform translate-x-0 opacity-100"
          : `transform ${
              reverse ? "translate-x-[200px]" : "translate-x-[-200px]"
            } opacity-0`
      }`}
    >
      <div className="flex flex-col flex-shrink-0 sm:w-[48%]">
        <div className="flex items-baseline justify-between gap-2 flex-wrap">
          <p className="text-sm font-semibold text-gray-800">
            <span className="text-blue-500">{title}</span>
            {subtitle && (
              <span className="font-normal text-gray-500"> — {subtitle}</span>
            )}
          </p>
          {date && (
            <span className="text-xs text-slate-400 whitespace-nowrap">{date}</span>
          )}
        </div>

        {imageUrl ? (
          <a href={imageHref} target="_blank" rel="noreferrer">
            <img
              src={imageUrl}
              className="mt-2 rounded-lg border border-gray-200 shadow-sm hover:opacity-90 transition-opacity cursor-pointer w-full"
              alt={title}
            />
          </a>
        ) : (
          <div className="mt-2 rounded-lg bg-gray-900 border border-gray-700 p-4 font-mono text-xs text-green-400 min-h-[80px] flex flex-col justify-center">
            {codePlaceholder}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between text-xs text-gray-600 leading-relaxed">
        <p className="mt-1">{description}</p>
        <div className="mt-3 flex flex-col gap-1">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 underline break-all"
            >
              {link.label || link.href}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="flex flex-col text-sm mt-8">
      <div className="flex flex-col">
        <div className="flex items-center pb-2 border-b-2 border-blue-500 font-bold text-base text-gray-800">
          Projects
          <div className="flex justify-end grow">
            <FaCode className="text-xl mr-1 mt-0.5" />
          </div>
        </div>

        <ProjectCard
          refProp={ref1}
          inView={inView1}
          title="SurfSight"
          subtitle="Surf Forecasting Web Application"
          date="Aug – Sep 2025"
          imageUrl={surfsightImg}
          imageHref="https://d424-software-engineering-capstone-oe2a.onrender.com/"
          description="Capstone project for my B.S. in Software Engineering. Full-stack forecasting platform: Java Spring Boot backend, PostgreSQL + Flyway migrations, JWT auth, React + TypeScript + Tailwind frontend with Leaflet maps, Open-Meteo Marine API integration, and Docker deployment on Render. Users can create accounts, save favorite surf spots, and view scored forecasts worldwide."
          links={[{ href: "https://d424-software-engineering-capstone-oe2a.onrender.com/" }]}
        />

        <ProjectCard
          refProp={ref2}
          inView={inView2}
          title="Cowboy.py"
          subtitle="Kubernetes Automation Script"
          date="Mar 2024"
          codePlaceholder={
            <>
              <span className="text-gray-500"># Kubernetes store cluster automation</span>
              <span className="mt-1">$ python cowboy.py --cluster prod</span>
              <span className="mt-1 text-blue-400">{"→ Rebuilding pods across 300+ store servers..."}</span>
            </>
          }
          imageHref="https://github.com/LoganGibler"
          description="Python + Paramiko SSH automation tool for managing Kubernetes pods across 300+ retail store servers. Scripted pod rebuilds, log retrieval, and file transfers to significantly reduce infrastructure recovery time — built and used in a live production environment at Winn-Dixie."
          links={[{ href: "https://github.com/LoganGibler", label: "github.com/LoganGibler" }]}
        />

        <ProjectCard
          refProp={ref3}
          inView={inView3}
          title="PixelPulseCTS"
          subtitle="Full-Stack Ticketing Application"
          date="Jan – Mar 2024"
          imageUrl={pixelpulsects}
          imageHref="https://pixelpulsects.netlify.app/"
          description="MERN stack ticketing and incident tracking system with a REST API, React + Tailwind dashboards, Firebase file attachments, Google Email API notifications, and full audit logs. Designed for small businesses using Google Workspace — supports incident, service request, task, and change management with comment threads."
          links={[{ href: "https://pixelpulsects.netlify.app/" }]}
          reverse
        />

        <ProjectCard
          refProp={ref4}
          inView={inView4}
          title="WebAppWarfare"
          subtitle="HackTheBox Guide Platform"
          date="Nov 2023"
          imageUrl={WAWimage}
          imageHref="https://webappwarfare.netlify.app/"
          description="Cybersecurity learning platform built with React, Node.js, MongoDB, and Firebase. Features role-based permissions, a content moderation workflow, guide approval system, and the ability to upload screenshots with writeups. All public guides are legitimate HackTheBox writeups published by me."
          links={[{ href: "https://webappwarfare.netlify.app/" }]}
        />

        <ProjectCard
          refProp={ref5}
          inView={inView5}
          title="WinnDixie"
          subtitle="Mock E-Commerce Site"
          imageUrl={dixie}
          imageHref="https://winndixiemock.netlify.app/"
          description="Mock redesign of Winn-Dixie's homepage with improved UI/UX. Rebuilt using React.js and Tailwind CSS with modern, responsive design principles and reusable components."
          links={[
            { href: "https://winndixiemock.netlify.app/", label: "Live: winndixiemock.netlify.app" },
            { href: "https://www.winndixie.com/", label: "Original: winndixie.com" },
          ]}
          reverse
        />
      </div>
    </div>
  );
};

export default Projects;
