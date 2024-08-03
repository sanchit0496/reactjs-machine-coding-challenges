import { useState, useEffect } from "react";

const useTimer = (hoursEntered, minutesEntered, secondsEntered) => {
    console.log('hoursEntered, minutesEntered, secondsEntered', hoursEntered, minutesEntered, secondsEntered)
  const [secondsLeft, setSecondsLeft] = useState(secondsEntered);

  useEffect(() => {
    if (secondsEntered === 0) return;
    setSecondsLeft(secondsEntered);
    let interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsEntered]);

  return {
    secondsLeft,
  };
};

export default useTimer;
