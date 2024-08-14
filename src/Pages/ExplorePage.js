import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ExplorePage.css';
import HeaderWithToggle from '../components/HeaderWithToggle';

import artImage from '../image/artsex.jpeg';
import sportsImage from '../image/sportsex.jpeg';
import literatureImage from '../image/literatureex.webp';
import codingImage from '../image/codingex.jpeg';
import musicImage from '../image/musicex.webp';
import backgroundImage from '../image/background1.png'; // Import the background image
import surveyGif from '../image/survey.gif'; // Import the survey GIF

const clubs = [
  { name: 'Arts', image: artImage, description: 'Explore your creativity with our arts club.', path: '/arts-club' },
  { name: 'Sports', image: sportsImage, description: 'Join our sports club to stay active and fit.', path: '/sports-club' },
  { name: 'Literature', image: literatureImage, description: 'Dive into the world of books and writing with our literature club.', path: '/literature-club' },
  { name: 'Coding', image: codingImage, description: 'Enhance your programming skills in our coding club.', path: '/coding-club' },
  { name: 'Music', image: musicImage, description: 'Express yourself through music in our music club.', path: '/music-club' }
];

const ExplorePage = () => {
  const navigate = useNavigate();

  const handleSurveyClick = () => {
    navigate('/survey');
  };

  return (
    <div className="explore-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <HeaderWithToggle />
      <h1>CLUBS IN ACTION</h1>
      <div className="clubs-container">
        {clubs.map((club, index) => (
          <div className="club-card" key={index}>
            <div className="club-image">
              <img src={club.image} alt={`${club.name}`} />
            </div>
            <div className="club-info">
              <h2>{club.name}</h2>
              <p>{club.description}</p>
              <button className="view-btn" onClick={() => navigate(club.path)}>View</button>
            </div>
          </div>
        ))}
      </div>
      <div className="survey-container">
        <div className="survey-text">
          <p>Find your fit!</p>
        </div>
        <div className="survey-gif">
          <img src={surveyGif} alt="Survey GIF" />
        </div>
        <button className="survey-btn" onClick={handleSurveyClick}>Take Survey</button>
      </div>
    </div>
  );
};

export default ExplorePage;
