import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ParticipationForm.css'; // Import the CSS file for styling

const ParticipationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        club: '',
        requirements: '',
        emergencyContact: '',
        dietaryRestrictions: '',
        tshirtSize: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/participation-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted:', formData);
                navigate('/success');
            } else {
                console.error('Submission failed');
                // Handle the error response here
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="form-container">
            <h1>Participation Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="institution">Institution/Organization</label>
                    <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="club">Club/Activity</label>
                    <input
                        type="text"
                        id="club"
                        name="club"
                        value={formData.club}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="requirements">Special Requirements</label>
                    <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                    <input
                        type="text"
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tshirtSize">T-shirt Size</label>
                    <select
                        id="tshirtSize"
                        name="tshirtSize"
                        value={formData.tshirtSize}
                        onChange={handleChange}
                    >
                        <option value="">Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ParticipationForm;
