import React, { useState } from 'react';

export default function BookingModal({ tour, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>✕</button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ fontSize: '48px' }}>🎉</span>
            <h3 style={{ fontSize: '24px', margin: '10px 0' }}>Booking Confirmed!</h3>
            <p style={{ color: '#64748b' }}>
              Thank you for choosing <strong>{tour.title}</strong>. We will contact you shortly!
            </p>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: '800' }}>Book Tour</h3>
            <p style={{ color: '#64748b', marginBottom: '20px', fontSize: '14px' }}>
              {tour.title} — <strong>${tour.price} / person</strong>
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700' }}>Full Name</label>
                <input type="text" className="form-input-field" placeholder="e.g. Rafay Khan" required />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700' }}>Email Address</label>
                <input type="email" className="form-input-field" placeholder="rafay@example.com" required />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700' }}>Travel Date</label>
                <input type="date" className="form-input-field" required />
              </div>
              <button type="submit" className="nav-cta" style={{ border: 'none', cursor: 'pointer', marginTop: '10px' }}>
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}