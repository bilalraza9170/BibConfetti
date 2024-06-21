import React, { useState } from 'react';
import './ConferenceDetail.css';

const ConferenceDetailspage = () => {
  const [cfpType, setCfpType] = useState('conference');
  const [conferenceName, setConferenceName] = useState('');
  const [acronym, setAcronym] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationType, setLocationType] = useState('city');
  const [location, setLocation] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleCancel = () => {
    // Resetting all state variables to their initial values
    setCfpType('conference');
    setConferenceName('');
    setAcronym('');
    setStartDate('');
    setEndDate('');
    setLocationType('city');
    setLocation('');
  };

  return (
    <div className="conference-details">
      <form className="conference-form" onSubmit={handleSubmit}>
        <h1 className="app-title">bibConfetti</h1>
        <h2>Conference Details</h2>

        <div className="conference-group">
          <label htmlFor="cfpType">CFP Type:</label>
          <select id="cfpType" value={cfpType} onChange={handleInputChange(setCfpType)}>
            <option value="conference">Conference</option>
            <option value="journal">Journal</option>
            <option value="article">Article</option>
          </select>
        </div>

        
        <div className="conference-group">
          <label htmlFor="conferenceName">Conference Name:</label>
          <input
            type="text"
            id="conferenceName"
            value={conferenceName}
            onChange={handleInputChange(setConferenceName)}
          />
        </div>
        <div className="conference-group">
          <label htmlFor="acronym">Acronym:</label>
          <input
            type="text"
            id="acronym"
            value={acronym}
            onChange={handleInputChange(setAcronym)}
          />
        </div>
        <div className="conference-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleInputChange(setStartDate)}
          />
        </div>
        <div className="conference-group">
          <label htmlFor="endDate">Deadline</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleInputChange(setEndDate)}
          />
        </div>
        <div className="conference-group">
          <label htmlFor="locationType">Location :</label>
          <select id="locationType" value={locationType} onChange={handleInputChange(setLocationType)}>
            <option value="city">City</option>
            <option value="country">Country</option>
          </select>
        </div>
        <div className="conference-group">
          <label htmlFor="location">Topics</label>
          <input
            type="text"
            id="location"
            list="locationOptions"
            value={location}
            onChange={handleInputChange(setLocation)}
            placeholder="Enter Topics"
          />
        </div>
        <div className="conference-group">
          <label htmlFor="location">Web link:</label>
          <input
            type="text"
            id="location"
            list="locationOptions"
            value={location}
            onChange={handleInputChange(setLocation)}
            placeholder="Enter link"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="conference-button next">Next Page</button>
          <button type="button" className="conference-button cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ConferenceDetailspage;
