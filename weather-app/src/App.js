import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [dataFetched, setDataFetched] = useState(false)
  const [response, setResponse] = useState(null)

  useEffect(() => {
    const getWeatherData = () => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bf909b4a90c47e810fc156dc73c0ed75"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          setResponse(result)
          setDataFetched(true)
        });
    };

    getWeatherData();
  }, []);

  return (
    <div>
      {dataFetched ? 
        <div>{response.name}</div> 
        : 
        <div>Loading</div>
        }
      </div>
  )
}

export default App;
