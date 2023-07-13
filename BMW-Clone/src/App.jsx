import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>

      <Navbar />


      <Routes>
        <Route exact path="/home" element={<Home />} />
        {/* Additional routes go here */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
