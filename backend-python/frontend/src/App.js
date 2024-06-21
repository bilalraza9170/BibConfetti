import React, { useState } from 'react';
// import './App.css'; // Import CSS file for styling

// import React from 'react';

// class PublicationButtons extends React.Component {
//   handleButtonClick = async (publicationType) => {
//     try {
//       const response = await fetch(`http://localhost:5000/openPublicationFolder/${publicationType}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data.message); // Print the response message
//     } catch (error) {
//       console.error('There was a problem with your fetch operation:', error);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleButtonClick('conference_papers')}>Search Conference Papers</button>
//         <button onClick={() => this.handleButtonClick('research_articles')}>Search Research Articles</button>
//         <button onClick={() => this.handleButtonClick('journals')}>Search Journals</button>
//       </div>
//     );
//   }
// }

// export default PublicationButtons;

function App() {
  const [cleanedText, setCleanedText] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('http://localhost:4000/process_pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFetchStatus('successful');
        const data = await response.json();
        setCleanedText(data.cleaned_text);
      } else {
        setFetchStatus('failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchStatus('failed');
    }
  };

  const handleSelectFile = (event) => {
    const fileName = event.target.files[0].name;
    setSelectedFile(fileName);
    handleFileUpload(event);
  };

  const handleProcessFile = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
      handleFileUpload({ target: { files: [fileInput.files[0]] } });
    } else {
      alert('Please select a file before processing.');
    }
  };

  let content;
  if (fetchStatus === 'successful') {
    content = (
      <div className="cleaned-text-container">
        <h2 className="cleaned-text-heading">Cleaned Text</h2>
        <pre className="cleaned-text">{cleanedText}</pre>
      </div>
    );
  } else if (fetchStatus === 'failed') {
    content = <p className="error-message">Failed to fetch data. Please try again.</p>;
  } else {
    content = <p className="upload-message">Upload a PDF file to see the cleaned text.</p>;
  }

  return (
    <div className="app-container">
      <input type="file" id="fileInput" onChange={handleSelectFile} className="file-input" style={{ display: 'none' }} />
      <button onClick={() => document.getElementById('fileInput').click()} className="select-button">Select PDF File</button>
      {selectedFile && <p className="file-selected">Selected File: {selectedFile}</p>}
      <button onClick={handleProcessFile} className="process-button">Process File</button>
      {content}
    </div>
  );
}

export default App;
