import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignInPage.css';

const SignInPage = ({ setIsAuthenticated }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleUserSignIn = async (e) => {
    e.preventDefault();
    if (userEmail && userPassword) {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });

      if (response.ok) {
        const isAuthenticated = await response.json();
        if (isAuthenticated) {
          setIsAuthenticated(true, false);
          navigate('/frontpage');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('Sign-in failed');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleAdminSignIn = async (e) => {
    e.preventDefault();
    if (adminEmail && adminPassword) {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
        }),
      });

      if (response.ok) {
        const isAuthenticated = await response.json();
        if (isAuthenticated) {
          setIsAuthenticated(true, true);
          navigate('/admin');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('Sign-in failed');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-form-wrapper">
          <div className="signin-header">
            <button
              className={`signin-toggle ${!isAdmin ? 'active' : ''}`}
              onClick={() => setIsAdmin(false)}
            >
              User
            </button>
            <button
              className={`signin-toggle ${isAdmin ? 'active' : ''}`}
              onClick={() => setIsAdmin(true)}
            >
              Admin
            </button>
          </div>
          {!isAdmin ? (
            <>
              <form className="signin-form" onSubmit={handleUserSignIn}>
                <label htmlFor="user-email">Email:</label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
                <label htmlFor="user-password">Password:</label>
                <input
                  type="password"
                  id="user-password"
                  name="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
                <button type="submit">Sign In</button>
              </form>
              <div className="signup-link">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up Here</Link>
              </div>
            </>
          ) : (
            <form className="signin-form" onSubmit={handleAdminSignIn}>
              <label htmlFor="admin-email">Email:</label>
              <input
                type="email"
                id="admin-email"
                name="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
              />
              <label htmlFor="admin-password">Password:</label>
              <input
                type="password"
                id="admin-password"
                name="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
