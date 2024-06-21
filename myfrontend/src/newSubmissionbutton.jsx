import React from 'react';
import './newSubmissionbutton.css';

const NewFormComponent = () => {
  return (
    <div className="new-form-container">
      <div className="new-form">
      <h1 className="app-title">bibConfetti</h1>
        <h2> Upload New Publication </h2>
        <form>
          {/* Title field */}
          <div className="new-form-group">
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          
          {/* File upload field */}
          <div className="new-form-group">
            <label>Files: The document must be PDF format(fileextension.pdf)</label>
            <input type="file" name="file" accept=".pdf" />
          </div>
          
          {/* Abstract field */}
          <div className="new-form-group">
            <label>Abstract:</label>
            <textarea name="abstract"></textarea>
          </div>
          
          {/* Keywords field */}
          <div className="new-form-group">
            <label>Keywords:</label>
            <input type="text" name="keywords" />
          </div>
          
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewFormComponent;
