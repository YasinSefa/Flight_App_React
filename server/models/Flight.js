const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  price: { type: Number, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;