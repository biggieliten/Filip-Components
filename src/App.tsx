import RadioButtons from "./Component/RadioButtonGroup/RadioButtons/RadioButtons";
import "./App.css";
import SearchBtn from "./Component/SearchBtn/SearchBtn";
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
      <Sidebar items={items} />
      <RadioButtons FormHeader="Radio Group" optionsArray={RadioButtonsArray} />
      <SearchBtn />
    </>
  );
}

export default App;
