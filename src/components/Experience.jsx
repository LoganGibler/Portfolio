import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import logo from "../imgs/winndixielogo.webp";
import tcslogo from "../imgs/TCS.png";

const Experience = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div className="flex slide-in-effect text-sm mt-[2rem]">
      <div className="fade-in-effect grow">
        <div className="mt-1 text-base grow flex pl-2 pb-1 border-b-2 border-blue-500 font-bold">
          Experience
          <div className="flex justify-end grow">
            <GrUserExpert className="text-lg mr-2" />
          </div>
        </div>

        <div className="flex flex-col my-1 px-2">
          <div
            ref={ref1}
            className={`flex flex-col transition-all duration-700 ease-in-out ${
              inView1
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-[-200px] opacity-0"
            }`}
          >
            <div className="flex mt-1">
              <p className="font-semibold">Systems Support Engineer</p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">
                  Tata Consultancy Services
                </p>
                <img
                  className="h-[20px] w-[20px] rounded-xl ml-1"
                  src={tcslogo}
                ></img>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400"> February 6 - current</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <ul className="list-disc pl-10 pr-5 mt-2">
              <li className="text-sm mt-1">
                Provided enterprise IT operations support for The Winn-Dixie
                Company (TWDC).
              </li>
              <li className="text-sm mt-0.5">
                Transitioned from in-house TWDC IT to TCS managed services
                model.
              </li>
              <li className="text-sm mt-0.5">
                Leading ongoing knowledge transfer to train offshore IT
                Operations team on processes, monitoring, incident response
                procedures, and all other day-to-day duties.
              </li>
            </ul>

            <div className="flex mt-4">
              <p className="font-semibold">IT Datacenter Operator II</p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">Winn Dixie</p>
                <img
                  className="h-[20px] w-[20px] rounded-xl ml-1"
                  src={logo}
                ></img>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400">January 2023 - February 2026</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <ul className="list-disc pl-10 pr-5 mt-2">
              <li className="px-1 py-0.5">
                My IT Operations team provides 24/7 support for enterprise
                systems, ensuring uptime and reliability of mission-critical
                processes and infrastructure.
              </li>
              <li className="px-1 py-0.5">
                Monitor, troubleshoot, escalate and resolve failures in
                Stonebranch job scheduling, supporting 15,000+ daily processes
                that drive POS, pricing, file transfers, merchandising, supply
                chain, and store operations.
              </li>
              <li className="px-1 py-0.5">
                Investigate job failures, identify root cause, re-run workflows
                when appropriate, and create/route incident tickets to
                engineering teams for escalation when code, data, or
                infrastructure issues are detected.
              </li>
              <li className="px-1 py-0.5">
                Create, optimize, and respond to alerts from Dynatrace, Azure
                Monitor, IR360, and internal monitoring systems to ensure uptime
                of enterprise applications including websites, APIs, function
                apps, databases, and backend services.
              </li>
              <li className="px-1 py-0.5">
                Utilize log analysis and system utilities to validate service
                availability and support troubleshooting efforts
              </li>
              <li>
                Develop Python automation tools to recover FTE/file-transfer
                jobs, troubleshoot Kubernetes-hosted store containers, and
                accelerate remediation of infrastructure issues across 300+
                store environments.
              </li>
              <li>
                Participate in disaster recovery exercises, validating system
                recoverability and ensuring business continuity for retail
                operations.
              </li>
              <li>
                Document procedures, incident resolutions, and repeatable fixes
                to improve team knowledge and reduce time-to-resolution on
                recurring issues.
              </li>
            </ul>

            <div className="flex mt-4">
              <p className="font-semibold">
                IBM Global Accelerator Apprenticeship MSA Program
              </p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">IBM | Winn Dixie</p>
                <img
                  className="h-[20px] w-[20px] rounded-xl ml-1"
                  src={logo}
                ></img>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400"> January 2025 - January 2026</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <ul className="list-disc pl-10 pr-5 mt-2">
              <li className="text-sm mt-1">
                Mainframe system administrator apprenticeship program taught by
                IBM subject matter experts.
              </li>
              <li className="text-sm mt-0.5">
                Gained hands-on experience operating and maintaining
                Winn-Dixie’s z/OS mainframe environment.
              </li>
              <li className="text-sm mt-0.5">
                Wrote and executed JCL, navigated the mainframe using ISPF, and
                managed datasets and utilities.
              </li>
              <li className="text-sm mt-0.5">
                Troubleshot and resolved countless failed batch jobs.
              </li>
              <li className="text-sm mt-0.5">
                Conducted identity and access management (IAM) tasks using TSO
                commands.
              </li>
            </ul>
            {/* <p className="mt-5">
              <span className="text-blue-400">Job Skills: </span> Automation,
              Azure/AzureDevOps, Stonebranch, Python Scripting, SolarWinds,
              VMware, Kubernetes, AxwayB2BI, Active Directory management, Change
              Management, Dynatrace, MQAttach
            </p> */}
          </div>

          {/* <div
            ref={ref1}
            className={`flex flex-col transition-all duration-700 ease-in-out ${
              inView1
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-[200px] opacity-0"
            }`}
          >
            <div className="flex mt-5">
              <p>Customer Service Associate</p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">Winn-Dixie</p>
                <img
                  className="h-[20px] w-[20px] rounded-xl ml-1"
                  src={logo}
                ></img>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400"> July 2020 - June 2022</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <ul className="list-disc pl-10 pr-5 mt-2">
              <li className="text-sm mt-1">
                Provided exceptional customer service by greeting customers,
                assisting with inquiries, and resolving issues promptly and
                professionally.
              </li>
              <li className="text-sm mt-0.5">
                Received positive feedback from customers and supervisors for
                outstanding service and attention to detail.
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
