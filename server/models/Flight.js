const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  actualLandingTime: { type: String, required: false },
  aircraftType: {
    iataMain: { type: String, required: false },
    iataSub: { type: String, required: false },
  },
  airlineCode: { type: String, required: false },
  baggageClaim: {
    belts: { type: String, required: false },
  },
  codeshares: {
    codeshares: { type: String, required: false },
  },
  estimatedLandingTime: { type: String, required: false },
  expectedTimeOnBelt: { type: String, required: false },
  flightDirection: { type: String, required: false },
  flightName: { type: String, required: false },
  flightNumber: { type: String, required: true }, // Önemli uçuş bilgisi, required olabilir
  id: { type: String, required: true },
  isOperationalFlight: { type: Boolean, required: false },
  lastUpdatedAt: { type: String, required: false },
  mainFlight: { type: String, required: false },
  prefixIATA: { type: String, required: false },
  prefixICAO: { type: String, required: false },
  publicFlightState: {
    flightStates: { type: String, required: false },
  },
  route: {
    destinations: { type: String, required: false },
    eu: { type: String, required: false },
    visa: { type: Boolean, required: false },
  },
  scheduleDate: { type: String, required: false },
  scheduleDateTime: { type: String, required: false },
  scheduleTime: { type: String, required: false },
  schemaVersion: { type: String, required: false },
  serviceType: { type: String, required: false },
  terminal: { type: String, required: false },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;