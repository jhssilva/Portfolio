import React from "react";

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

export default ProgressBar;
