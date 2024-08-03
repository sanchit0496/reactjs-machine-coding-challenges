import { useState, useEffect } from "react";

const useTimer = (start) => {
    const [secondsLeft, setSecondsLeft] = useState(start)

    useEffect(() => {
      let interval = setInterval(() => {
        setSecondsLeft((prev) => {
            if(prev === 1){
                clearInterval(interval)
                return 0
            }
            return prev -1
        })
      }, 1000);
      return () => clearInterval(interval)

    }, [])
    
    return{
        secondsLeft
    }
}

export default useTimer;