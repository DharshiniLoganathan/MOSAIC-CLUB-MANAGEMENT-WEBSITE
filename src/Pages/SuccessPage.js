import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Registered Successfully!</h1>
                <button className="home-button" onClick={handleGoHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default SuccessPage;
