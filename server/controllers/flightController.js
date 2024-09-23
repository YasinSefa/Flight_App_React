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
  const { airline, departureTime, arrivalTime, price, origin, destination } = req.body;

  const flight = new Flight({
    airline,
    departureTime,
    arrivalTime,
    price,
    origin,
    destination,
  });

  try {
    await flight.save();
    res.json({ message: 'Uçuş başarıyla kaydedildi' });
  } catch (error) {
    res.status(500).json({ message: 'Uçuş kaydetme hatası', error });
  }
};

module.exports = { getFlights, saveFlight };