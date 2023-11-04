import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cartpage';
import Home from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cart" element={<Cart/>}/>
        </Routes> 
    </div>     
  );
}

export default App;
