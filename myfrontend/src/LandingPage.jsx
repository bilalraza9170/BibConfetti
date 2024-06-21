import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import backgroundImage from './background.png'; // Adjust the path if the image is in a subdirectory

function LandingPage() {
    let navigate = useNavigate();
  
    const handleGetStartedClick = () => {
      navigate('/login'); // This should match the path you've defined for your Login component
    };
  
    
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="landing-container" style={backgroundStyle}>
      <h1>BibConfetti</h1>
      <h2>Welcome to Academic Research Hub</h2>
      <p>Your comprehensive conference management toolkit...</p>
      <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
}

export default LandingPage;