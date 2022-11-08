import React from "react";
import projectStyle from "../css/Project.module.css";
// import img1 from "../image/dorine-allali-BDICG5q7VAc-unsplash.jpg";
import Hr from "./Hr";
const Projects = ({ id }) => {
  return (
    <div id={id} className={projectStyle.masterContainer}>
      <div className={projectStyle.outerContainer}>
        <h1>Project</h1>
        <Hr />
        <div className={projectStyle.wrap}>
          <div className={projectStyle.innerContainer}>
            {Projectdetails.map((card, key) => {
              return (
                <ProjectContainer
                  key={key}
                  title={card.title}
                  imgSrc={card.imgSrc}
                  discription={card.discription}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projectdetails = [
  {
    imgSrc: require("../image/MERN-logo.png"),
    title: "Fees Dashboard",
    discription: "Register student and create logs and Admin side fees log",
  },
  {
    imgSrc: require("../image/MERN-logo.png"),
    title: "Login with forgot password feature",
    discription:
      "user can use this module in any project to implement login feature log",
  },
  {
    imgSrc: require("../image/MERN-logo.png"),
    title: "Portfolio",
    discription:
      "I have created a portfolio site of mine with simple and sober visuals. To represent my acheivement and complete details, I used MERN to create this Portofio site",
  },
  {
    imgSrc: require("../image/Python-PNG-File.png"),
    title: "Youtube Video Downloader",
    discription:
      "It was my first project in collaboration, where i worked on fetching the data and metadata for provided Youtube Video",
  },
];

const ProjectContainer = ({ title, imgSrc, discription }) => {
  return (
    <>
      <div className={projectStyle.mainDiv}>
        <div className={projectStyle.imgDiv}>
          <img className={projectStyle.innerImg} src={imgSrc} alt="techImg" />
        </div>
        {/* <div className={projectStyle.vl}></div> */}
        <div className={projectStyle.discriptionDiv}>
          <div className={projectStyle.titleContainer}>
            <h2 className={projectStyle.cardTitle}>{title}</h2>
            <Hr />
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.155)",
              padding: "0.5rem 1rem ",
              borderRadius: "10px",
            }}
          >
            <h3 className={projectStyle.descriptionText}>Description : </h3>
            <p style={{ fontFamily: "Monospace", paddingTop: "0.5rem" }}>
              {discription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
