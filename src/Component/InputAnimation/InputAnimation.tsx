import { useState } from "react";
import "./InputAnimation.scss";
const InputAnimation = () => {
  const [input, setInputState] = useState("");
  const [array, setArray] = useState<string[]>([]);
  const [checkInput, setCheckInput] = useState(false);

  const CheckIfEmpty = (input: string) => {
    if (input == "") {
      setCheckInput(false);
    } else {
      setCheckInput(true);
      console.log("Input not empty");
    }
  };

  const fillArray = () => {
    setArray((array) => [...array, input]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          className={`${""}`}
          onChange={(e) => {
            setInputState(e.target.value);
            CheckIfEmpty(e.target.value);
            // fillArray();
          }}
        />
        <button
          disabled={checkInput === false}
          className={`animatedButton ${checkInput ? "filled" : "empty"}`}
          onClick={() => {
            fillArray();
          }}
        >
          Add
        </button>
        <ul>
          {array.map((input) => (
            <li className="arrayItem">{input}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default InputAnimation;
