import React, { useState } from 'react';
import HeaderWithToggle from '../components/HeaderWithToggle'; // Adjust the import path as needed
import '../css/BlogPage.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../image/bgblog.webp'; // Import the background image
import axios from 'axios';

const BlogPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      title: "The Enchanted Evening of Poetry",
      content: "The Literature Club's Poetry Night captivated attendees with heartfelt verses and inspiring recitations. Members shared everything from whimsical haikus to poignant sonnets, creating an atmosphere of camaraderie and creative inspiration. The event celebrated the beauty of the written word and showcased the club's literary talents.",
      author: "Nikki",
      club: "Literature Club"
    },
    {
      title: "A Symphony of Talent",
      content: "The Music Club's Open Mic Night was a resounding success, featuring soulful performances that ranged from classical pieces to modern hits. Talented musicians and vocalists captivated the audience, creating an unforgettable evening of melody and harmony.",
      author: "Rose",
      club: "Music Club"
    },
    {
      title: "The Vibrant Palette",
      content: "The Arts Club's Art Showcase dazzled visitors with a stunning array of paintings, sculptures, and digital art. Creative expressions in various mediums were displayed, each piece telling a unique story. The event highlighted the club's commitment to encouraging artistic exploration and celebrating diverse talents.",
      author: "Jennie",
      club: "Arts Club"
    },
    {
      title: "CodeFest: Innovation in Action",
      content: "The Coding Club's CodeFest brought together programming enthusiasts for a thrilling day of coding challenges and collaborative projects. Participants showcased their problem-solving skills and innovative ideas, working together to create impressive software solutions.",
      author: "Lisa",
      club: "Coding Club"
    }
  ]);

  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: '',
    club: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

 

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8080/api/blog', newBlog)
    .then(response => {
      setBlogs([response.data, ...blogs]);
      setNewBlog({ title: '', content: '', author: '', club: '' });
      setShowForm(false);
    })
    .catch(error => {
      console.error("There was an error creating the blog!", error);
    });
};


  return (
    <div className="blog-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <HeaderWithToggle />
      <div className="blog-content">
        <h1>BLOG</h1>
        
        <div className="blog-card main-blog-card">
          <h2>{blogs[0].title}</h2>
          <p>{blogs[0].content}</p>
          <div className="blog-author">
            <p>by {blogs[0].author} | {blogs[0].club}</p>
          </div>
        </div>

        <h2>Recent Posts</h2>
        <div className="recent-posts">
          {blogs.slice(1).map((blog, index) => (
            <div className="blog-card" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div className="blog-author">
                <p>by {blog.author} | {blog.club}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="write-blog-btn" onClick={() => setShowForm(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>

        {showForm && (
          <div className="blog-form-modal">
            <div className="blog-form">
              <h2>Write a New Blog</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Title:
                  <input type="text" name="title" value={newBlog.title} onChange={handleChange} required />
                </label>
                <label>
                  Content:
                  <textarea name="content" value={newBlog.content} onChange={handleChange} required></textarea>
                </label>
                <label>
                  Author:
                  <input type="text" name="author" value={newBlog.author} onChange={handleChange} required />
                </label>
                <label>
                  Club:
                  <input type="text" name="club" value={newBlog.club} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
