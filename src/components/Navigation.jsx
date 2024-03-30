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
            setActiveLink("About");
            window.scrollTo({ top: 520, behavior: "smooth" });
          }}
          className={`mx-2 ${
            activeLink === "About"
              ? "text-blue-500 hover:cursor-pointer"
              : "text-black hover:cursor-pointer"
          }`}
        >
          About
        </p>
        <p
          onClick={() => {
            setActiveLink("Projects");
            window.scrollTo({ top: 1360, behavior: "smooth" });
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
            window.scrollTo({ top: 2270, behavior: "smooth" });
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
