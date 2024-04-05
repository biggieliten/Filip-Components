import React, { useState } from "react";

type RadioButtonsProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedButton: string;
};

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  return (
    <>
      <div className="radioBox">
        <form className="radioForm">
          <label htmlFor="">
            Option 1
            <input
              type="radio"
              name=""
              id=""
              onChange={props.handleChange}
              value={"Option1"}
              checked={props.selectedButton === "Option1"}
            />
          </label>
          <label htmlFor="">
            Option 2
            <input
              type="radio"
              name=""
              id=""
              onChange={props.handleChange}
              value={"Option2"}
              checked={props.selectedButton === "Option2"}
            />
          </label>
          <label htmlFor="">
            Option 3
            <input
              type="radio"
              name=""
              id=""
              onChange={props.handleChange}
              value={"Option3"}
              checked={props.selectedButton === "Option3"}
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default RadioButtons;
