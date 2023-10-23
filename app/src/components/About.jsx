import React from "react";
import MainTitle from "./MainTitle";
import DownloadBtn from "./DownloadBtn";
import ProgressBar from "./ProgressBar";
import Timeline from "./Timeline";
import { listAboutItems, listSkills } from "../utils/Information";

const About = (props) => {
  const { description } = props;

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
