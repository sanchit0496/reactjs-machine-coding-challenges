import './App.css';
import { useState } from 'react';

function App() {

  const otpArray = [0,1,2,3]

  const [activeIndex, setActiveIndex] = useState(0)
  const [userInput, setUserInput] = useState([])
  const [displayOTP, setDisplayOTP] = useState(false)

  const handleInputChange = (e, index) => {
    if(isNaN(Number(e.target.value))){
      console.log('inside if')
      return
    }else{
      setActiveIndex((prev) => prev + 1)
      setUserInput((prev) => [...userInput, e.target.value])
    }
  }

  const handleOTPSubmit = () => {
    setDisplayOTP(true)
  }

  return (
    <div className="App">
      OTP Login 
      <div className = 'otp-holder'>
        {
          otpArray.map((item) => {
            return(
              <div className = 'otp-digit-holder'>
                <input 
                  style={{border: activeIndex === item ? '5px solid pink': ''}} 
                  disabled = {activeIndex !== item} 
                  className = {`digit digit-${item}`} 
                  type = 'text' 
                  onChange={(e) => handleInputChange(e, item)}  
                />
              </div>
            )
          })
        }
      </div>
      <button onClick = {handleOTPSubmit}> Submit </button>
      {displayOTP && <div>{`You Entered: ${userInput.join("")}`}</div>}
    </div>
  );
}

export default App;
