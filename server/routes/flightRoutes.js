const express = require('express');
const { getFlights, saveFlight } = require('../controllers/flightController');
const router = express.Router();

router.get('/flights', getFlights);  // GET istekleri uçuşları listeler
router.post('/flights', saveFlight); // POST istekleri yeni uçuş ekler

module.exports = router;