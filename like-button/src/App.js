import { useState } from 'react';
import './App.css';
import Button from './Button/Button';

function App() {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [liked, setLiked] = useState(false)


  const handleClick = () => {
    console.log('called')
    setLiked(!liked)
    console.log('loading', loading)
  }
  
  return (
    <div className="App">
      <Button onClick = {handleClick} liked = {liked} loading = {loading} />
    </div>
  );
}

export default App;
