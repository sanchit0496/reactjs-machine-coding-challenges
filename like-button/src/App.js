import { useState } from 'react';
import './App.css';
import Button from './Button/Button';

function App() {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [liked, setLiked] = useState(false)


  const handleClick = async () => {
    setLiked(!liked)
    setLoading(true)

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        },
      );

      if(response.status === 200){
        setLiked(!liked)
      }else{
        const res = await response.json();
        setError(res.message);
        return;
      }
    } catch (error) {
      setError('An unexpected error occured')
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <div className="App">
      <Button onClick = {handleClick} liked = {liked} loading = {loading} error = {error} />
    </div>
  );
}

export default App;
