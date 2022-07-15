import React, { useState } from "react";

const ToggleButton = (props) => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(isToggleOn ? false : true);
  };

  return (
    <div className="button-container">
      <button className="on-button" onClick={handleClick}>
        {props.label} {isToggleOn ? "ON" : "OFF"}
      </button>
      <></>
    </div>
  );
};
export default ToggleButton;
