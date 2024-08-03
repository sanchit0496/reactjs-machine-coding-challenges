import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [buttonList, setButtonList] = useState([]);

  const DATA_TO_DISPLAY = 10;

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array.push(`Data ${i}`);
    }
    let tempArray = array.slice(0, DATA_TO_DISPLAY);
    setActiveData(tempArray);

    let totalNumberOfButtons = array.length / DATA_TO_DISPLAY;
    let buttonArray = [];
    for (let i = 0; i < totalNumberOfButtons; i++) {
      buttonArray.push(i);
    }

    setData(array);
    setButtonList(buttonArray);
  }, []);

  const handleClick = (index) => {
    let tempData = data.slice(
      index * DATA_TO_DISPLAY,
      index * DATA_TO_DISPLAY + DATA_TO_DISPLAY
    );
    setActiveData(tempData);
  };

  return (
    <div className="App">
      {activeData.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
      {buttonList.map((item) => {
        return (
          <button key={item} onClick={() => handleClick(item)}>
            {item + 1}
          </button>
        );
      })}
    </div>
  );
}

export default App;
