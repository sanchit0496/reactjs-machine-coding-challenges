import "./App.css";
import useTimer from "./hooks/useTimer";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  const [secondsEntered, setSecondsEntered] = useState(0);
  const [minutesEntered, setMinutesEntered] = useState(0);
  const [hoursEntered, setHoursEntered] = useState(0);

  const { secondsLeft } = useTimer(
    hoursEntered,
    minutesEntered,
    secondsEntered,
    started
  );
  console.log('component secondsLeft', secondsLeft)

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setHoursEntered(0)
    setMinutesEntered(0)
    setSecondsEntered(0);
  };

  const handleUserInput = (e, type) => {
    let valueEntered = Number(e.target.value)
    if (isNaN(valueEntered)) {
      setSecondsEntered(0);
    } else if (type === "seconds" && !isNaN(valueEntered)) {
      setSecondsEntered(e.target.value);
    } else if (type === "minutes" && !isNaN(valueEntered)) {
      setMinutesEntered(e.target.value);
    } else if (type === "hours" && !isNaN(valueEntered)) {
      setHoursEntered(e.target.value);
    }
  };

  return (
    <div className="App">
      {started  ? (
        <>
          Hours Left: {Math.floor(secondsLeft / 3600)} <br/><br/>
          Minutes Left: {Math.floor((secondsLeft % 3600) / 60)} <br/><br/>
          Seconds Left: {(secondsLeft % 60)} <br/><br/>
          <button onClick={() => handleReset()}>Reset</button>
        </>
      ) : (
        <>
          <div>
            <label>Hours</label>
            <input
              value={hoursEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "hours")}
            />
          </div>

          <div>
            <label>Minutes</label>
            <input
              value={minutesEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "minutes")}
            />
          </div>

          <div>
            <label>Seconds</label>
            <input
              value={secondsEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "seconds")}
            />
          </div>

          <button onClick={() => handleStart()}>Start Application</button>
        </>
      )}
    </div>
  );
}

export default App;