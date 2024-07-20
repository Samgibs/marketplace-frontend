import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Discounts</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sell</h4>
          <ul>
            <li><a href="#">Start Selling</a></li>
            <li><a href="#">Seller Guide</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Seller Protection</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Company Info</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help & Contact</h4>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Tools & Resources</h4>
          <ul>
            <li><a href="#">Developer Tools</a></li>
            <li><a href="#">API Documentation</a></li>
            <li><a href="#">Security Center</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Marketplace Inc. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Accessibility</a>
          <a href="#">User Agreement</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
