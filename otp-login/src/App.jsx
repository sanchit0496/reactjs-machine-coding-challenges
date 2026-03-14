import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import './App.css'

const App = () => {

  const OTP_DIGITS = 6;

  const [digits, setDigits] = useState(Array(OTP_DIGITS).fill(''))
  const inputRef = useRef([])

  const handleInput = (e, index) => {
    let value = e.target.value

    if (value && (value < "0" || value > "9")) return;

    let tempDigits = [...digits]
    tempDigits[index] = value
    setDigits(tempDigits)

    if (value && index < OTP_DIGITS - 1) {
      inputRef.current[index + 1].focus()
    }
    if (index === OTP_DIGITS - 1) {
      console.log(tempDigits)
    }

  }

  const handleKeyDown = (e, index) => {
    let key = e.key
    let tempDigits = [...digits]

    if (key === 'Backspace') {
      inputRef.current[index - 1].focus()
      tempDigits[index] = ''
      setDigits(tempDigits)
    } else if (key === 'ArrowRight' && index !== OTP_DIGITS - 1) {
      tempDigits[index + 1] = ''
      setDigits(tempDigits)

      inputRef.current[index + 1].focus()
    } else if (key === 'ArrowLeft' && index !== 0) {
      tempDigits[index - 1] = ''
      setDigits(tempDigits)

      inputRef.current[index - 1].focus()

    }
  }

  return (
    <div className='otp-holder'>
      <h3>OTP</h3>
      {
        digits.map((item, index) => {
          return (<input
            key={index}
            type='text'
            inputMode='numeric'
            className={`otp-input ${index}`}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => inputRef.current[index] = el}
            value={digits[index]}
          />)
        })
      }</div>
  )
}

export default App