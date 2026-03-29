import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col fade-in-effect mt-8">
      <div className="slide-in-effect flex flex-col">
        <div className="flex items-center pb-2 border-b-2 border-blue-500 font-bold text-base text-gray-800">
          Education
          <div className="flex justify-end grow">
            <PiGraduationCap className="text-xl mr-1" />
          </div>
        </div>

        <div
          ref={ref1}
          className={`mt-4 pl-3 border-l-2 border-blue-100 transition-all duration-700 ease-in-out ${
            inView1
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-[-200px] opacity-0"
          }`}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="font-semibold text-gray-800 text-sm">
              Western Governors University
            </p>
            <p className="text-slate-400 text-xs">October 2025</p>
          </div>
          <p className="text-blue-500 text-xs font-medium mt-0.5">
            B.S. in Software Engineering
          </p>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            <span className="font-medium text-gray-600">Coursework: </span>
            Programming in Python, Cloud Foundations, User Interface Design,
            User Experience Design, Hardware &amp; Operating Systems, Frontend Web
            Development, Data Structures &amp; Algorithms, Advanced Data Management,
            Data Management for Applications, JavaScript Programming, Java
            Fundamentals, Advanced Java, Java Frameworks, Backend Programming
          </p>
        </div>

        <div
          ref={ref2}
          className={`mt-5 pl-3 border-l-2 border-blue-100 transition-all duration-700 ease-in-out ${
            inView2
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-[200px] opacity-0"
          }`}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="font-semibold text-gray-800 text-sm">
              Fullstack Academy at UNF
            </p>
            <p className="text-slate-400 text-xs">Jan 2022 – Jul 2022</p>
          </div>
          <p className="text-blue-500 text-xs font-medium mt-0.5">
            Certificate, Cybersecurity
          </p>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            <span className="font-medium text-gray-600">Coursework: </span>
            Log Analysis, Packet Analysis, IPS/IDS, Python/Bash Scripting,
            Exploitation, NIST Framework, MITRE ATT&amp;CK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
