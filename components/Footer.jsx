import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Rafay Khan Yousafzai Travels</h2>
          <p>
            Premier licensed travel management agency delivering high-end expeditions across Northern Pakistan.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Featured Packages</a></li>
            <li><a href="#contact">Contact Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Top Expeditions</h4>
          <ul>
            <li><a href="#packages">Hunza Valley</a></li>
            <li><a href="#packages">Skardu & Deosai</a></li>
            <li><a href="#packages">Swat & Kalam</a></li>
            <li><a href="#packages">Fairy Meadows</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Head Office</h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Yousafzai Travel Tower,<br />
            Gulgasht, Multan & Blue Area, Islamabad.<br />
            <strong>Call:</strong> +92 300 1234567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Rafay Khan Yousafzai Travels. All rights reserved.</p>
        <p style={{ color: '#64748b' }}>Designed with React & Vite</p>
      </div>
    </footer>
  );
}