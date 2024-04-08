import RadioButtons from "./RadioButtons/RadioButtons";
import { useState } from "react";

const RadioButtonsComp: React.FC = () => {
  const [selectedRadioOption, setSelectedRadioOption] = useState("");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioOption(e.target.value);
    /*     console.log(selectedRadioOption);
     */
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
