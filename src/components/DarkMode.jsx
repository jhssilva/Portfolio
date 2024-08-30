import React from "react";

const DarkMode = (props) => {
  const { setIsDarkMode } = props;
  const handleSwitchDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="theme-btn" onClick={handleSwitchDarkMode}>
      <i className="fas fa-adjust"></i>
    </div>
  );
};

export default DarkMode;
