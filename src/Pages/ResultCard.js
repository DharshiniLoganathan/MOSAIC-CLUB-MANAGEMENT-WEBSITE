import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ResultCard.css';

const ResultCard = ({ club }) => {
  return (
    <div className="result-card">
      <h2>We recommend you to join the {club}</h2>
      <Link to="/explore" className="explore-button">Explore Clubs</Link>
    </div>
  );
};

export default ResultCard;
