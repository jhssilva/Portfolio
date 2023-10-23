import React from "react";
import { resumeAddress } from "../utils/Information";

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

export default DownloadBtn;
