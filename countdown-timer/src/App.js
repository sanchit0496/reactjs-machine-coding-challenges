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
    secondsEntered
  );

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setSecondsEntered(0);
  };

  const handleUserInput = (e, type) => {
    if (isNaN(Number(e.target.value))) {
      setSecondsEntered(0);
    } else if (type === "seconds" && !isNaN(Number(e.target.value))) {
      setSecondsEntered(e.target.value);
    } else if (type === "minutes" && !isNaN(Number(e.target.value))) {
      setMinutesEntered(e.target.value);
    } else if (type === "hours" && !isNaN(Number(e.target.value))) {
      setHoursEntered(e.target.value);
    }
  };

  return (
    <div className="App">
      {started && secondsLeft > 0 ? (
        <>
          Seconds Left: {secondsLeft}
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
