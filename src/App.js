import style from "./App.module.css";

import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import About from "./components/About";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
// import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.masterContainer}>
          {/* <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}

          {/* the below mathod is different used when the react-scroll is used  */}
          <Navbar2 />
          <LandingPage id="home" />
          <About id="about" />
          <Academics id="academics" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
          {/* <MiddleSection /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
