import './App.css';
import useTimer from './hooks/useTimer';
import { useState } from 'react';

function App() {

  const [started, setStarted] = useState(false)
  const [secondsEntered, setSecondsEntered] = useState(0)

  const {secondsLeft} = useTimer(started ? secondsEntered : null)

  console.log('secondsLeft',secondsLeft)

  const handleStart = () => {
    setStarted(true)
  }

  const handleUserInput = (e, type) => {
    if(type === 'seconds' && !isNaN(Number(e.target.value))){
      console.log('e.target.value', e.target.value) 
      setSecondsEntered(e.target.value)
    }
  }

  return (
    <div className="App">
     
      {started ? `Seconds Left ${secondsLeft}` :
      <>
       <label>Seconds</label>
       <input type='text' onChange={(e) => handleUserInput(e, 'seconds')} />
      </>
      }

      <button onClick={() => handleStart()}>Start</button>
    </div>
  );
}

export default App;
