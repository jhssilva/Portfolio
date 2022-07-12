import React from "react";
import DownloadBtn from "./DownloadBtn";
import picture from "../resources/img/Lisboa.jpeg";

const Header = (props) => {
  const { description } = props;
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
        <p>{description}</p>
        <DownloadBtn />
      </div>
    </div>
  );
};

export default Header;
