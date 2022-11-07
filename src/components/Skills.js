import React from "react";
import skillStyle from "../css/Skill.module.css";

export const Skills = ({ id }) => {
  return (
    <div id={id} className={skillStyle.masterContainer}>
      <div className={skillStyle.outerContainer}>
        <h1>Skills</h1>
        <hr className={skillStyle.hrCustom} />
        <sectio className={skillStyle.skillSection}>
          <div className={skillStyle.innerContainer}>
            <div className={skillStyle.generalSection}>
              <div className={skillStyle.innerWrapGen}>
                <section className={skillStyle.sectionContainer}>
                  <div className={skillStyle.title}> Languages And Coding </div>
                  <hr className={skillStyle.hrCustom} />
                  <div>
                    <ul>
                      <li>C</li>
                      <li>C++</li>
                      <li>Python</li>
                      <li>Javascript</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                </section>

                <section className={skillStyle.sectionContainer}>
                  <div className={skillStyle.title}> Technologies </div>
                  <hr className={skillStyle.hrCustom} />
                  <div>
                    <ul>
                      <li>React</li>
                      <li>React-native (learing)</li>
                      <li>Vue (learing)</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <div className={skillStyle.acquintanceSection}>
              <div className={skillStyle.title}> Acquintance with</div>
              <hr className={skillStyle.hrCustom} />

              <div>
                <ul>
                  <li>Basics of Linux</li>
                  <li>Basics of shell Script</li>
                  <li>Web Scraping with Python</li>
                </ul>
              </div>
            </div>

            <div className={skillStyle.certificates}>
              <div className={skillStyle.title}> Certificates </div>
              <hr className={skillStyle.hrCustom} />

              <div>
                <ul>
                  <li>Neural Network (Coursera)</li>
                  <li>Javascript (Data structure)</li>
                </ul>
              </div>
            </div>
          </div>
        </sectio>
      </div>
    </div>
  );
};
