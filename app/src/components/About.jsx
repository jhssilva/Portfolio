import React from "react";
import MainTitle from "./MainTitle";
import DownloadBtn from "./DownloadBtn";
import ProgressBar from "./ProgressBar";
import Timeline from "./Timeline";

const About = (props) => {
  const { description } = props;

  const listAboutItems = [
    {
      id: 1,
      title: "3 years",
      descriptionBegin: "Developing",
      descriptionEnd: "Software",
    },
    {
      id: 3,
      title: "10+",
      descriptionBegin: "Projects",
      descriptionEnd: "",
    },
    {
      id: 2,
      title: "Bachelor",
      descriptionBegin: "Software",
      descriptionEnd: "Engineer",
    },
    {
      id: 4,
      title: "Master",
      descriptionBegin: "Software",
      descriptionEnd: "Engineer",
    },
  ];

  const listSkills = [
    { id: 1, title: "HTML", description: "95%", classValue: "html" },
    { id: 2, title: "CSS", description: "90%", classValue: "css" },
    {
      id: 3,
      title: "Javascript",
      description: "85%",
      classValue: "javascript",
    },
    { id: 4, title: "React", description: "60%", classValue: "react" },
    { id: 5, title: "Java", description: "80%", classValue: "java" },
    { id: 6, title: "C/C++", description: "85%", classValue: "c" },
    { id: 7, title: "Swift", description: "80%", classValue: "swift" },
    { id: 7, title: "Node.js", description: "70%", classValue: "node" },
    { id: 8, title: "MongoDB", description: "55%", classValue: "mongodb" },
    { id: 9, title: "SQL", description: "80%", classValue: "sql" },
  ];

  const AboutItem = (props) => {
    const { title, descriptionBegin, descriptionEnd } = props;
    return (
      <div className="about-item">
        <div className="abt-text">
          <p className="large-text">{title}</p>
          <p className="small-text">
            {descriptionBegin} <br /> {descriptionEnd}
          </p>
        </div>
      </div>
    );
  };

  const AboutContainer = () => {
    return (
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p> {description}</p>
          <DownloadBtn />
        </div>
        <div className="right-about">
          {listAboutItems.map((item) => {
            const { id, title, descriptionBegin, descriptionEnd } = item;
            return (
              <AboutItem
                key={id}
                title={title}
                descriptionBegin={descriptionBegin}
                descriptionEnd={descriptionEnd}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const Stats = () => {
    return (
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {listSkills.map((skill) => {
            const { id, title, description, classValue } = skill;
            return (
              <ProgressBar
                key={id}
                title={title}
                description={description}
                classValue={classValue}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <MainTitle headerBegin="About" headerEnd="me" text="my stats" />
      <AboutContainer />
      <Stats />
      <Timeline />
    </div>
  );
};

export default About;
