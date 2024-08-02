import logo from './logo.svg';
import './App.css';
import InputComponent from './Components/InputComponent/InputComponent';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    password: ''
  })

  const errorObj = {}

  const isValidValue = (value, type) => {
    if(type === 'firstName'){
      if(value.length < 5){
        errorObj.firstName = 'Please enter longer value'
      }else{
        errorObj.firstName = ''
      }
    }
    setErrors(errorObj) 
  }

  const handleUserInput = (e, type) => {
    let value = e.target.value;

    isValidValue(value, type);
    let userNewInput = { ...userInput, [type]: value };

    console.log("userNewInput", userNewInput);

    setUserInput(userNewInput);
  };

  console.log('userInput', userInput)
  console.log('errors', errors)



  return (
    <div className="App">
      <form>
        <InputComponent 
          name = 'First Name'
          type='text' 
          onChange={(e) => handleUserInput(e, 'firstName')}
          error = {errors.firstName}
        />
    
      </form>
    </div>
  );
}

export default App;