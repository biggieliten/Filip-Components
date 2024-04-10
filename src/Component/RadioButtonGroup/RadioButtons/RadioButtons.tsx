import React, { useState } from "react";

import "../sass/styles.scss";

// type RadioButtonsProps = {
// 	optionsArray: any[]
// selecterRadioOption: string;

// 	// handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

type RadioProps = {
  optionsArray: { name: string }[];

  FormHeader: string;
};

const RadioButtons: React.FC<RadioProps> = ({ optionsArray, FormHeader }) => {
  const [selectedRadioOption, setSelectedRadioOption] = useState("");
  const [toggleAnimation, setToggleAnimation] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioOption(e.target.value);
    setToggleAnimation(!toggleAnimation);
    // setToggleAnimation(null);
  };
  return (
    <>
      <div className={`radioBox ${toggleAnimation ? "animate" : ""}`}>
        <h2>{FormHeader}</h2>
        <form className="radioForm">
          {optionsArray.map((input) => (
            <div>
              <label htmlFor="">{input.name}</label>
              <input
                className={`radioInput ${
                  toggleAnimation ? "clicked" : "unclicked"
                }`}
                type="radio"
                onChange={handleRadioChange}
                value={input.name}
                checked={selectedRadioOption === input.name}
              />
            </div>
          ))}
        </form>
      </div>
      {/* <h1>{selectedRadioOption}</h1> */}
    </>
  );
};

export default RadioButtons;
