import React from "react";
import About from "./About";
import Academics from "./Academics";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import { Skills } from "./Skills";

const MiddleSection = () => {
  return (
    <div>
      {/* <div style={{ height: "100vh" }} id="home">
        home
      </div>
      <div style={{ height: "100vh" }} id="about">
        about
      </div>
      <div style={{ height: "100vh" }} id="academics">
        academics
      </div>
      <div style={{ height: "100vh" }} id="skills">
        skills
      </div>
      <div style={{ height: "100vh" }} id="projetcs">
        projetcs
      </div>
      <div style={{ height: "100vh" }} id="contact">
        contact
      </div> */}
      <LandingPage id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Academics id="academics" />
      <Projects id="projects" />
    </div>
  );
};

export default MiddleSection;
