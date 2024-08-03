import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState({
    length: 0,
    specialChar: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
  });

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialChar = ["@", "#", "$", "%", "^"];
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const onSliderChange = (e) => {
    let newUserInput = { ...userInput, ["length"]: e.target.value };
    setUserInput(newUserInput);
  };

  const onCheckboxChange = (e, type) => {
    let newUserInput = { ...userInput, [type]: e.target.checked };
    setUserInput(newUserInput);
  };

  const generatePassword = () => {
    console.log("userInput", userInput);
  };

  return (
    <div className="App">
      Password Generator
      <div className="config-section">
        <div className="config-option">
          <label>Select Length</label>
          <input
            type="range"
            name="length"
            min="1"
            max="10"
            value={userInput.length}
            onChange={(e) => onSliderChange(e)}
          />
        </div>

        <div className="config-option">
          <label>Special Characters</label>
          <input
            name="specialChar"
            type="checkbox"
            onClick={(e) => onCheckboxChange(e, "specialChar")}
          />
        </div>
        <div className="config-option">
          <label>Lowercase</label>
          <input
            name="lowercase"
            type="checkbox"
            onChange={(e) => onCheckboxChange(e, "lowercase")}
          />
        </div>
        <div className="config-option">
          <label>Uppercase</label>
          <input
            name="uppercase"
            type="checkbox"
            onChange={(e) => onCheckboxChange(e, "uppercase")}
          />
        </div>
        <div className="config-option">
          <label>Numbers</label>
          <input
            name="numbers"
            type="checkbox"
            onChange={(e) => onCheckboxChange(e, "numbers")}
          />
        </div>
      </div>
      <button onClick={() => generatePassword()}>Generate Password</button>
    </div>
  );
}

export default App;
