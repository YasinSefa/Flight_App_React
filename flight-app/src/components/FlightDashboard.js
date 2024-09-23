import React, { useState } from 'react';
import BookYourFlight from './BookYourFlight';
import Section from './Section';

const FlightDashboard = () => {
  const [filters, setFilters] = useState(null);

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
  };

  return (
    <div className="flight-dashboard">
      <BookYourFlight onSearch={handleSearch} />
      <Section filters={filters} />
    </div>
  );
};

export default FlightDashboard;