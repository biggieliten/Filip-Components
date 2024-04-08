import React, { useState } from "react";
import "../sass/styles.scss";
type RadioButtonsProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedButton: string;
};

const RadioButtonsArray = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
];

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  return (
    <>
      {RadioButtonsArray.map((input) => (
        <div>
          <label htmlFor="">{input.name}</label>
          <input
            type="radio"
            onChange={props.handleChange}
            value={input.name}
            checked={props.selectedButton === input.name}
          />
        </div>
      ))}
    </>
  );
};

export default RadioButtons;
