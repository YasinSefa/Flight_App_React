import React from 'react';
import FlightDashboard from './FlightDashboard';
import Menu from './Menu';

const Main = () => {
  return (
    <div className="main-container">
      <FlightDashboard />
      <Menu />
    </div>
  );
};

export default Main;