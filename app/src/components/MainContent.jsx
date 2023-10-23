import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import DarkMode from "./DarkMode";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import Controls from "./Controls";
import { descriptionAboutMe } from "../utils/Information";

const MainContent = () => {
  const [activeElementId, setActiveElementId] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const checkIfHasToDisplayCurrentSection = (id) => {
    if (id === activeElementId) {
      return true;
    }
    return false;
  };

  return (
    <div className={"main-content " + (isDarkMode ? "" : "light-mode")}>
      <header
        className={
          "container header " +
          (checkIfHasToDisplayCurrentSection(1) ? "active" : "")
        }
        id="home"
      >
        <Header description={descriptionAboutMe} />{" "}
      </header>
      <main>
        <section
          className={
            "container " +
            (checkIfHasToDisplayCurrentSection(2) ? "active" : "")
          }
          id="about"
        >
          <About description={descriptionAboutMe} />
        </section>
        <section
          className={
            "container " +
            (checkIfHasToDisplayCurrentSection(3) ? "active" : "")
          }
          id="porfolio"
        >
          <Portfolio />
        </section>
        <section
          className={
            "container " +
            (checkIfHasToDisplayCurrentSection(4) ? "active" : "")
          }
          id="blogs"
        >
          <Blogs />
        </section>
        <section
          className={
            "container " +
            (checkIfHasToDisplayCurrentSection(5) ? "active" : "")
          }
          id="contacts"
        >
          <Contacts />
        </section>
      </main>
      <Controls
        setActiveElementId={setActiveElementId}
        activeElementId={activeElementId}
      />
      <DarkMode isDarkModeOn={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default MainContent;
