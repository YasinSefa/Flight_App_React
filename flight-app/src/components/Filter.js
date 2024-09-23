import React, { useState } from 'react';

const Filter = () => {
  const [sortBy, setSortBy] = useState('Lowest Price');
  const [arrivalTime, setArrivalTime] = useState([]);
  const [stops, setStops] = useState([]);
  const [airlines, setAirlines] = useState([]);

  const handleCheckboxChange = (setState, value) => {
    setState(prevState =>
      prevState.includes(value)
        ? prevState.filter(item => item !== value)
        : [...prevState, value]
    );
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h4 htmlFor="sortBy">Sort by:</h4>
        <select
          id="sortBy"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
          <option value="Earliest Arrival">Earliest Arrival</option>
          <option value="Latest Arrival">Latest Arrival</option>
        </select>
      </div>

      <div className="filter-section">
        <h4>Arrival Time</h4>
        <div className="filter-option">
          <input
            type="checkbox"
            id="arrival-early"
            onChange={() => handleCheckboxChange(setArrivalTime, '5:00 AM - 11:59 AM')}
          />
          <label htmlFor="arrival-early">12:00 AM - 11:59 AM</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="arrival-late"
            onChange={() => handleCheckboxChange(setArrivalTime, '12:00 PM - 5:59 PM')}
          />
          <label htmlFor="arrival-late">12:00 PM - 11:59 PM</label>
        </div>
      </div>

      <div className="filter-section">
        <h4>Stops</h4>
        <div className="filter-option">
          <input
            type="checkbox"
            id="nonstop"
            onChange={() => handleCheckboxChange(setStops, 'Nonstop')}
          />
          <label htmlFor="nonstop">Nonstop</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="one-stop"
            onChange={() => handleCheckboxChange(setStops, '1 Stop')}
          />
          <label htmlFor="one-stop">1 Stop</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="two-plus-stops"
            onChange={() => handleCheckboxChange(setStops, '2+ Stops')}
          />
          <label htmlFor="two-plus-stops">2+ Stops</label>
        </div>
      </div>

      <div className="filter-section">
        <h4>Airlines Included</h4>
        <div className="filter-option">
          <input
            type="checkbox"
            id="airline-alitalia"
            onChange={() => handleCheckboxChange(setAirlines, 'Alitalia')}
          />
          <label htmlFor="airline-alitalia">Alitalia</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="airline-lufthansa"
            onChange={() => handleCheckboxChange(setAirlines, 'Lufthansa')}
          />
          <label htmlFor="airline-lufthansa">Lufthansa</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="airline-air-france"
            onChange={() => handleCheckboxChange(setAirlines, 'Air France')}
          />
          <label htmlFor="airline-air-france">Air France</label>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="turkish-airlines"
            onChange={() => handleCheckboxChange(setAirlines, 'Turkish Airlines')}
          />
          <label htmlFor="turkish-airlines">Turkish Airlines</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
