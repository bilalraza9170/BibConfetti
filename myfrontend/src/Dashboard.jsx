import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for getting current route
import { FaSignOutAlt, FaUserCircle, FaClipboardList, FaSearch } from 'react-icons/fa';
import './Dashboard.css';

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search publication"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};

const ConferenceDetails = () => {
  return (
    <div>
      {/* Your ConferenceDetails content goes here */}
      <h2>Conference Details</h2>
    </div>
  );
};

const Dashboard = ({ upcomingDeadlines, recentNotifications, submissionStatus, onLogout }) => {
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook for getting current route
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Placeholder for search functionality
  };

  // Function to handle navigation to the new form
  const handleNewSubmission = () => {
    navigate('/new-form'); // Corrected to match the route path for NewFormComponent
  };

  // Function to handle navigation to the conference detail page
  const handleConferences = () => {
    navigate('/conference-details');
  };

  // Inside your Dashboard component
 const handleWithdrawPublication = () => {
  navigate('/withdraw');
  };
  const handleSubmissions = () => {
    navigate('/submissions'); // Function to navigate to the submissions page
  }
  const handleReviews = () => {
    navigate('/reviews'); // Adjust the route as necessary
  };
  const handleChat = () => {
    navigate('/chatbot'); // Adjust the route to match your chatbot's route
  };


  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          bibConfetti <FaClipboardList className="logo-icon" />
        </div>
        <ul className="menu">
          <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`} onClick={handleConferences}><FaSearch className="icon" /> Dashboard</li>
          <li className={`menu-item ${location.pathname === '/conference-details' ? 'active' : ''}`} onClick={handleConferences}><FaClipboardList className="icon" /> Conferences</li>

  
          <li className={`menu-item ${location.pathname === '/submissions' ? 'active' : ''}`} onClick={handleSubmissions}><FaUserCircle className="icon" /> List of Submissions</li>
          <li className="menu-item" onClick={handleChat}><FaClipboardList className="icon" /> Chat</li>
          <li className="menu-item"><FaUserCircle className="icon" /> Account</li>
          <li className="menu-item logout" onClick={onLogout}><FaSignOutAlt className="icon" /> Logout</li>
          
          <li className={`menu-item ${location.pathname === '/reviews' ? 'active' : ''}`} onClick={handleReviews}><FaClipboardList className="icon" /> Reviewform</li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="section">
          <h2>Upcoming Deadlines</h2>
          <ul className="list">
            {upcomingDeadlines.map((deadline, index) => (
              <li key={index} className="list-item">{deadline}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Recent Notifications</h2>
          <ul className="list">
            {recentNotifications.map((notification, index) => (
              <li key={index} className="list-item">{notification}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Submission Status</h2>
          <ul className="list">
            {submissionStatus.map((submission, index) => (
              <li key={index} className="list-item">{submission}</li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <button className="button primary" onClick={handleNewSubmission}>Submit new Publication</button>
          <button className="button secondary" onClick={handleWithdrawPublication}>Withdraw Publication</button>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;