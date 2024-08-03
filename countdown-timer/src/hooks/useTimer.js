import { useState, useEffect } from "react";

const useTimer = (start) => {
  const [secondsLeft, setSecondsLeft] = useState(start);

  useEffect(() => {
    if (start === null) return;
    setSecondsLeft(start);
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
  }, [start]);

  return {
    secondsLeft,
  };
};

export default useTimer;
