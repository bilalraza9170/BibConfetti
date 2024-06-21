import React, { useState } from 'react';
import './listofSubmission.css'; // Ensure the CSS file is correctly linked

const SubmissionDisplayPage = () => {
  const [submissions, setSubmissions] = useState([
    // Sample data - replace this with actual data from your form submissions
    { acronym: 'ABC', name: 'Event 1', location: 'New York', submissionDeadline: '2023-04-01', startDate: '2023-05-01', topics: 'Technology' },
    { acronym: 'DEF', name: 'Event 2', location: 'San Francisco', submissionDeadline: '2023-05-01', startDate: '2023-06-01', topics: 'Science' },
  ]);

  return (
    <div className="submission-display-page">
      <h1 className="submission-title">Submissions</h1>
      <table className="submission-table">
        <thead>
          <tr className="table-header">
            <th>Acronym</th>
            <th>Name</th>
            <th>Location</th>
            <th>Submission Deadline</th>
            <th>Start Date</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index} className="table-row">
              <td>{submission.acronym}</td>
              <td>{submission.name}</td>
              <td>{submission.location}</td>
              <td>{submission.submissionDeadline}</td>
              <td>{submission.startDate}</td>
              <td>{submission.topics}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionDisplayPage;
