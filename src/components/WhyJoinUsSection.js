// src/components/WhyJoinUsSection.js

import React from 'react';
import '../css/WhyJoinUsSection.css';
import whyJoinUsImage from '../image/why-join-us.jpeg'; // Import the image for the card

const WhyJoinUsSection = () => {
  return (
    <section className="why-join-us-section">
      <div className="card">
        <div className="card-content">
          <h2>Why Join Us?</h2>
          <p>At Mosaic, we believe in the power of community and creativity. Our clubs are not just groups; they are a family of like-minded individuals ready to explore, learn, and grow together!</p>
          <p>Whether you're a bookworm, an aspiring artist, a sports fanatic, or a coding wizard, we have a place for you. Dive into a world of opportunities, friendships, and unforgettable experiences!</p>
          <p>Join us today and transform your college life into an adventure filled with laughter, learning, and limitless possibilities!</p>
        </div>
        <div className="card-image">
          <img src={whyJoinUsImage} alt="Why Join Us" />
        </div>
      </div>
    </section>
  );
}

export default WhyJoinUsSection;
