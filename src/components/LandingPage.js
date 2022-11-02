import React from "react";
import LandingPageStyle from "../css/LandingPage.module.css";
import image1 from "../image/ivan-bandura-_pan-3SEDmI-unsplash.jpg";
export const LandingPage = ({ id }) => {
  return (
    <>
      <div className={LandingPageStyle.masterContainer} id={id}>
        <div className={LandingPageStyle.welcomeNoteDiv}>
          <h1>Hello</h1>
          <hr className={LandingPageStyle.hrText} data-content="hey-hi" />
          <div className={LandingPageStyle.greetStatement}>
            <h3>
              I, <i>shivam sharma</i>
              <i>
                <b> (software Engineer)</b>
              </i>{" "}
              greets you on my page,
            </h3>
            <h3>
              from <i>Ballia</i>, Uttae Pradesh
            </h3>
          </div>
        </div>
        <div
          className={`${LandingPageStyle.welcomeNoteDiv} ${LandingPageStyle.photo}`}
        >
          <div className={LandingPageStyle.circle}>
            <img
              className={LandingPageStyle.image}
              src={image1}
              alt="invalid "
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
