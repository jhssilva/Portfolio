import "./App.css";
import React, { useState } from "react";
import picture from "./resources/img/Lisboa.jpeg";

function App() {
  const [activeElementId, setActiveElementId] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const resumeAddress =
    "https://docs.google.com/document/d/13LLI6V8zva_zG7_KWLYqLB3d-W6YoySCr9GONgwShBM/edit?usp=sharing";

  const descriptionAboutMe =
    "A software engineer with 3 years of experience in full-stack development, teamwork, cross-functional communication, technical troubleshooting, and debugging. A collaborative and communicative developer and engineer with experience in the hardware and software sides of technology and specialized in object-oriented programming languages";

  const listControls = [
    { id: 1, dataId: "home", icon: "fas fa-home" },
    { id: 2, dataId: "about", icon: "fas fa-user" },
    { id: 3, dataId: "portfolio", icon: "fas fa-briefcase" },
    { id: 4, dataId: "blogs", icon: "fas fa-newspaper" },
    { id: 5, dataId: "contact", icon: "fas fa-envelope-open" },
  ];

  const listAboutItems = [
    {
      id: 1,
      title: "400+",
      descriptionBegin: "Customer reviews",
      descriptionEnd: "teste",
    },
    {
      id: 3,
      title: "400+",
      descriptionBegin: "Customer reviews",
      descriptionEnd: "teste",
    },
    {
      id: 2,
      title: "400+",
      descriptionBegin: "Customer reviews",
      descriptionEnd: "d",
    },
    {
      id: 4,
      title: "400+",
      descriptionBegin: "Customer reviews",
      descriptionEnd: "d",
    },
  ];

  const listSkills = [
    { id: 1, title: "HTML", description: "10%", classValue: "html" },
    { id: 2, title: "", description: "", classValue: "" },
    { id: 3, title: "", description: "", classValue: "" },
    { id: 4, title: "", description: "", classValue: "" },
  ];

  const listTimeLineItems = [
    {
      id: 1,
      duration: "2019 - 2020",
      titleBegin: "Junior Software Developer",
      titleEnd: "Enso Origins",
      description: "Dadadad ad ada a a a a a",
    },
    { id: 2, duration: "", titleBegin: "", titleEnd: "", description: "" },
    { id: 3, duration: "", titleBegin: "", titleEnd: "", description: "" },
    { id: 4, duration: "", titleBegin: "", titleEnd: "", description: "" },
  ];

  const MainContent = () => {
    return (
      <div className={"main-content " + (isDarkMode ? "" : "light-mode")}>
        <header
          className={
            "container header " +
            (checkIfHasToDisplayCurrentSection(1) ? "active" : "")
          }
          id="home"
        >
          <Header />{" "}
        </header>
        <main>
          <section
            className={
              "container about " +
              (checkIfHasToDisplayCurrentSection(2) ? "active" : "")
            }
            id="about"
          >
            <About />
          </section>
          <section
            className={
              "container portfolio " +
              (checkIfHasToDisplayCurrentSection(3) ? "active" : "")
            }
            id="porfolio"
          >
            <Portfolio />
          </section>
          <section
            className={
              "container blogs " +
              (checkIfHasToDisplayCurrentSection(4) ? "active" : "")
            }
            id="blogs"
          >
            <Blogs />
          </section>
          <section
            className={
              "container contacts " +
              (checkIfHasToDisplayCurrentSection(5) ? "active" : "")
            }
            id="contacts"
          >
            <Contacts />
          </section>
        </main>
        <Controls />
        <SwitchDarkMode />
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span className="name">Hugo Silva.</span> Software Engineer.
          </h1>
          <p>
            A junior software engineer with 3 years of experience in full-stack
            development, teamwork, cross-functional communication, technical
            troubleshooting, and debugging. A collaborative and communicative
            developer and engineer with experience in the hardware and software
            sides of technology and specialized in object-oriented programming
            languages
          </p>
          <DownloadBtn />
        </div>
      </div>
    );
  };

  const About = () => {
    return (
      <div>
        <div className="main-title">
          <h2>
            About <span>me</span>
            <span className="bg-text">my stats</span>
          </h2>
        </div>
        <div className="about-container">
          <div className="left-about">
            <h4>Information About me</h4>
            <p> {descriptionAboutMe}</p>
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
        <Timeline />
      </div>
    );
  };

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

  const ProgressBar = (props) => {
    const { title, description, classValue } = props;
    return (
      <div className="progress-bar">
        <p className="prog-title">{title}</p>
        <div className="progress-con">
          <p className="prog text">{description}</p>
          <div className="progress">
            <span className={classValue}></span>
          </div>
        </div>
      </div>
    );
  };

  const Timeline = () => {
    return (
      <div className="timeline">
        {listTimeLineItems.map((item) => {
          const { id, duration, titleBegin, titleEnd, description } = item;
          return (
            <TimeLineItem
              key={id}
              duration={duration}
              titleBegin={titleBegin}
              titleEnd={titleEnd}
              description={description}
            />
          );
        })}
      </div>
    );
  };

  const TimeLineItem = (props) => {
    const { duration, titleBegin, titleEnd, description } = props;

    return (
      <div className="timeline-item">
        <div className="tl-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <p className="tl-duration">{duration}</p>
        <h5>
          {titleBegin} <span> - {titleEnd}</span>
        </h5>
        <p>{description}</p>
      </div>
    );
  };

  const DownloadBtn = () => {
    return (
      <div className="btn-con">
        <a href={resumeAddress} className="main-btn">
          <span className="btn-text">Download CV</span>
          <span className="btn-icon">
            <i className="fas fa-download"></i>
          </span>
        </a>
      </div>
    );
  };

  const Portfolio = () => {};

  const Blogs = () => {};

  const Contacts = () => {};

  const checkIfHasToDisplayCurrentSection = (id) => {
    if (id === activeElementId) {
      return true;
    }
    return false;
  };

  const Controls = () => {
    return (
      <div className="controls">
        {listControls.map((control) => {
          const { id } = control;
          return <Control key={id} control={control} />;
        })}
      </div>
    );
  };

  const Control = (props) => {
    const { control } = props;
    const { id, dataId, icon } = control;

    const divClass =
      "control control-" + id + (activeElementId === id ? " active-btn" : "");

    return (
      <div
        className={divClass}
        data-id={dataId}
        onClick={() => {
          handleControlOnClick(id);
        }}
      >
        <i className={icon}></i>
      </div>
    );
  };

  const SwitchDarkMode = () => {
    return (
      <div className="theme-btn" onClick={handleSwitchDarkMode}>
        <i className="fas fa-adjust"></i>
      </div>
    );
  };

  const handleSwitchDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleControlOnClick = (id) => {
    setActiveElementId(id);
  };

  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

export default App;
