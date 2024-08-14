// src/components/FAQSection.js

import React, { useState } from 'react';
import '../css/FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "How do I join a club?", answer: "To join a club, visit the club's page on our website and click the 'Join' button. You'll need to fill out a short form to complete your registration." },
    { question: "Can I create my own club?", answer: "Yes! We encourage students to start their own clubs. Please visit the 'Create a Club' section on our website for more details and the application form." },
    { question: "How are clubs managed?", answer: "Clubs are managed by elected student leaders and faculty advisors. Each club has its own management structure and regular meetings to ensure smooth operation." },
    { question: "What if I have issues with a club?", answer: "If you encounter any issues, please contact the club's advisor or reach out to our support team through the 'Contact Us' page on our website." },
    { question: "Are there any fees to join a club?", answer: "Most clubs do not have membership fees, but some may require a small contribution for events or activities. Check with the individual club for specific details." }
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleDropdown(index)}>
              {item.question}
              <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
