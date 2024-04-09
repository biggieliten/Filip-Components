import RadioButtons from "./Component/RadioButtonGroup/RadioButtons/RadioButtons";
import "./app.scss";
import SearchBtn from "./Component/SearchBtn/SearchBtn";

import Toast from "./Component/Toast/Toast";

import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  const RadioButtonsArray = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];
  const items = ["Ägg", "Ägg", "Services", "Contact"];
  return (
    <>
      <RadioButtons FormHeader="Radio Group" optionsArray={RadioButtonsArray} />
      <Sidebar items={items} />
      <SearchBtn />
      <Toast message="Success" type="success" />
      <Toast message="Error" type="error" />
      <Toast message="Info" type="info" />
    </>
  );
}

export default App;
