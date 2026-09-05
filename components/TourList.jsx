import React, { useState } from 'react';
import TourCard from './TourCard';

export default function TourList({ tours, onBook }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mountains', 'Cultural', 'Adventure'];

  const filteredTours = activeCategory === 'All'
    ? tours
    : tours.filter(t => t.category === activeCategory);

  return (
    <>
      <section id="destinations" className="section-container" style={{ paddingBottom: '20px' }}>
        <div className="section-header">
          <span className="section-subtitle-tag">Curated Expeditions</span>
          <h2 className="section-title">Popular Destinations & Valleys</h2>
        </div>
      </section>

      <section id="packages" className="section-container" style={{ paddingTop: '0' }}>
        {/* Category Filters */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="tour-grid">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onBook={onBook} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-grid" style={{ marginTop: '70px' }}>
          <div className="trust-card">
            <div className="trust-icon">💎</div>
            <h4>Best Price Guarantee</h4>
            <p>Premium luxury trips at guaranteed competitive rates.</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">🛡️</div>
            <h4>Safe & Insured Travel</h4>
            <p>24/7 dedicated local guide and emergency assistance.</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">⚡</div>
            <h4>Instant Confirmation</h4>
            <p>Seamless booking process with immediate trip confirmation.</p>
          </div>
        </div>
      </section>
    </>
  );
}