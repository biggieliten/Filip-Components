import RadioButtons from "./Component/RadioButtonGroup/RadioButtons/RadioButtons";
import "./App.css";
import SearchBtn from "./Component/SearchBtn/SearchBtn";

function App() {
  const RadioButtonsArray = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];
  return (
    <>
      <RadioButtons FormHeader="Radio Group" optionsArray={RadioButtonsArray} />
      <SearchBtn />
    </>
  );
}

export default App;
