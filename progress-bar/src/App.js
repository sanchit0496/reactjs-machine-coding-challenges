import { useState } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
   setInterval(() => {
      setProgress((prev) => prev + 1)
    }, 100);
  }, [])
  

  return (
    <div className="App">
      Progress Bar
      <ProgressBar text = {progress} width={progress} />
    </div>
  );
}

export default App;
