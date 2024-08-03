import logo from './logo.svg';
import './App.css';
import useTimer from './hooks/useTimer';

function App() {
  const {secondsLeft} = useTimer(5)

  return (
    <div className="App">
      Hello 
      {`Seconds Left ${secondsLeft}`}
    </div>
  );
}

export default App;
