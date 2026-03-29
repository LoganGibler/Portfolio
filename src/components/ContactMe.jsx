import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 mb-4 py-10 px-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
      <h2 className="text-lg font-bold text-gray-900 tracking-tight">Let's Connect</h2>
      <p className="text-sm text-gray-500 mt-2 max-w-sm leading-relaxed">
        Open to new opportunities and always happy to chat. Reach out via LinkedIn or email — I'll get back to you promptly.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <a
          href="https://www.linkedin.com/in/logan-gibler"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <FaLinkedin className="text-base" />
          LinkedIn
        </a>
        <a
          href="mailto:Logan.Gibler5@gmail.com"
          className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <MdEmail className="text-base" />
          Email Me
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-8 text-xs text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-1.5"
      >
        ↑ Back to top
      </button>
    </div>
  );
};

export default ContactMe;
