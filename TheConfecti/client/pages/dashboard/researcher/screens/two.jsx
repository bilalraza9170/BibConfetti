import React, { useState } from 'react';

function Two() {
  // State to track if the document has been submitted
  const [isDocumentSubmitted, setIsDocumentSubmitted] = useState(false);

  const handleDocumentSubmission = () => {
    console.log('Submitting document...');
    setTimeout(() => {
      console.log('Document submitted successfully');
      // Update state to reflect successful submission
      setIsDocumentSubmitted(true);
      // Trigger the alert once the document is submitted successfully
      alert("Reviewer has been assigned");
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleDocumentSubmission}>Submit Document</button>
      {isDocumentSubmitted && (
        <>
          <p>Submitted document successfully</p>
          <script>alert("Reviewer has been assigned");</script>
        </>
      )}
    </div>
  );
}

export default Two;
