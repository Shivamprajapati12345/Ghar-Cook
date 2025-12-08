import React from "react";

 function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h2>Kahana Wala</h2>
            <p>Delicious South Indian food delivered to your home.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="/South">South Indian</a></li>
              <li><a href="/Cart">Cart</a></li>
              <li><a href="#">Checkout</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: support@kahanawala.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: India</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>📘</span>
              <span>📸</span>
              <span>▶️</span>
            </div>
          </div>

        </div>

        <p className="footer-bottom">© 2025 Kahana Wala. All Rights Reserved.</p>
      </footer>

      {/* Inline CSS */}
      <style>{`
        .footer {
          background: #222;
          color: #ddd;
          padding: -15px 20px;
          font-family: Arial, sans-serif;
          
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .footer-section h2,
        .footer-section h3 {
          color: #fff;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin: 6px 0;
        }

        .footer-section a {
          color: #ddd;
          text-decoration: none;
        }

        .footer-section a:hover {
          text-decoration: underline;
        }

        .social-icons span {
          font-size: 22px;
          margin-right: 10px;
          cursor: pointer;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 25px;
          font-size: 14px;
          color: #aaa;
          border-top: 1px solid #444;
          padding-top: 10px;
        }
      `}</style>
    </>
  );
}
export default Footer; 