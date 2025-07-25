import React from "react";

const Navigation = ({ activeLink, setActiveLink }) => {
  return (
    <div className="flex text-black justify-center">
      <div className="flex justify-center font-semibold">
        <p
          onClick={() => {
            setActiveLink("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Home"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Home
        </p>
        <p
          onClick={() => {
            setActiveLink("Education");
            window.scrollTo({ top: 400, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Education"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Education
        </p>
        <p
          onClick={() => {
            setActiveLink("Experience");
            window.scrollTo({ top: 820, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Experience"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Experience
        </p>
        <p
          onClick={() => {
            setActiveLink("Projects");
            window.scrollTo({ top: 1500, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Projects"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Projects
        </p>
        <p
          onClick={() => {
            setActiveLink("Skills");
            window.scrollTo({ top: 2400, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Skills"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Skills
        </p>
        <p
          onClick={() => {
            setActiveLink("Contact");
            window.scrollTo({ top: 4000, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "Contact"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navigation;
