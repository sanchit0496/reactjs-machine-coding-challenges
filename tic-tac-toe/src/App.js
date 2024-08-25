import { useState } from "react";
import "./App.css";

function App() {
  const NUMBER_OF_BOXES = 9;
  const [xTurn, setXTurn] = useState(true)
  const [xInput, setXInput] = useState([])
  const [oInput, setOInput] = useState([])

  const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWins = (array) => {
    let didWin = false;
    winnings.forEach((item) => {
      if (
        item[0] === array[0] &&
        item[1] === array[1] &&
        item[2] === array[2]
      ) {
        didWin = true;
      }
    });
    return didWin;
  };

  const handleClick = (i) => {
    let tempX = [...xInput, i]
    setXInput(tempX)
    if (tempX.length >= 3) {
      let didWin = checkWins(tempX);
      console.log("didWin", didWin);
    }
  };

  console.log('xInput', xInput)

  const renderBoard = () => {
    let arr = [];
    for (let i = 0; i < NUMBER_OF_BOXES; i++) {
      arr.push(
        <div onClick={() => handleClick(i)} className="box" key={i}>
          {i}
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="App">
      TicTacToe
      <div className="board-holder">{renderBoard()}</div>
    </div>
  );
}

export default App;
