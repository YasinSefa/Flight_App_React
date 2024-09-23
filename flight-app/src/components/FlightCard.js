import React from 'react';
import { format, differenceInMinutes, addHours } from 'date-fns';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from 'react-icons/fa';
import axios from 'axios';

const FlightCard = ({ flight }) => {
  // Validate the flight data before using it
  const departureDate = flight.scheduleDateTime ? new Date(flight.scheduleDateTime) : null;
  const arrivalDate = flight.actualLandingTime ? new Date(flight.actualLandingTime) : null;

  // Check if the dates are valid
  const isValidDate = (date) => date instanceof Date && !isNaN(date);

  // Add 2 hours to the arrival date if it exists and is valid
  const adjustedArrivalDate = isValidDate(arrivalDate) ? addHours(arrivalDate, 2) : null;

  // Format date and time only if valid
  const departureTimeFormatted = isValidDate(departureDate) ? format(departureDate, 'h:mm a') : 'N/A';
  const adjustedArrivalTimeFormatted = isValidDate(adjustedArrivalDate) ? format(adjustedArrivalDate, 'h:mm a') : 'N/A';

  // Format date only if valid
  const departureDateFormatted = isValidDate(departureDate) ? format(departureDate, 'yyyy-MM-dd') : 'N/A';
  const arrivalDateFormatted = isValidDate(arrivalDate) ? format(arrivalDate, 'yyyy-MM-dd') : 'N/A';

  // Calculate flight duration if dates are valid
  const durationInMinutes = (isValidDate(adjustedArrivalDate) && isValidDate(departureDate))
    ? differenceInMinutes(adjustedArrivalDate, departureDate)
    : null;

  const hours = durationInMinutes !== null ? Math.floor(durationInMinutes / 60) : 'N/A';
  const minutes = durationInMinutes !== null ? durationInMinutes % 60 : 'N/A';
  const durationFormatted = durationInMinutes !== null ? `${hours}h ${minutes}m` : 'N/A';

  // Assume this gives the destination airport code
  const arrivalAirport = flight.route?.destinations?.[0] || 'N/A';

    // Function to handle booking a flight
    const bookFlight = async () => {
      const flightData = {
        actualLandingTime: flight.actualLandingTime || 'N/A',
        aircraftType: {
          iataMain: flight.aircraftType?.iataMain || 'N/A',
          iataSub: flight.aircraftType?.iataSub || 'N/A',
        },
        airlineCode: flight.airlineCode || 'N/A',
        baggageClaim: {
          belts: flight.baggageClaim?.belts?.[0] || 'N/A',
        },
        codeshares: {
          codeshares: flight.codeshares?.codeshares?.[0] || 'N/A',
        },
        estimatedLandingTime: flight.estimatedLandingTime || 'N/A',
        expectedTimeOnBelt: flight.expectedTimeOnBelt || 'N/A',
        flightDirection: flight.flightDirection || 'N/A',
        flightName: flight.flightName || 'N/A',
        flightNumber: flight.flightNumber || 'N/A',
        id: flight.id || 'N/A',
        isOperationalFlight: flight.isOperationalFlight || false,
        lastUpdatedAt: flight.lastUpdatedAt || 'N/A',
        mainFlight: flight.mainFlight || 'N/A',
        prefixIATA: flight.prefixIATA || 'N/A',
        prefixICAO: flight.prefixICAO || 'N/A',
        publicFlightState: {
          flightStates: flight.publicFlightState?.flightStates?.[0] || 'N/A',
        },
        route: {
          destinations: flight.route?.destinations?.[0] || 'N/A',
          eu: flight.route?.eu || 'N/A',
          visa: flight.route?.visa || false,
        },
        scheduleDate: flight.scheduleDate || 'N/A',
        scheduleDateTime: flight.scheduleDateTime || 'N/A',
        scheduleTime: flight.scheduleTime || 'N/A',
        schemaVersion: flight.schemaVersion || 'N/A',
        serviceType: flight.serviceType || 'N/A',
        terminal: flight.terminal || 'N/A',

      };
  
      console.log(flightData)
      try {
        const response = await axios.post('http://localhost:5000/api/flights', flightData);
        alert('Flight booked successfully!');
      } catch (error) {
        console.error('Error booking flight:', error);
        alert('Failed to book flight.');
      }
    };
  return (
    <div className="flight-card">
      
      <h4>
        {flight.publicFlightState?.flightStates?.[0] || 'Unknown Flight'} - {flight.route?.destinations?.[0] || 'Unknown Status'}
      </h4>
    <div className="flight-info">
      <div className="departure">
        <FaPlaneDeparture className="icon" />
        <p>Departure</p>
      </div>
      <div className="arrival">
        <FaPlaneArrival className="icon" />
        <p>Arrival</p>
      </div>
    </div>

    <div className="flight-info times"> 
      <div className="departure-time">
        <p>{departureTimeFormatted}</p>
      </div>
      <div className="line"></div> 
      <div className="plane-icon">
        <FaPlane className="icon" />
      </div>
      <div className="line"></div> 
      <div className="arrival-time">
        <p>{adjustedArrivalTimeFormatted}</p> 
      </div>
    </div>

    <div className="flight-info">
      <div className="airport">
        <p>Airport: {flight.publicFlightState?.flightStates?.[0]}</p>
      </div>
      <div className="duration-formatted">{durationFormatted} (Nonstop)</div>
      <div className="airport">
        <p>Airport: {flight.route?.destinations?.[0]}</p>
      </div>
    </div>
    
    <div className="flight-info">
    <div className="flight-price">
      <p>Price: {flight.flightNumber} TL</p>
    </div>
  </div>

  <div className="round-trip">
    <p>Round Trip</p>
  </div>

  <button className="book-flight-button" onClick={bookFlight}>Book Flight</button>


    </div>
  );
};

export default FlightCard;
