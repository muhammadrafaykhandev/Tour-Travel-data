import React from 'react';

export default function CeoMessage() {
  return (
    <section className="section-container ceo-section">
      <div className="ceo-card">
        
        {/* CEO Profile Side */}
        <div className="ceo-profile-side">
          <div className="ceo-image-wrapper">
            <img 
              src="/rafay.jpeg" 
              alt="Muhammad Rafay Ullah Khan Yousafzai" 
              className="ceo-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80";
              }}
            />
            <span className="ceo-verified-badge">✓ Verified CEO</span>
          </div>
          <div className="ceo-titles">
            <h3>Muhammad Rafay Ullah Khan Yousafzai</h3>
            <p className="ceo-role">Founder & Chief Executive Officer</p>
            <p className="ceo-location">📍 Multan & Islamabad, Pakistan</p>
          </div>
        </div>

        {/* CEO Message Side */}
        <div className="ceo-content-side">
          <span className="section-subtitle-tag">Leadership Vision</span>
          <h2 className="ceo-quote-title">
            "Redefining Northern Pakistan Tourism With World-Class Hospitality & Safety"
          </h2>

          <p className="ceo-text">
            Welcome to <strong>Rafay Khan Yousafzai Travels</strong>. Our vision was born out of a deep passion to showcase the unparalleled natural majesty of Pakistan—from the towering Karakoram peaks of Hunza to the serene alpine lakes of Skardu.
          </p>

          <p className="ceo-text">
            We don't just book tours; we craft lifetime memories with uncompromising safety standards, 5-star resort accommodations, and deeply authentic local cultural engagements.
          </p>

          {/* Core Values */}
          <div className="ceo-values-grid">
            <div className="ceo-value-item">
              <span>🛡️</span>
              <div>
                <strong>Uncompromised Safety</strong>
                <p>24/7 tracked mountain logistics</p>
              </div>
            </div>
            <div className="ceo-value-item">
              <span>💎</span>
              <div>
                <strong>Bespoke Luxury</strong>
                <p>Curated premium resorts & stays</p>
              </div>
            </div>
          </div>

          <div className="ceo-action-row">
            <a href="#contact" className="nav-cta" style={{ textDecoration: 'none' }}>
              Connect With CEO Office
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}