import React from "react";

const MainTitle = (props) => {
  const { headerBegin, headerEnd, text } = props;
  return (
    <div className="main-title">
      <h2>
        {headerBegin} <span>{headerEnd}</span>
        <span className="bg-text">{text}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
