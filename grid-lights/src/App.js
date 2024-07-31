import { useState } from 'react';
import './App.css';

function App() {

  const [clickedTiles, setClickedTiles] = useState([])

  const handleClick = (i) => {
    if(i !== 4 && !clickedTiles.includes(i)){
      setClickedTiles([...clickedTiles, i])
    }
  }
  console.log('clickedTiles', clickedTiles)

  const renderTiles = () => {
    let cells = []
    for(let i = 0; i < 9; i++){
        cells.push(
          <div key = {i} className = {clickedTiles.includes(i) && i !== 4 ? 'tile-filled' :'tile'} onClick = {() => handleClick(i)}>
            {`Hello ${i}`}
          </div>
        )
    }
    return cells
  }
  
  return (
    <div className="App">
      <div className = 'tileHolder'>
        {renderTiles()}
      </div>
    </div>
  );
}

export default App;
