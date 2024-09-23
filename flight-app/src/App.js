import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFlightsPage from './pages/MyFlightsPage';
import 'react-datepicker/dist/react-datepicker.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-flights" element={<MyFlightsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
