import React from 'react';
import '../css/ThirdSectionLand.css';
import artsImage from '../image/arts.webp';
import sportsImage from '../image/sports.webp';
import codingImage from '../image/coding.webp';
import musicImage from '../image/music.webp';
import literatureImage from '../image/literature.webp';

const eventsData = [
  {
    category: "Literature",
    title: "Book Fair Extravaganza",
    date: "2024-08-15",
    description: "Join us for a day of literary magic! Meet authors, buy books, and enjoy readings.",
    image: literatureImage
  },
  {
    category: "Arts",
    title: "Creative Showcase Night",
    date: "2024-09-10",
    description: "Unleash your inner Picasso! Join us for an evening of art, music, and creativity.",
    image: artsImage
  },
  {
    category: "Sports",
    title: "Annual Championship Tournament",
    date: "2024-10-05",
    description: "Get ready to cheer! Join us for thrilling matches and epic showdowns.",
    image: sportsImage
  },
  {
    category: "Coding",
    title: "Hackathon Challenge",
    date: "2024-11-20",
    description: "Put your skills to the test! Join us for a 24-hour coding marathon.",
    image: codingImage
  },
  {
    category: "Music",
    title: "Jam Session",
    date: "2024-12-15",
    description: "Enjoy a day of live music and jam sessions with fellow musicians.",
    image: musicImage
  }
];

const ThirdSectionLand = () => {
  return (
    <section className="third-section-land">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.category} className="event-image"/>
            <div className="event-info">
              <h3>{event.category} Club</h3>
              <h4>{event.title}</h4>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdSectionLand;
