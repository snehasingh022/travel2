import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TravelPlanning from './TravelPlanning';
import UpcomingTrip from './UpcomingTrip';
import { ThemeProvider } from './ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<TravelPlanning />} />
        <Route path="/upcoming-trip" element={<UpcomingTrip />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
