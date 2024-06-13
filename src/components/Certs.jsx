import React from "react";
import { PiCertificateLight } from "react-icons/pi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Certs = () => {
  return (
    <div className="slide-in-effect mt-[4rem]">
      <div className="fade-in-effect">
        <div className="mt-10 flex pb-1 border-b-2 border-blue-500 font-bold pl-2">
          Certifications
          <div className="flex justify-end grow">
            <PiCertificateLight className="text-2xl mr-2" />
          </div>
        </div>
        <div className="flex flex-col text-sm px-2">
          <div className="flex mt-2">
            <p>CompTIA Security+</p>
            <div className="flex justify-end grow text-slate-400">
              Aug 2022 – exp: Feb 2029
            </div>
          </div>
          <div className="flex mt-1">
            <p>CompTIA CySA+</p>
            <div className="flex justify-end grow text-slate-400">
              Feb 2023 - exp: Feb 2029
            </div>
          </div>
          <div className="flex mt-1">
            <p>CompTIA Pentest+</p>
            <div className="flex justify-end grow text-slate-400">
              June 2023 - exp: June 2026
            </div>
          </div>
          <div className="flex mt-1">
            <p className="whitespace-nowrap">AWS Cloud Practioner</p>
            <div className="flex justify-end grow text-slate-400">
              May 2024 - exp: May 2027
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certs;
