import { useState } from "react";
import "./AnimationButton.scss";

const AnimationButton = () => {
  const [border, setBorder] = useState(false);

  const handleBorder = () => {
    setBorder(!border);
  };

  return (
    <>
      <button
        className={` animationButton ${border ? "border" : "none"}`}
        onClick={handleBorder}
      >
        Animation button
      </button>
    </>
  );
};

export default AnimationButton;
