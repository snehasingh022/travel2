import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './UpcomingTrip.css';

const UpcomingTrip = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const themeClass = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={`upcoming-trip-container ${themeClass}`}>
      <header className="header">
        <h1>Hello Chhavi!</h1>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </header>

      <section className="trip-overview card">
        <img src="/images/OIP.jpg" alt="Tokyo" />
        <div>
          <h2>Your Upcoming Trip</h2>
          <h3>TOKYO</h3>
          <p>27.01.2025 - 02.02.2025</p>
          <div className="info-tags">
            <span>6 Days</span>
            <span>4 Plans</span>
            <span>3 Stays</span>
          </div>
        </div>
      </section>

      <section className="flight card">
        <h2>Flight Details</h2>
        <p>DEL - NRT</p>
        <p>26.01.2025, 10:50 am</p>
        <p>Delhi, India - Narita, Tokyo</p>
      </section>

      <section className="accommodation card">
        <h2>Accommodation</h2>
        <div>
          <h4>Shinagawa Prince Hotel</h4>
          <p>Check-in: 26.01.2025, 11:15 pm</p>
          <p>Check-out: 29.01.2025, 11:00 am</p>
          <p>Status: Confirmed</p>
        </div>
        <div>
          <h4>Mercure Tokyo Hotel</h4>
          <p>Check-in: 29.01.2025, 1:15 pm</p>
          <p>Check-out: 01.02.2025, 11:00 am</p>
          <p>Status: Pending</p>
        </div>
      </section>

      <section className="activities card">
        <h2>Activities - Day 1</h2>
        <ul>
          <li>
            <strong>Asakusa Temple & Nakamise Shopping Street</strong>
            <p>Time: 9:30 am</p>
            <p>Pickup: From Hotel</p>
          </li>
          <li>
            <strong>Tokyo Sky Tree</strong>
            <p>Time: 1:00 pm</p>
            <p>Pickup: From Hotel</p>
          </li>
          <li>
            <strong>Kimono Wearing</strong>
            <p>Time: After 6:00 pm</p>
            <p>Pickup: From Hotel</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UpcomingTrip;
