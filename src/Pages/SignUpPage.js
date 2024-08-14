
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUpPage.css';

const SignUpPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    const response = await fetch('http://localhost:8080/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        institution,
        password,
      }),
    });
  
    if (response.ok) {
      const data = await response.json();
      setIsAuthenticated(true);
      navigate('/signin');
    } else {
      alert('Signup failed');
    }
  };
  
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSignUp}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <div className="signin-link">
          <p>Already have an account?</p>
          <Link to="/signin">Sign In Here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;