import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {

  const [hoveredStars, setHoveredStars] = useState([])
  const [clickedStars, setClickedStars] = useState([])

  const handleHoverOver = (i) => {
    setHoveredStars((prev) => [...prev, i])
  }

  const handleHoverLeave = () => {
    setHoveredStars([])
  }

  const handleStarClick = (i) => {
    setClickedStars(hoveredStars)
  }

  console.log('clickedStars', hoveredStars)


  const renderStars = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push(
        <div 
          className = {hoveredStars.includes(i) ? 'starDivHover' : 'starDiv'} 
          onMouseEnter= {() => handleHoverOver(i)}
          onClick = {() => handleStarClick(i)}
        >
          <FaStar color= {hoveredStars.includes(i) || clickedStars.includes(i) ? 'yellow' : 'lightgrey'} size={40} />
        </div>
      );
    }
    return array;
  };

  return( 
  <div className="App">
    <div className="starContainer" onMouseLeave = {() => handleHoverLeave()}>
      {renderStars()}
    </div>
  </div>
  )
}

export default App;
