import React from "react";
import { listControls } from "../utils/Information";

const Controls = (props) => {
  const { activeElementId, setActiveElementId } = props;

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
