// src/pages/FrontPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FrontPage.css'; // Import your CSS file for styling
import HeaderWithToggle from '../components/HeaderWithToggle';
import Footer from '../components/Footer';
import backgroundImage from '../image/background.jpeg';
import WhyJoinUsSection from '../components/WhyJoinUsSection';
import FAQSection from '../components/FAQSection';
// import ThirdSectionLand from '../components/ThirdSectionLand';
import CheersSection from '../components/CheersSection';
import Chatbot from '../components/Chatbot';

const FrontPage = () => {
  return (
    <div className="landing-page">
      <HeaderWithToggle />
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-text">
          <h1>
            <span>M</span>
            <span>O</span>
            <span>S</span>
            <span>A</span>
            <span>I</span>
            <span>C</span>
          </h1>
          <p>Unleash Your Passion with Our Vibrant College Clubs!</p>
          {/* Removed the auth-buttons */}
        </div>
      </div>
      <WhyJoinUsSection />
     {/* <ThirdSectionLand/> */}
      <FAQSection />
      <CheersSection />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default FrontPage;
