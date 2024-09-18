import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
import Counter from './components/Counter.js';
import Navigation from './components/Navigation.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (

      

      <Router>
        <div className="App">

            <Navigation />

            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/contact" element={ <Contact /> } />
                <Route exact path="/counter" element={ <Counter /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
