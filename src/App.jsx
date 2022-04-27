import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Html from './components/Html';
import Css from './components/Css';
import JavaScript from './components/JavaScript';
import React from './components/React';

function App() {

  return (
    <div>
      <ul className='navbar'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/html">HTML</Link>
          <Link className='link' to="/css">CSS</Link>
          <Link className='link' to="/javascript">JavaScript</Link>
          <Link className='link' to="/react">React</Link>
      </ul>

      <hr />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/html' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path='/javascript' element={<JavaScript />} />
        <Route path='/react' element={<React />} />
      </Routes>
    </div>
);
}

export default App
