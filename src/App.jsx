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
    <main className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-w-[700px]">
          <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
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
