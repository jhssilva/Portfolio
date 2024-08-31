import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import DarkMode from "./DarkMode";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import { descriptionAboutMe } from "../utils/Information";

const MainContent = (props) => {
  const { isDarkMode, setIsDarkMode } = props;

  return (
    <div
      className={"main-content " + (isDarkMode ? "dark-mode" : "light-mode")}
    >
      <header className={"container header"} id="home">
        <Header description={descriptionAboutMe} />{" "}
      </header>
      <main>
        <section className={"container"} id="about">
          <About description={descriptionAboutMe} />
        </section>
        <section className={"container"} id="porfolio">
          <Portfolio />
        </section>
        <section className={"container"} id="blogs">
          <Blogs />
        </section>
        <section className={"container"} id="contacts">
          <Contacts />
        </section>
      </main>

      <DarkMode isDarkModeOn={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default MainContent;
