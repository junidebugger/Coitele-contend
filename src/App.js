import React from 'react';
import Home from './screens/Home.js';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Daily from './screens/Daily.js';
import Earn from './screens/Earn.js';
import Referrals from './screens/Referrals.js';
import AirDrop from './screens/AirDrop.js';
import BottomNavigation from './components/BottomNavigation.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <BottomNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/shares" element={<Referrals />} />
          <Route path="/airdrop" element={<AirDrop />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
