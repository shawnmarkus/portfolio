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
                  github_link={card.github_link}
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
    github_link: "https://github.com/shawnmarkus/sch-fee2/tree/master",
    discription: "Register student and create logs and Admin side fees log",
  },
  {
    imgSrc: require("../image/MERN-logo.png"),
    title: "Login with forgot password feature",
    github_link: "https://github.com/shawnmarkus/login_forgot_feature",
    discription:
      "user can use this module in any project to implement login feature log",
  },
  {
    imgSrc: require("../image/MERN-logo.png"),
    title: "Portfolio",
    github_link: "https://github.com/shawnmarkus/portfolio",
    discription:
      "I have created a portfolio site of mine with simple and sober visuals. To represent my acheivement and complete details, I used MERN to create this Portofio site",
  },
  {
    imgSrc: require("../image/Python-PNG-File.png"),
    title: "Youtube Video Downloader",
    github_link: "",
    discription:
      "It was my first project in collaboration, where i worked on fetching the data and metadata for provided Youtube Video",
  },
];

const ProjectContainer = ({ title, imgSrc, discription, github_link }) => {
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
            <p style={{ fontFamily: "Monospace", paddingTop: "0.5rem" }}>
              {discription}
              {github_link ? (
                <p
                  style={{ overflowWrap: "break-word" }}
                  className={projectStyle.descriptionText}
                >
                  github-link :
                  <i>
                    <a href={github_link}> {github_link}</a>{" "}
                  </i>
                </p>
              ) : (
                <></>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
