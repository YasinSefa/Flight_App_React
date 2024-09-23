import React, { useState, useEffect } from 'react';
import FlightCard from './FlightCard';
import { getFlights } from '../services/FlightService';

const FlightsList = ({ filters }) => {
  const [flights, setFlights] = useState([]); // All flights data
  const [filteredFlights, setFilteredFlights] = useState([]); // Filtered flights
  const [isFilterApplied, setIsFilterApplied] = useState(false); // Whether filters are applied

  // Fetch all flights once when the component mounts
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await getFlights();
        setFlights(data);
        setFilteredFlights(data); // By default, show all flights
      } catch (error) {
        console.log('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  // Apply filters when they are updated
  useEffect(() => {
    if (filters) {
      const {startDate, endDate, departure, arrival } = filters;

      const filtered = flights.filter(flight => {
        const flightDate = new Date(flight.scheduleDate);
        const matchesDate = !startDate || (flightDate >= startDate && flightDate <= (endDate || startDate));
        const matchesDeparture = !departure || flight.publicFlightState?.flightStates?.[0]?.toLowerCase().includes(departure.toLowerCase());
        const matchesArrival = !arrival || flight.route?.destinations?.[0]?.toLowerCase().includes(arrival.toLowerCase());

        console.log(matchesDate,"ABC")
        return matchesDate && matchesDeparture && matchesArrival;
      });



      setFilteredFlights(filtered);
      setIsFilterApplied(true); // Mark filters as applied
    }
  }, [filters, flights]);

  return (
    <div className="flights-list">
      {/* Conditionally render filtered or all flights */}
      {isFilterApplied ? (
        filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <p>No flights available after applying filters.</p>
        )
      ) : (
        flights.length > 0 ? (
          flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <p>No flights available.</p>
        )
      )}
    </div>
  );
};

export default FlightsList;