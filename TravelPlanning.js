import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './TravelPlanning.css';

const TravelPlanning = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelWith, setTravelWith] = useState('');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleContinue = () => {
    navigate('/upcoming-trip');
  };

  return (
    <div className={`container ${theme}`}>
      <div className="header">
        <h1>Plan Your Journey, Your Way!</h1>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
      <p className="subtitle">Let's create your personalised travel experience</p>

      <label>Where would you like to go?</label>
      <input
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="input"
      />

      <label>How long will you stay?</label>
      <select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="input"
      >
        <option value="">Select Duration</option>
        <option value="1 day">1 Day</option>
        <option value="2-3 days">2-3 Days</option>
        <option value="1 week">1 Week</option>
        <option value="More">More</option>
      </select>

      <label>Who are you traveling with?</label>
      <div className="options">
        {['Solo', 'Couple', 'Family', 'Friends'].map((option) => (
          <button
            key={option}
            className={`option-button ${travelWith === option ? 'selected' : ''}`}
            onClick={() => setTravelWith(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
    </div>
  );
};

export default TravelPlanning;
