import RadioButtons from "../RadioButtons";
import { useState } from "react";
import "../sass/styles.scss";

const RadioButtonsComp: React.FC = () => {
  const [selectedRadioOption, setSelectedRadioOption] = useState("Option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioOption(e.target.value);
  };

  return (
    <>
      <RadioButtons
        handleChange={handleRadioChange}
        selectedButton={selectedRadioOption}
      />
    </>
  );
};

export default RadioButtonsComp;
