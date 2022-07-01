import "./App.css";
import React, { useState } from "react";
import picture from "./resources/img/Lisboa.jpeg";

function App() {
  const [activeElementId, setActiveElementId] = useState(1);
  const resumeAddress =
    "https://docs.google.com/document/d/13LLI6V8zva_zG7_KWLYqLB3d-W6YoySCr9GONgwShBM/edit?usp=sharing";

  const listControls = [
    { id: 1, dataId: "home", icon: "fas fa-home" },
    { id: 2, dataId: "about", icon: "fas fa-user" },
    { id: 3, dataId: "portfolio", icon: "fas fa-briefcase" },
    { id: 4, dataId: "blogs", icon: "fas fa-newspaper" },
    { id: 5, dataId: "contact", icon: "fas fa-envelope-open" },
  ];

  const MainContent = () => {
    return (
      <div className="main-content">
        <header
          className={
            "section sec1 header " +
            (checkIfHasToDisplayCurrentSection(1) ? "active" : "")
          }
          id="home"
        >
          <Header />{" "}
        </header>
        <main>
          <section
            className={
              "section sec2 about" +
              (checkIfHasToDisplayCurrentSection(2) ? "active" : "")
            }
            id="about"
          ></section>
          <section
            className={
              "section sec3 portfolio" +
              (checkIfHasToDisplayCurrentSection(3) ? "active" : "")
            }
            id="porfolio"
          ></section>
          <section
            className={
              "section sec4 blogs" +
              (checkIfHasToDisplayCurrentSection(4) ? "active" : "")
            }
            id="blogs"
          ></section>
          <section
            className={
              "section sec5 contacts" +
              (checkIfHasToDisplayCurrentSection(5) ? "active" : "")
            }
            id="contacts"
          ></section>
        </main>
        <Controls />
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
          <div className="btn-con">
            <a href={resumeAddress} className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const checkIfHasToDisplayCurrentSection = (id) => {
    if (id === activeElementId) {
      return true;
    }
    return false;
  };

  const Controls = () => {
    return (
      <div className="controlls">
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
