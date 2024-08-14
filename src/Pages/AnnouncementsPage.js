import React from 'react';
import HeaderWithToggle from '../components/HeaderWithToggle'; // Adjust the import path as needed
import '../css/AnnouncementsPage.css'; // Import the CSS file for styling
import Chatbot from '../components/Chatbot';

const announcements = [
  { date: '2024-07-28', time: '10:00 AM', content: 'New club meeting schedule released.' },
  { date: '2024-07-27', time: '2:00 PM', content: 'Don\'t forget to attend the coding workshop this weekend.' },
  { date: '2024-07-26', time: '4:30 PM', content: 'Literature club is hosting a book fair next month.' },
  // Add more announcements here
];

const AnnouncementsPage = () => {
  return (
    <div className="announcements-page">
      <HeaderWithToggle />
      <div className="announcements-content">
        <h1>Announcements</h1>
        <div className="announcements-list">
          {announcements.map((announcement, index) => (
            <div className="announcement-card" key={index}>
              <div className="announcement-header">
                <span className="announcement-date">{announcement.date}</span>
                <span className="announcement-time">{announcement.time}</span>
              </div>
              <p className="announcement-text">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default AnnouncementsPage;
