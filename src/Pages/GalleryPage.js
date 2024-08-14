import React from 'react';
import HeaderWithToggle from '../components/HeaderWithToggle'; // Import HeaderWithToggle
import '../css/GalleryPage.css'; // Import the CSS file for styling

// Import the images (Make sure the paths to the images are correct)
import eventImage1 from '../image/artevent.jpeg';
import eventImage2 from '../image/sportsevent.jpg';
import eventImage3 from '../image/codingevent.jpg';
import Chatbot from '../components/Chatbot';



const events = [
  { id: 1, title: 'Art Gala: A Night of Creative Expressions', description: 'Watch artists create masterpieces in real-time.', image: eventImage1 },
  { id: 2, title: 'Annual Sports Fest: Champions of Tomorrow', description: ' Watch top teams compete for the championship title.', image: eventImage2 },
  { id: 3, title: 'CodeFest : Innovation and Creativity in Tech', description: 'Collaborate with fellow coders to solve real-world problems and compete for prizes.', image: eventImage3 },
];

const GalleryPage = () => {
  return (
    <>
      <HeaderWithToggle /> {/* Add HeaderWithToggle */}
      <div className="gallery-page">
        <h1>Gallery</h1>
        <div className="gallery-content">
          {events.map(event => (
            <div key={event.id} className="gallery-card">
              <div className="gallery-image-container">
                <img src={event.image} alt={event.title} className="gallery-image" />
              </div>
              <div className="gallery-details">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
       
        <Chatbot/>
      </div>
    </>
  );
};

export default GalleryPage;
