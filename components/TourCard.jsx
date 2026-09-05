import React from 'react';

export default function TourCard({ tour, onBook }) {
  return (
    <div className="tour-card">
      <div className="card-img-wrapper">
        <img src={tour.image} alt={tour.title} className="card-img" />
        <span className="card-badge">{tour.badge}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{tour.title}</h3>
        <p className="card-desc">{tour.description}</p>
        
        <div className="card-perks">
          <span>🏨 Hotel Stay</span>
          <span>🚌 Transport</span>
          <span>🍳 Breakfast</span>
        </div>

        <div className="card-meta">
          <span>⏱️ {tour.duration}</span>
          <span>{tour.rating}</span>
        </div>

        <div className="card-footer">
          <div className="card-price">
            ${tour.price} <span>/ person</span>
          </div>
          <button className="btn-book" onClick={() => onBook(tour)}>
            Book Tour
          </button>
        </div>
      </div>
    </div>
  );
}