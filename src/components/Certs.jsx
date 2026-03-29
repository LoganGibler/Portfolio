import React from "react";
import { PiCertificateLight } from "react-icons/pi";

const CERTS = [
  { name: "CompTIA Security+", date: "Aug 2022", expiry: "Feb 2029" },
  { name: "CompTIA CySA+", date: "Feb 2023", expiry: "Feb 2029" },
  { name: "CompTIA Pentest+", date: "Jun 2023", expiry: "Jun 2026" },
  { name: "AWS Cloud Practitioner", date: "May 2024", expiry: "May 2027" },
  { name: "CompTIA Project+", date: "Jun 2024", expiry: "Never" },
  { name: "Axelos ITIL Foundations", date: "Jun 2024", expiry: "Never" },
];

const Certs = () => {
  return (
    <div className="mt-8">
      <div className="fade-in-effect">
        <div className="flex items-center pb-2 border-b-2 border-blue-500 font-bold text-base text-gray-800">
          Certifications
          <div className="flex justify-end grow">
            <PiCertificateLight className="text-2xl mr-1" />
          </div>
        </div>

        <div className="mt-3 divide-y divide-gray-100">
          {CERTS.map((cert) => (
            <div key={cert.name} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{cert.name}</span>
              </div>
              <span className="text-xs text-gray-400 ml-3 whitespace-nowrap">
                {cert.date}
                {cert.expiry !== "Never" ? ` – exp: ${cert.expiry}` : " · No expiry"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certs;
