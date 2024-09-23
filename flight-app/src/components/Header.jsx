import React, { useState } from 'react';
import { FaPlane, FaTag, FaCompass, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [bar, setBar] = useState(false);

  return (
    <div className={`container ${bar ? 'open' : ''}`}>
      <div className="logo">
        <span className="plane_icon"><FaPlane /></span>
        <h1>PLANE SCAPE</h1>
      </div>
      <div className={`nav ${bar ? 'open' : ''}`}>
        <span><FaTag /> <Link to="/">Main</Link></span>
        <span><FaCompass /> <Link to="/my-flights">My Flights</Link></span>
        <span><FaUser /> <a href="#profile">Sefa Aksoy</a></span>
      </div>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;