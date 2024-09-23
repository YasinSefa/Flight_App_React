const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Seçenekleri çıkardık
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    process.exit(1); // Bağlantı başarısız olursa uygulamayı durdur
  }
};


module.exports = connectDB;