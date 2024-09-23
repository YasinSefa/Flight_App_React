const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const flightRoutes = require('./routes/flightRoutes');
const cors = require('cors');

dotenv.config();        // .env dosyasını yükler
connectDB();            // MongoDB bağlantısını başlatır

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
  
app.use(cors(corsOptions));
  
app.use(express.json()); // Gelen JSON verilerini çözümlemek için

// Rotaları kullan
app.use('/api', flightRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} numaralı portta çalışıyor`));