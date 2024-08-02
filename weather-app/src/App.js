import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getWeatherData = () => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bf909b4a90c47e810fc156dc73c0ed75"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
        });
    };

    getWeatherData();
  }, []);

  return <div className="App">Hello</div>;
}

export default App;
