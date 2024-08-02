import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const numbers= [1,2,3,4,5,6,7,8,9,0]
  const expressions = ['+', '-', '*', '%']

  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(null)
  const [submitClicked, setSubmitClicked] = useState(false)

  const handleClick = (input) => {
    setUserInput(prevInput => prevInput + input.toString());
  }
  console.log('userInput', userInput)


  const handleSubmit = () => {
    let value = eval(userInput)
    console.log('value', value)
    setResult(value)
    setSubmitClicked(true)
  }

  const handleReset = () => {
    setResult(null)
    setSubmitClicked(false)
    setUserInput('')
  }

  return (
    <div className="App">
      <div className='user-input-and-calc'>
         {submitClicked ? result : userInput}
      </div>
      
      <div className='number-holder'>
      {
        numbers.map((item) => {
          return(
            <button onClick={() => handleClick(item)}>{item}</button> 
          )
        })
      }
      </div>

      <div className='expression-holder'>
      {
        expressions.map((item) => {
          return(
            <button onClick={() => handleClick(item)}>{item}</button> 
          )
        })
      }
      </div>
      
      <button onClick={() => handleSubmit()}>Submit</button> 
      <button onClick={() => handleReset()}>Reset</button> 

    </div>
  );
}

export default App;
