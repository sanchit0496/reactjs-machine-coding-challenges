import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';

function App() {

  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((result) => {
      setCandidates(result.results)
    })
  }, [])

  console.log('candidates', candidates)
  
  return (
    <div className="App">
      {
        candidates.length > 0 ? candidates.map((item) => {
          return(
            <Card src = {item.picture.large} name = {`${item.name.title} ${item.name.first} ${item.name.last}`} phone = {item.cell} email = {item.email} address = {item.location.timezone.description} />
          )
        }) : <div>Loading</div>
      }
    </div>
  );
}

export default App;
