import React from "react";
import DownloadBtn from "./DownloadBtn";
import picture from "../resources/img/Lisboa.jpeg";

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

export default Header;
