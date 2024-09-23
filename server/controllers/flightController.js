const Flight = require('../models/Flight');

// Tüm uçuşları listeleme
const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Uçuşları getirme hatası', error });
  }
};

// Uçuş kaydetme
const saveFlight = async (req, res) => {
  const {
    actualLandingTime,
    aircraftType,
    airlineCode,
    baggageClaim,
    codeshares,
    estimatedLandingTime,
    expectedTimeOnBelt,
    flightDirection,
    flightName,
    flightNumber,
    id,
    isOperationalFlight,
    lastUpdatedAt,
    mainFlight,
    prefixIATA,
    prefixICAO,
    publicFlightState,
    route,
    scheduleDate,
    scheduleDateTime,
    scheduleTime,
    schemaVersion,
    serviceType,
    terminal,
  } = req.body;

  const flight = new Flight({
    actualLandingTime,
    aircraftType,
    airlineCode,
    baggageClaim,
    codeshares,
    estimatedLandingTime,
    expectedTimeOnBelt,
    flightDirection,
    flightName,
    flightNumber,
    id,
    isOperationalFlight,
    lastUpdatedAt,
    mainFlight,
    prefixIATA,
    prefixICAO,
    publicFlightState,
    route,
    scheduleDate,
    scheduleDateTime,
    scheduleTime,
    schemaVersion,
    serviceType,
    terminal,
  });

  try {
    await flight.save();
    res.json({ message: 'Uçuş başarıyla kaydedildi' });
  } catch (error) {
    res.status(500).json({ message: 'Uçuş kaydetme hatası', error });
  }
};

module.exports = { getFlights, saveFlight };