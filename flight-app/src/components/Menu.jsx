import React from 'react';
import Card from './Card'; // Card bileşenini içe aktar
import { FaCar, FaHotel, FaSuitcase } from 'react-icons/fa'; // Örnek ikonlar
import rentalCar from "../assets/rentalCar.jpg";
import hotels from "../assets/hotels.jpg";
import tarvelPac from "../assets/tarvelPac.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <Card 
        imageSrc={rentalCar} 
        icon={<FaCar />} 
        text="Car Rentals" 
      />
      <Card 
        imageSrc={hotels}
        icon={<FaHotel />} 
        text="Hotels" 
      />
      <Card 
        imageSrc={tarvelPac}
        icon={<FaSuitcase />} 
        text="Travel Packages" 
      />
    </div>
  );
};

export default Menu;