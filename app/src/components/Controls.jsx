import React from "react";

const Controls = (props) => {
  const { activeElementId, setActiveElementId } = props;
  const listControls = [
    { id: 1, dataId: "home", icon: "fas fa-home" },
    { id: 2, dataId: "about", icon: "fas fa-user" },
    { id: 3, dataId: "portfolio", icon: "fas fa-briefcase" },
    { id: 4, dataId: "blogs", icon: "fas fa-newspaper" },
    { id: 5, dataId: "contact", icon: "fas fa-envelope-open" },
  ];

  return (
    <div className="controls">
      {listControls.map((control) => {
        const { id } = control;
        return (
          <Control
            key={id}
            control={control}
            activeElementId={activeElementId}
            setActiveElementId={setActiveElementId}
          />
        );
      })}
    </div>
  );
};

const Control = (props) => {
  const { control, activeElementId, setActiveElementId } = props;
  const { id, dataId, icon } = control;

  const divClass =
    "control control-" + id + (activeElementId === id ? " active-btn" : "");

  const handleControlOnClick = (id) => {
    setActiveElementId(id);
  };

  return (
    <div
      className={divClass}
      data-id={dataId}
      onClick={() => {
        handleControlOnClick(id);
      }}
    >
      <i className={icon}></i>
    </div>
  );
};

export default Controls;
