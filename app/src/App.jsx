import "./App.css";
import React, { useState } from "react";

function App() {
  const [activeElementId, setActiveElementId] = useState(1);

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
        ></header>
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
