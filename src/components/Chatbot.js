import React, { useState } from 'react';
import '../css/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-btn" onClick={toggleChatbot}>
        <i className="fas fa-comments"></i> {/* Font Awesome icon */}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={toggleChatbot}>
              &times;
            </button>
          </div>
          <div className="chatbot-body">
            {/* You can integrate a chat service or add chat messages here */}
            <p>Hello! How can I assist you today?</p>
          </div>
          <div className="chatbot-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
