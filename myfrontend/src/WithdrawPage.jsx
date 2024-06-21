import React from 'react';
import './WithdrawPage.css';
import { useNavigate } from 'react-router-dom';

const WithdrawPage = ({ onWithdraw, submission }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // Logic to delete the submission
    onWithdraw(submission.id);
    navigate('/dashboard'); // Redirect to dashboard after deletion
  };
  const handleBack = () => {
    navigate('/Login');
  };

  return (
    <div className="withdraw-page">
      <h1>Withdraw Submission</h1>
      <div className="submission-details">
        {<h6>There is no submission to withdraw</h6>}
        
        {/* Add other submission details you want to display */}
      </div>
      <button onClick={handleDelete} className="delete-button">Delete</button>
      <button onClick={handleBack} className="back-button">Back</button> {/* Back button */}
    </div>
  );
};

export default WithdrawPage;
