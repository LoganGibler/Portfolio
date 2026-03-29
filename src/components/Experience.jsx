import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import logo from "../imgs/winndixielogo.webp";
import tcslogo from "../imgs/TCS.png";

const JobEntry = ({ title, company, logo: logoSrc, date, location, children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`mt-5 pl-3 border-l-2 border-blue-100 transition-all duration-700 ease-in-out ${
        inView
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-[-200px] opacity-0"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-1">
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
        <div className="flex items-center gap-1.5">
          <p className="italic text-slate-400 text-xs">{company}</p>
          {logoSrc && (
            <img className="h-[18px] w-[18px] rounded object-contain" src={logoSrc} alt={company} />
          )}
        </div>
      </div>
      <div className="flex items-baseline justify-between flex-wrap gap-1 mt-0.5">
        <p className="text-blue-400 text-xs font-medium">{date}</p>
        <p className="text-slate-400 text-xs">{location}</p>
      </div>
      <ul className="list-disc pl-5 mt-2.5 space-y-1.5 text-xs text-gray-600">
        {children}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col text-sm mt-8">
      <div className="fade-in-effect grow">
        <div className="flex items-center pb-2 border-b-2 border-blue-500 font-bold text-base text-gray-800">
          Experience
          <div className="flex justify-end grow">
            <GrUserExpert className="text-lg mr-1" />
          </div>
        </div>

        <JobEntry
          title="Systems Support Engineer"
          company="Tata Consultancy Services"
          logo={tcslogo}
          date="February 2026 – Present"
          location="Jacksonville, FL"
        >
          <li>
            Serving as the sole on-site subject matter expert responsible for transitioning
            enterprise IT operations to a 12-person offshore team, bridging institutional
            knowledge built across 3+ years of supporting Winn-Dixie's production environment.
          </li>
          <li>
            Authored 25+ in-depth operational runbooks covering incident response procedures,
            scheduling workflows, and recurring daily, weekly, and monthly tasks; enabling
            offshore team self-sufficiency and reducing escalations.
          </li>
          <li>
            Led knowledge transfer sessions covering Stonebranch workload automation, monitoring
            systems, escalation procedures, and cross-team coordination protocols.
          </li>
        </JobEntry>

        <JobEntry
          title="IT Datacenter Operator II"
          company="The Winn-Dixie Company"
          logo={logo}
          date="January 2023 – February 2026"
          location="Jacksonville, FL"
        >
          <li>
            Managed end-to-end health of enterprise batch workloads in Stonebranch, spanning
            z/OS JCL jobs, Azure data pipelines, DataStage ETL processes, PowerShell scripts,
            and Windows batch; supporting 15,000+ automated processes daily that drive POS,
            pricing, merchandising, supply chain, and store operations.
          </li>
          <li>
            Investigated and resolved complex workload failures by identifying root causes
            including scheduling conflicts, out-of-order dependencies, late-running jobs, and
            data or infrastructure issues; escalating to application engineering teams with full
            context to accelerate remediation.
          </li>
          <li>
            Resolved 3,750+ incidents over the role tenure, maintaining{" "}
            <span className="font-medium text-gray-700">96.5% SLA compliance</span> — above the
            12-person team average — while operating in a senior capacity focused on complex
            escalations.
          </li>
          <li>
            Served as de facto shift lead and senior resource despite under two years of tenure:
            coached junior analysts on incident response, delegated routine tickets to develop
            newer staff, and personally handled advanced cross-platform failures escalated from
            the team.
          </li>
          <li>
            Designed and deployed 1,100+ monitoring alerts for credit card processing and backup
            CC/DD devices across the retail store fleet, enabling proactive "store down" detection
            and resolution before store opening hours.
          </li>
          <li>
            Built 200+ Azure Monitor and Application Insights alerts with embedded escalation
            paths and resolution instructions to ensure uptime of cloud-hosted applications, APIs,
            function apps, and databases.
          </li>
          <li>
            Developed Python automation tools to troubleshoot and repair Kubernetes store
            clusters, scripting pod rebuilds, log retrieval, and file transfers across 300+ store
            servers; significantly reducing manual recovery time.
          </li>
          <li>
            Documented incident resolutions, procedures, and repeatable fixes to build team
            knowledge and reduce time-to-resolution on recurring issues.
          </li>
        </JobEntry>

        <JobEntry
          title="Mainframe Systems Apprentice (Concurrent Program)"
          company="IBM | The Winn-Dixie Company"
          logo={logo}
          date="January 2025 – January 2026"
          location="Jacksonville, FL"
        >
          <li>
            Completed IBM-led mainframe apprenticeship concurrent with full-time IT Operator
            role, gaining hands-on experience operating Winn-Dixie's z/OS production environment.
          </li>
          <li>
            Wrote and executed JCL, navigated ISPF, managed datasets and utilities, and
            troubleshot failed batch jobs in a live mainframe environment.
          </li>
          <li>
            Conducted identity and access management (IAM) tasks using TSO commands and developed
            practical skills in CICS transaction processing.
          </li>
        </JobEntry>
      </div>
    </div>
  );
};

export default Experience;
