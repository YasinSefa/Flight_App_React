import React from 'react';
import Filter from './Filter';
import FlightsList from './FlightsList';

const Section = ({ filters }) => {

  return (
    <div className="section-container">
      <div className="flights-wrapper">
        <FlightsList filters={filters}/>
      </div>
      <div className="filter-wrapper">
        <Filter />
      </div>
    </div>
  );
};

export default Section;