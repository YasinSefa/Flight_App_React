import React, { useState, useEffect } from 'react';

const MyFlightsPage = () => {
  const [myFlights, setMyFlights] = useState([]);

  useEffect(() => {
    const fetchMyFlights = async () => {
      try {
        const response = await fetch('/api/flights');
        const data = await response.json();
        setMyFlights(data);
      } catch (error) {
        console.error('Error fetching my flights:', error);
      }
    };

    fetchMyFlights();
  }, []);

  return (
    <div>
      <h1>My Flights</h1>
      <div className="my-flights-list">
        {myFlights.map(flight => (
          <div key={flight._id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departureTime}</p>
            <p>Arrival: {flight.arrivalTime}</p>
            <p>Price: ${flight.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFlightsPage;
