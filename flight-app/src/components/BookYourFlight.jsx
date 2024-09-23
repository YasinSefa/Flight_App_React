import React, { useState } from 'react';
import { FaPlane,FaPlaneDeparture , FaPlaneArrival , FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

const BookYourFlight = ({ onSearch }) => {
  const [tripType, setTripType] = useState('round-trip');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleSearch = () => {
    onSearch({
      tripType,
      startDate,
      endDate,
      departure,
      arrival,
    });
  };

  console.log(tripType,
    startDate,
    endDate,
    departure,
    arrival)

  return (
    <div className="flight-container">
  <div className="flight-header">
    <div className="title-section">
      <FaPlane className="plane-icon" />
      <h2>BOOK YOUR FLIGHT</h2>
    </div>
    <div className="trip-type">
      <button
        className={tripType === 'round-trip' ? 'active' : ''}
        onClick={() => setTripType('round-trip')}
      >
        Round trip
      </button>
      <button
        className={tripType === 'one-way' ? 'active' : ''}
        onClick={() => setTripType('one-way')}
      >
        One way
      </button>
    </div>
  </div>

  <div className="form-container">
  <div className="input-group">
    <div className="input-container input-container-left">
      <FaPlaneDeparture className="icon" />
      <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
    </div>
    <div className="input-container input-container-right">
      <FaPlaneArrival className="icon" />
      <input
              type="text"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
    </div>
  </div>
  <div className="input-group">
    <div className="input-container input-container-left">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        className="date-picker"
      />
      <FaCalendarAlt className="icon" />
    </div>
    <div className="input-container input-container-right">
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="dd/MM/yyyy"
        className="date-picker"
      />
      <FaCalendarAlt className="icon" />
    </div>
  </div>
</div>
      <button className="show-flights-button" onClick={handleSearch}>
        Show flights
      </button>
</div>

  );
};

export default BookYourFlight;
