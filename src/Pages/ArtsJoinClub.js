import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ArtsJoinClub = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    department: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/artsjoin-club', formData)
      .then(response => {
        if (response.data.success) {
          setShowSuccess(true);
          setErrorMessage('');
          setTimeout(() => {
            navigate('/');
          }, 3000); // Redirect after 3 seconds
        } else {
          setErrorMessage('Failed to join club.');
        }
      })
      .catch(error => {
        setErrorMessage('Error submitting form.');
        console.error('Error:', error);
      });
  };

  

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Join Arts Club</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {Object.keys(formData).map((key) => (
          <div key={key} style={styles.formGroup}>
            <label htmlFor={key} style={styles.label}>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </label>
            <input
              type={key === 'email' ? 'email' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        ))}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {showSuccess && (
        <div style={styles.successCard}>
          <h2 style={styles.successHeader}>Registered Successfully!</h2>
        </div>
      )}
      {errorMessage && (
        <div style={styles.errorCard}>
          <h2 style={styles.errorHeader}>{errorMessage}</h2>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
        fontFamily: 'Roboto, sans-serif',
        position: 'relative'
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    formGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 600,
        color: '#333'
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        boxSizing: 'border-box',
        fontSize: '16px',
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 0.8)' // Semi-transparent background
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '15px',
        fontSize: '18px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    },
    successCard: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        zIndex: 1000,
        width: '300px'
    },
    successHeader: {
        margin: 0,
        color: '#28a745',
        fontSize: '18px'
    },
    errorCard: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        zIndex: 1000,
        width: '300px'
    },
    errorHeader: {
        margin: 0,
        color: '#dc3545',
        fontSize: '18px'
    }
};

export default ArtsJoinClub;
