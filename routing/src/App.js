
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Logout from './components/logout';
import React from 'react';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
   
    
    </>
  );
}

export default App;
