import React from "react";
// import { useRef } from "react";
import aboutStyle from "../css/About.module.css";

const About = ({ id }) => {
  return (
    <div className={aboutStyle.masterContainer} id={id}>
      <div className={aboutStyle.aboutMeHeading}>
        <h1>About Myself</h1>
      </div>
      <div className={aboutStyle.aboutMeContent}>
        {/* hjkfdskjfjkls */}
        <div className={aboutStyle.aboutMeContentInner}>
          <p>
            I'm Shivam Sharma , an engineering graduate from Computer science
            and engineering department. I am an enthusiastic and social person
            who loves to take up new challenges and learn new skills. I love
            meeting new people, exchanging ideas and spreading knowledge and
            positivity. I like solving Real world problem, so I have a keen
            interest in Programming and exploring new Technologies. I like to
            learn more and more (specially CSS) in my free time. I like to crete
            animation using (CSS) and hence usually try to explore more and more
            about animation creation, although I'm not a neard but like to such
            kind of stuffs. I true nature lover understands the value of momemts
            and I like to capture those moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
