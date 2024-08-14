
import React from 'react';
import '../css/LandingPage.css';
import Header from './Header'; 
import Footer from './Footer'; 
import backgroundImage from '../image/background.jpeg'; 
import WhyJoinUsSection from './WhyJoinUsSection'; 
import FAQSection from './FAQSection'; 

import CheersSection from './CheersSection'; 
import Chatbot from './Chatbot';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
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
         
        </div>
      </div>
      <WhyJoinUsSection /> 
   
     
      <FAQSection />
      <CheersSection /> 
      <Footer />
      <Chatbot />
    </div>
  );
}

export default LandingPage;
