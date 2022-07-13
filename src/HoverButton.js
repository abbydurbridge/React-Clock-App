import React, { useState } from "react";

function HoverButton() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="button-container">
      <button
        className="hover-button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown ? "Hi Friend" : "Hover Over Me"}
      </button>
    </div>
  );
}
export default HoverButton;
