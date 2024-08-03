import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' Component= {Home} />
      <Route path = '/about' Component= {About} />
    </Routes>
    </>
  );
}

export default App;
