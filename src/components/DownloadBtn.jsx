import React from "react";
import Resume from "../resources/main.pdf";

const DownloadBtn = () => {
  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Hugo_Silva_Resume.pdf"; // Set the file name for download

    // Trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link element
    document.body.removeChild(link);
  };

  return (
    <div className="btn-con">
      <a onClick={downloadCV} className="main-btn">
        <span className="btn-text">Download CV</span>
        <span className="btn-icon">
          <i className="fas fa-download"></i>
        </span>
      </a>
    </div>
  );
};

export default DownloadBtn;
