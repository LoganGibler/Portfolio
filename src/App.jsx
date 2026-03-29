import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  Navigation,
  About,
  Experience,
  Education,
  Certs,
  ContactMe,
  Projects,
} from "./components";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeLink, setActiveLink] = useState("Home");
  return (
    <main className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="flex justify-center">
          <div className="w-full max-w-[700px] px-4">
            <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-16">
        <div className="w-full max-w-[700px] px-4">
          <Header />
          <Education />
          <Experience />
          <Projects />
          <About />
          <Certs />
          <ContactMe />
        </div>
      </div>
    </main>
  );
}

export default App;
