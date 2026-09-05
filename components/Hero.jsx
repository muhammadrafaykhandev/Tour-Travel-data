import React from 'react';

export default function Hero() {
  return (
    <header id="home" className="hero-wrapper">
      <div className="hero-grid">
        
        {/* Left Column: Heading & Search */}
        <div>
          <div className="hero-badge">
            <span>✨</span> #1 Luxury Tour Agency in Pakistan
          </div>

          <h1 className="hero-title">
            Explore Pakistan's <span>Breathtaking Landscapes</span>
          </h1>

          <p className="hero-subtitle">
            Handcrafted luxury expeditions, resort stays, and custom tour packages tailored across Hunza, Skardu, Swat, and Northern Valleys.
          </p>

          {/* Clean Search Card */}
          <div className="hero-search-card">
            <div className="search-item">
              <label>Destination</label>
              <input type="text" placeholder="Hunza, Skardu..." />
            </div>
            <div className="search-item">
              <label>Travel Date</label>
              <input type="date" />
            </div>
            <div className="search-item">
              <label>Travelers</label>
              <select>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>Family (4+)</option>
              </select>
            </div>
            <a href="#packages" className="btn-hero-search">
              Find Packages
            </a>
          </div>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-group">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" className="avatar-img" alt="user1" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" className="avatar-img" alt="user2" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" className="avatar-img" alt="user3" />
            </div>
            <div className="social-proof-text">
              <strong>⭐ 4.9/5 Rating</strong> — Trusted by 10,000+ Happy Travelers
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="hero-visual-card">
          <img 
            src="/hunza.jpg" 
            alt="Hunza Valley" 
            className="hero-main-img"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="hero-card-overlay">
            <div className="overlay-info">
              <h4>Hunza Valley Expedition</h4>
              <p>📍 Gilgit-Baltistan • 7 Days Tour</p>
            </div>
            <div className="overlay-price">
              $450 <span>/person</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}