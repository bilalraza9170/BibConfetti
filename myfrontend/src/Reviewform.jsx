// ReviewForm.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewForm.css'; // Ensure this file includes the updated CSS for step indicators

const ReviewForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    paperType: '',
    phone: '',
    age: '',
    occupation: '',
    comments: '',
    // Additional fields
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
    title: '',
    department: '',
    favoriteColor: '',
    bio: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
 
    useEffect(() => {
      const progressBar = document.querySelector('.progress-bar');
      // This will update the progress bar's width to 33%, 66%, or 100% depending on the step
      progressBar.style.width = `${(currentStep / 3) * 100}%`;
    }, [currentStep]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log(formData);
      alert('Form submitted successfully!');
      navigate('/success'); // Navigate to a success page or handle as needed
    }
  };

  const StepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map(step => (
        <div
          key={step}
          className={`step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}
          onClick={() => setCurrentStep(step)}
        >
          {step < currentStep ? <i className="fas fa-check"></i> : step}
        </div>
      ))}
    </div>
  );
  const ProgressBar = () => (
    <div className="progress-container">
      <div className="progress-numbers">
        {[1, 2, 3].map((number, index) => (
          <div
            key={index}
            className={`progress-number ${index + 1 === currentStep ? 'active' : ''} ${index + 1 < currentStep ? 'completed' : ''}`}
            onClick={() => setCurrentStep(index + 1)}
          >
            {index + 1 < currentStep ? <i className="tick-icon fas fa-check"></i> : number}
          </div>
        ))}
      </div>
      <div className="progress-bar"></div>
    </div>
  );
  
  

  return (
    <div className="form-container">
         <ProgressBar />
      <StepIndicator />
      <form onSubmit={handleSubmit} className="review-form">
        <h1 className="app-title">bibConfetti</h1>
        <h3>Review Form - Step {currentStep}</h3>
        {/* Conditional rendering based on currentStep */}
        {currentStep === 1 && (
          <>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
          </>
        )}
        {currentStep === 2 && (
          <>
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
            <input type="text" name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
          </>
        )}
        {currentStep === 3 && (
          <>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
            <input type="text" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} placeholder="Favorite Color" />
            <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio"></textarea>
          </>
        )}
        <button type="submit">{currentStep < 3 ? 'Next' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default ReviewForm;
