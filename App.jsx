import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CeoMessage from './components/CeoMessage';
import TourList from './components/TourList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { toursData } from './toursData';
import './components/App.css';

export default function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CeoMessage />
      <TourList tours={toursData} onBook={(tour) => setSelectedTour(tour)} />
      <Contact />
      <Footer />

      {selectedTour && (
        <BookingModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
      )}
    </div>
  );
}