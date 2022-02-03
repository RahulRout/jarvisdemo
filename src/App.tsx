import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignIn, Home } from './Routes';
import { Route, Link, BrowserRouter as Router, Routes, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<SignIn />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
