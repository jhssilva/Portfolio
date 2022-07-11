import React from "react";
const resumeAddress =
  "https://docs.google.com/document/d/13LLI6V8zva_zG7_KWLYqLB3d-W6YoySCr9GONgwShBM/edit?usp=sharing";

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
