import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const[data, setData] = useState([])
  const [activeButton, setActiveButton] = useState(1)
  const [activeData, setActiveData] = useState([])
  const [buttonList, setButtonList] = useState([])

  const DATA_TO_DISPLAY = 10
  const PAGINATION_BUTTONS = data.length/10
  

  useEffect(() => {
    let array = []
    for(let i = 0; i < 100; i++){
      array.push(`Data ${i}`)
    }
    
    let totalNumberOfButtons = array.length/ DATA_TO_DISPLAY
    let buttonArray = []
    for(let i = 0; i < totalNumberOfButtons; i++){
      buttonArray.push(`Button ${i}`)
    }
    setData(array)
    setButtonList(buttonArray)
  }, [])
  
  return (
    <div className="App">
      {
        buttonList.map((item, index) => {
          return(
            <button>{index}</button>
          )
        })
      }      
    </div>
  );
}

export default App;
