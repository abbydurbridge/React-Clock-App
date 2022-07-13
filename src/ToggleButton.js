import React, { useState } from "react";

function ToggleButton() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(isToggleOn ? false : true);
  };

  return (
    <div className="button-container">
      <button className="on-button" onClick={handleClick}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
      <></>
    </div>
  );
}
export default ToggleButton;
