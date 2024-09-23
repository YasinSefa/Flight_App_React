import React from 'react';
import { format, differenceInMinutes, addHours } from 'date-fns';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from 'react-icons/fa';

const MyFlightCard = ({ flight }) => {
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

  // Calculate flight duration if dates are valid
  const durationInMinutes = (isValidDate(adjustedArrivalDate) && isValidDate(departureDate))
    ? differenceInMinutes(adjustedArrivalDate, departureDate)
    : null;

  const hours = durationInMinutes !== null ? Math.floor(durationInMinutes / 60) : 'N/A';
  const minutes = durationInMinutes !== null ? durationInMinutes % 60 : 'N/A';
  const durationFormatted = durationInMinutes !== null ? `${hours}h ${minutes}m` : 'N/A';

  return (
    <div className="flight-card">
      
      <h4>
        {flight.publicFlightState?.flightStates || 'Unknown Flight'} - {flight.route?.destinations || 'Unknown Status'}
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
        <p>Airport: {flight.publicFlightState?.flightStates}</p>
      </div>
      <div className="duration-formatted">{durationFormatted} (Nonstop)</div>
      <div className="airport">
        <p>Airport: {flight.route?.destinations}</p>
      </div>
    </div>
    
    <div className="flight-info">
    <div className="flight-price">
      <p>Terminal: {flight.terminal}</p>
    </div>
  </div>

  <div className="round-trip">
    <p>AirlineCode: {flight.airlineCode}</p>
  </div>

  <button className="book-flight-button">PNR: {flight.flightName}</button>


    </div>
  );
};

export default MyFlightCard;
