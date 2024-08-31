import React from "react";

const ProgressBar = (props) => {
  const { title } = props;
  return (
    <div className="progress-bar">
      <p className="prog-title">{title}</p>
    </div>
  );
};

export default ProgressBar;
