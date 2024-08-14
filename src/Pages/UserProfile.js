import React, { useState, useEffect } from 'react';
import HeaderWithToggle from '../components/HeaderWithToggle';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import '../css/UserProfile.css';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    clubName: '',
    degree: '',
    dob: '',
    gender: '',
    address: '',
    profilePhoto: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const userEmail = 'user@example.com'; // Replace with actual logged-in user's email

  useEffect(() => {
    axios.get('http://localhost:8080/api/userprofile/get', { params: { email: userEmail } })
      .then(response => {
        if (response.data) {
          setProfile(response.data);
          if (response.data.profilePhoto) {
            setProfilePhoto(URL.createObjectURL(new Blob([response.data.profilePhoto])));
          }
        }
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, [userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePhoto: file,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('phone', profile.phone);
    formData.append('institution', profile.institution);
    formData.append('clubName', profile.clubName);
    formData.append('degree', profile.degree);
    formData.append('dob', profile.dob);
    formData.append('gender', profile.gender);
    formData.append('address', profile.address);
    if (profile.profilePhoto) {
      formData.append('profilePhoto', profile.profilePhoto);
    }

    axios.post('http://localhost:8080/api/userprofile/save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setProfile(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error('Error saving profile:', error));
  };

  return (
    <div className="user-profile">
      <HeaderWithToggle />
      <div className="profile-content">
        <div className="profile-card">
          <div className="user-info">
            <img
              src={profilePhoto || 'defaultProfilePhotoUrl'} // Placeholder URL
              alt="User"
              className="user-image"
            />
            <div className="user-details">
              <div className="name-container">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="name-input"
                  />
                ) : (
                  <h1>{profile.name}</h1>
                )}
                <p>{profile.clubName}</p>
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="section-header">
              <h2>User Details</h2>
              {!isEditing && (
                <FaEdit className="edit-icon" onClick={handleEditClick} />
              )}
            </div>
            <div className="details-form">
              {isEditing ? (
                <>
                  <div className="form-field">
                    <label>Profile Photo:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="file-input"
                    />
                  </div>
                  <div className="form-field">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone Number:</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Institution:</label>
                    <input
                      type="text"
                      name="institution"
                      value={profile.institution}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Club Name:</label>
                    <input
                      type="text"
                      name="clubName"
                      value={profile.clubName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Degree:</label>
                    <input
                      type="text"
                      name="degree"
                      value={profile.degree}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      name="dob"
                      value={profile.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Gender:</label>
                    <select
                      name="gender"
                      value={profile.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Address:</label>
                    <textarea
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-actions">
                    <button className="save-btn" onClick={handleSaveClick}>
                      <FaSave className="icon" /> Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancelClick}>
                      <FaTimes className="icon" /> Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>Email: {profile.email}</p>
                  <p>Phone Number: {profile.phone}</p>
                  <p>Institution: {profile.institution}</p>
                  <p>Club Name: {profile.clubName}</p>
                  <p>Degree: {profile.degree}</p>
                  <p>Date of Birth: {profile.dob}</p>
                  <p>Gender: {profile.gender}</p>
                  <p>Address: {profile.address}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
