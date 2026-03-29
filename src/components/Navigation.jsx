import React from "react";

const NAV_LINKS = [
  { label: "Home", scrollTop: 0 },
  { label: "Education", scrollTop: 450 },
  { label: "Experience", scrollTop: 870 },
  { label: "Projects", scrollTop: 1550 },
  { label: "Skills", scrollTop: 2450 },
  { label: "Contact", scrollTop: 4000 },
];

const Navigation = ({ activeLink, setActiveLink }) => {
  return (
    <div className="flex justify-center py-2.5">
      <div className="flex gap-0.5 font-medium text-sm">
        {NAV_LINKS.map(({ label, scrollTop }) => (
          <button
            key={label}
            onClick={() => {
              setActiveLink(label);
              window.scrollTo({ top: scrollTop, behavior: "smooth" });
            }}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeLink === label
                ? "bg-blue-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
