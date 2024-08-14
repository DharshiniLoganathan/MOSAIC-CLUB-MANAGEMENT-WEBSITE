// src/components/CheersSection.js

import React from 'react';
import '../css/CheersSection.css';
import emilyImage from '../image/emily.jpeg';
import michaelImage from '../image/michael.jpeg';
import sarahImage from '../image/sarah.jpeg';
import davidImage from '../image/david.jpeg';
import jessicaImage from '../image/jessica.jpeg';
import chrisImage from '../image/chris.jpeg';

const reviewsData = [
  {
    name: "Emily Johnson",
    review: "I love how easy it is to manage events!",
    image: emilyImage
  },
  {
    name: "Michael Smith",
    review: "The calendar feature keeps me organized and on track!",
    image: michaelImage
  },
  {
    name: "Sarah Lee",
    review: "Best decision ever to join this platform!",
    image: sarahImage
  },
  {
    name: "David Brown",
    review: "The chatbot is super helpful and always available!",
    image: davidImage
  },
  {
    name: "Jessica Taylor",
    review: "I can't imagine managing my club without it!",
    image: jessicaImage
  },
  {
    name: "Chris Evans",
    review: "Cheers! This club management system is a game changer!",
    image: chrisImage
  }
];

const CheersSection = () => {
  return (
    <section className="cheers-section">
      <h2>Cheers!</h2>
      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-image"/>
            <div className="review-info">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CheersSection;
