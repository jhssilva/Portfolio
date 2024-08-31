import React from "react";

const MainTitle = (props) => {
  const { headerBegin, headerEnd } = props;
  return (
    <div className="main-title">
      <h2>
        {headerBegin} <span>{headerEnd}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
