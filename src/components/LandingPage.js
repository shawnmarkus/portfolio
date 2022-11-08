import React from "react";
import LandingPageStyle from "../css/LandingPage.module.css";
import image1 from "../image/profilePhoto.jpg";

export const LandingPage = ({ id }) => {
  return (
    <>
      <div className={LandingPageStyle.masterContainer} id={id}>
        <div className={LandingPageStyle.welcomeNoteDiv}>
          <div className={LandingPageStyle.wrapperDiv}>
            <h1>Hello</h1>
            <hr className={LandingPageStyle.hrText} data-content="hey-hi" />
            <div className={LandingPageStyle.greetStatement}>
              <h3>
                I, <i>shivam sharma</i>
                <i>
                  <b> (software Engineer) </b>
                </i>
                greets you on my page,
              </h3>
              <h3>
                from <i>Ballia</i>, Uttar Pradesh
              </h3>
            </div>
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
