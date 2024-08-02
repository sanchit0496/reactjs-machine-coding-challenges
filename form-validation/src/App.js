import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./Components/InputComponent/InputComponent";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  });

  const errorObj = {
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  };

  const isValidValue = () => {
    if (userInput.firstName.length < 5) {
      errorObj.firstName = "Please enter longer value";
      return false;
    }else{
      errorObj.firstName = "";
    }

    if (userInput.lastName.length < 2) {
      errorObj.lastName = "Please enter longer value";
      return false;
    }else{
      errorObj.lastName = "";
    }

    return true;
  };

  const handleUserInput = (e, type) => {
    let value = e.target.value;
    let userNewInput = { ...userInput, [type]: value };
    setUserInput(userNewInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = isValidValue();
    if (isValid) {
      console.log("okay");
    } else {
      setErrors(errorObj);
    }
  };


  return (
    <div className="App">
      <form>
        <InputComponent
          name="First Name"
          type="text"
          onChange={(e) => handleUserInput(e, "firstName")}
          error={errors.firstName}
        />

        <InputComponent
          name="Last Name"
          type="text"
          onChange={(e) => handleUserInput(e, "lastName")}
          error={errors.lastName}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
