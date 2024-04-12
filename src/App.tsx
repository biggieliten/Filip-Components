import RadioButtons from "./Component/RadioButtonGroup/RadioButtons/RadioButtons";
import "./app.scss";
import SearchBtn from "./Component/SearchBtn/SearchBtn";

import Toast from "./Component/Toast/Toast";

import Sidebar from "./Component/Sidebar/Sidebar";
import DropDownMenu from "./Component/DropdownMenu/DropDownMenu";
import AnimationButton from "./Component/AnimationButton/AnimationButton";
import InputAnimation from "./Component/InputAnimation/InputAnimation";
import CloseDiv from "./Component/CloseDiv/CloseDiv";
import Progressbar from "./Component/Progressbar/Progressbar";
// import { IoIosArrowDown } from "react-icons/io";

function App() {
  const CheckboxesArray = [
    { name: "Checkbox 1" },
    { name: "Checkbox 2" },
    { name: "Checkbox 3" },
    { name: "Checkbox 4" },
    { name: "Checkbox 5" },
  ];

  const DropdownMenuOptions = [
    { name: "Menu option 1" },
    { name: "Menu option 2" },
    { name: "Menu option 3" },
  ];

  const RadioButtonsArray = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];
  const items = ["Ägg", "Ägg", "Services", "Contact"];
  return (
    <>
      <CloseDiv />
      <InputAnimation />
      <AnimationButton />
      <RadioButtons FormHeader="Radio Group" optionsArray={RadioButtonsArray} />
      <Sidebar items={items} />
      <DropDownMenu listOptions={DropdownMenuOptions} />
      <SearchBtn />
      <Toast message="Success" type="success" />
      <Toast message="Error" type="error" />
      <Toast message="Info" type="info" />
      <Progressbar checkboxes={CheckboxesArray} />
    </>
  );
}

export default App;
