import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MyFlightCard from '../components/MyFlightCard';

const MyFlightsPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchMyFlights = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/flights');
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching my flights:', error);
      }
    };

    fetchMyFlights();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="flight-list">
      <h1>My Flights</h1>
        {flights.map(flight => (
          <MyFlightCard key={flight._id} flight={flight} /> 
        ))}
      </div>
    </div>
  );
};

export default MyFlightsPage;
