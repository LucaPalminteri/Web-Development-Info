import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Html from './components/Html';
import Css from './components/Css';
import JavaScript from './components/JavaScript';
import React from './components/React';
import Git from './components/Git';
import Api from './components/Api';
import BuildTools from './components/BuildTools';
import CssFrameworks from './components/CssFrameworks';
import Internet from './components/Internet';
import PackageManagers from './components/PackageManagers';
import Security from './components/Security';
import Testing from './components/Testing';
import SocialMedia from './components/SocialMedia';
import EnglishInterview from './components/englishInterview';

function App() {

  return (
    <div className='app'>
      <ul className='navbar'>
          <h2>Luca Palminteri</h2>
          <hr />
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/internet">Internet</Link>
          <Link className='link' to="/html">HTML</Link>
          <Link className='link' to="/css">CSS</Link>
          <Link className='link' to="/javascript">JavaScript</Link>
          <Link className='link' to="/react">React</Link>
          <Link className='link' to="/api">API</Link>
          <Link className='link' to="/git">GIT</Link>
          <Link className='link' to="/buildtools">Build Tools</Link>
          <Link className='link' to="/cssframeworks">CSS Frameworks</Link>
          <Link className='link' to="/packagemanagers">Package Managers</Link>
          <Link className='link' to="/security">Security</Link>
          <Link className='link' to="/testing">Testing</Link>
          <Link className='link' to='/english-interview'>Frontend Interview</Link>
          <SocialMedia />
      </ul>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/html' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path='/javascript' element={<JavaScript />} />
        <Route path='/react' element={<React />} />
        <Route path='/api' element={<Api />} />
        <Route path='/git' element={<Git />} />
        <Route path='/buildtools' element={<BuildTools />} />
        <Route path='/cssframeworks' element={<CssFrameworks />} />
        <Route path='/internet' element={<Internet />} />
        <Route path='/packagemanagers' element={<PackageManagers />} />
        <Route path='/security' element={<Security />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/english-interview' element={<EnglishInterview />}/>
      </Routes>
    </div>
);
}

export default App
