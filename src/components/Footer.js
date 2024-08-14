import React from 'react';
import '../css/Footer.css'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faPhoneAlt} /> +1234567890</p>
        <p><FontAwesomeIcon icon={faEnvelope} />  mosaic@gmail.com</p>
      </div>
      <div className="join-club">
        <p>JOIN THE CLUB RIZZ</p>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
