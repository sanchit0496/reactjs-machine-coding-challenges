import logo from "./logo.svg";
import "./App.css";

function App() {
  const NUMBER_OF_BOXES = 9;

  const renderBoard = () => {
    let arr = [];
    for (let i = 0; i < NUMBER_OF_BOXES; i++) {
      arr.push(<div className = 'box' key={i}>{i}</div>);
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
