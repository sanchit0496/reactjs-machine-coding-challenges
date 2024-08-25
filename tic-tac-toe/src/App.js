import { useState } from "react";
import "./App.css";

function App() {
  const NUMBER_OF_BOXES = 9;
  const [xTurn, setXTurn] = useState(true);
  const [xInput, setXInput] = useState([]);
  const [oInput, setOInput] = useState([]);
  const [gameOver, setGameOver] = useState(false);

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
    return winnings.some((item) => {
      return item.every((index) => array.includes(index));
    });
  };

  const handleClick = (i) => {
    if (xInput.includes(i) || oInput.includes(i) || gameOver) return;

    if (xTurn) {
      let tempX = [...xInput, i];
      setXInput(tempX);

      if (tempX.length >= 3) {
        let didWin = checkWins(tempX);
        if (didWin) {
          alert('X wins!');
          setGameOver(true);
        }
      }
    } else {
      let tempO = [...oInput, i];
      setOInput(tempO);

      if (tempO.length >= 3) {
        let didWin = checkWins(tempO);
        if (didWin) {
          alert('O wins!');
          setGameOver(true);
        }
      }
    }

    if (xInput.length + oInput.length + 1 === NUMBER_OF_BOXES && !gameOver) {
      alert("It's a draw!");
      setGameOver(true);
    }

    setXTurn(!xTurn);
  };

  const resetGame = () => {
    setXInput([]);
    setOInput([]);
    setXTurn(true);
    setGameOver(false);
  };

  const renderBoardValue = (i) => {
    if (xInput.includes(i)) {
      return "X";
    } else if (oInput.includes(i)) {
      return "O";
    }
    return "";
  };

  const renderBoard = () => {
    let arr = [];
    for (let i = 0; i < NUMBER_OF_BOXES; i++) {
      arr.push(
        <div onClick={() => handleClick(i)} className="box" key={i}>
          <div className="board-value">
            {renderBoardValue(i)}
          </div>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="App">
      TicTacToe
      <div className="board-holder">{renderBoard()}</div>
      {gameOver && <button onClick={resetGame}>Restart Game</button>}
    </div>
  );
}

export default App;
