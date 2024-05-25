import React from 'react';
import Header from './components/Header';
import Bookingform from './components/Bookingform';
import Hero from './components/Hero';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact Component={Hero}> </Route >
          <Route path="/reservations"  Component={Bookingform}> </Route >
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
