import React from "react";
import { GiSkills } from "react-icons/gi";

const SKILL_GROUPS = [
  {
    label: "Workload Automation",
    skills: [
      "Stonebranch",
      "JCL",
      "z/OS Batch",
      "DataStage ETL",
      "PowerShell",
      "Windows Batch",
    ],
  },
  {
    label: "Monitoring & Alerting",
    skills: [
      "Dynatrace",
      "Azure Monitor",
      "Application Insights",
      "SolarWinds",
      "IR360",
      "Stonebranch Alerts",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Azure (Monitor, DevOps, Portal)",
      "Kubernetes (k3OS)",
      "Docker",
      "Render",
      "Netlify",
    ],
  },
  {
    label: "Mainframe",
    skills: ["IBM z/OS", "ISPF", "JCL", "CICS", "TSO", "IAM"],
  },
  {
    label: "Programming",
    skills: ["Python", "JavaScript", "Java", "SQL", "PowerShell", "HTML/CSS"],
  },
  {
    label: "Tools & Applications",
    skills: [
      "VMware vSphere",
      "AD Manager+",
      "Ivanti (ITSM)",
      "Thycotic Secret Server",
      "B2BI Axway",
      "MQAttach",
      "AirWatch",
      "Riverbed",
    ],
  },
  {
    label: "Operating Systems",
    skills: ["Windows Server", "Linux (k3OS)", "IBM z/OS"],
  },
];

const About = () => {
  return (
    <div className="flex flex-col mt-8">
      <div className="fade-in-effect">
        <div className="flex items-center pb-2 border-b-2 border-blue-500 font-bold text-base text-gray-800">
          Skills
          <div className="flex justify-end grow">
            <GiSkills className="text-xl mr-1 mt-0.5" />
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
