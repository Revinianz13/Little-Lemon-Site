import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import NavigBar from './components/nav/Nav';
import Footer
from './components/footer/Footer';
import Reservations from './components/BookTable/Reservetions';
import Review from './components/Reviews/Reviews';

function App() {
  return (
    <>
    <NavigBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookTable" element={<Reservations />} />
        <Route path="/Reviews" element={<Review />} />
      </Routes>
      <Routes>
        
      </Routes>
    <Footer />
    </>
  );
}

export default App;