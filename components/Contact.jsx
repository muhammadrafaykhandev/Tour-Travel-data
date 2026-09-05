import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-subtitle-tag">Get In Touch</span>
        <h2 className="section-title">Contact Rafay Khan Yousafzai Travels</h2>
      </div>

      <div className="contact-grid">
        <div>
          <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Let's Plan Your Journey</h3>
          
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <strong>Head Office</strong>
              <p style={{ color: '#64748b', fontSize: '14px' }}>Multan & Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <strong>Direct Call / WhatsApp</strong>
              <p style={{ color: '#64748b', fontSize: '14px' }}>+92 300 1234567</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div>
              <strong>Email Support</strong>
              <p style={{ color: '#64748b', fontSize: '14px' }}>info@yousafzaitravels.com</p>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ background: '#ecfdf5', color: '#047857', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
              ✅ Thank you! Your message has been sent successfully. Our team will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Your Name" required className="form-input-field" />
              <input type="email" placeholder="Your Email Address" required className="form-input-field" />
              <textarea placeholder="Your Query / Preferred Destination" rows="4" required className="form-input-field"></textarea>
              <button type="submit" className="nav-cta" style={{ border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}