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

  const onSliderChange = (e) => {
    console.log("onSliderChange", e.target.value);
    let newUserInput = {...userInput, ['length'] : e.target.value}
    setUserInput(newUserInput)
  };

  const onCheckboxChange = (e, type) => {
    console.log("onCheckboxChange", type, e.target.checked);
    let newUserInput = {...userInput, [type] : e.target.checked}
    console.log('newUserInput', newUserInput)
    setUserInput(newUserInput)
  };
  console.log('userInput', userInput)


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
    </div>
  );
}

export default App;
