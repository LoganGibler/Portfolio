import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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
    <div className="flex slide-in-effect text-sm mt-[3rem]">
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
            <div className="flex mt-2">
              <p>IT Datacenter Technician</p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">Southeastern Grocers</p>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400">Jan 2023 - current</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <li className="text-sm mt-1">
              Created scripts to automate tasks for retail support team and
              other datacenter technicians on the team{" "}
            </li>
            <li className="text-sm mt-0.5 pb-8 border-b-2">
              Implemented the migration of technicians and the retail support
              team to our latest information-sharing platform, with the dual
              objectives of resolving knowledge gaps and facilitating a smoother
              onboarding experience for new associates.{" "}
            </li>
          </div>

          <div
            ref={ref1}
            className={`flex flex-col transition-all duration-700 ease-in-out ${
              inView1
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-[200px] opacity-0"
            }`}
          >
            <div className="flex mt-3">
              <p>Customer Service Associate</p>
              <div className="flex justify-end grow">
                <p className="italic text-slate-400">Winn-Dixie</p>
              </div>
            </div>
            <div className="flex justify-start text-sm text-slate-400">
              <p className="text-blue-400"> July 2020 - June 2022</p>
              <div className="flex justify-end grow">
                <p>Jacksonville, FL</p>
              </div>
            </div>
            <li className="text-sm mt-1">
              Provided exceptional customer service by greeting customers,
              assisting with inquiries, and resolving issues promptly and
              professionally.
            </li>
            <li className="text-sm mt-0.5">
              Received positive feedback from customers and supervisors for
              outstanding service and attention to detail.
            </li>
          </div>
        </div>
        {/* <div
          className="flex flex-col justify-center mt-[4rem]"
          onClick={() => {
            window.scrollTo({ top: 2100, behavior: "smooth" });
          }}
        >
          <div>
            <button className="mt-10 border-2 rounded-md px-3 border-blue-500 text-white bg-blue-500">
              Skills and Certifications
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

export default Experience;
