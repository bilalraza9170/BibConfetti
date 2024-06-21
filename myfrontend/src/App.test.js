import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Axios from 'axios';

import Dashboard from './Dashboard';
import Login from './Login';
import SignupPage from './SignupPage';
import NewFormComponent from './newSubmissionbutton';
import ConferenceDetails from './ConferenceDetail'; // Make sure you're importing the right component
import WithdrawPage from './WithdrawPage';
import SubmissionsPage from './listofSubmission';
import LandingPage from './LandingPage'; // Adjust the path if necessary
import ReviewForm from './Reviewform';
import ChatbotComponent from './Chatbot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const upcomingDeadlines = ['Submit Paper by Jan 31', 'Conference Registration by Feb 15'];
  const recentNotifications = ['New Submission Received', 'Conference Schedule Updated'];
  const submissionStatus = ['Submitted', 'In Review', 'Accepted'];

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSignup = () => {
    setIsAuthenticated(false);
  };

  // const [data,setData]=useState();
  // const handleSignup = async() => {
  //   const response = await Axios.post("http://localhost:5000/api/coregister");
  //   setData(response.data);
  
  // useEffect(()=>{
  //   handleSignup();
  // },[]);

  // };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Set LandingPage as the initial component */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Navigate to the Login page when "Get Started" is clicked */}
          <Route path="/login" element={!isAuthenticated ?
            <Login onLogin={handleLogin} /> :
            <Navigate replace to="/" />} 
          />
          <Route path="/signup" element={!isAuthenticated ?
            <SignupPage onSignup={handleSignup} /> :
            <Navigate replace to="/" />} 
          />
          <Route path="/dashboard" element={ 
            <Dashboard
              upcomingDeadlines={upcomingDeadlines}
              recentNotifications={recentNotifications}
              submissionStatus={submissionStatus}
              onLogout={handleLogout} />
              //  :
            // <Navigate replace to="/login" />
          } 
          />
          <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate replace to="/dashboard" />} />

          <Route path="/new-form" element={ <NewFormComponent />} />
          <Route path="/conference-details" element={<ConferenceDetails  />} />
          <Route path="/withdraw" element={ <WithdrawPage  />} />
          <Route path="/submissions" element={ <SubmissionsPage />} />
          
  
          <Route path="/reviews" element={<ReviewForm />} />
          
          <Route path="/chatbot" element={<ChatbotComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;