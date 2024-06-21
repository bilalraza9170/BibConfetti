import React, { useState } from 'react';
import './Login.css'; // Ensure this CSS file includes the necessary styles
import { Link, useNavigate } from 'react-router-dom'; // Import from react-router-dom

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
navigate("/dashboard")
    // onLogin({ username, password, role });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="app-title">bibConfetti</h1>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">Researcher</option>
            <option value="user">Conference Organizer</option>
            <option value="user">Reviewer</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Use Link from react-router-dom */}
      </form>
    </div>
  );
};

export default LoginPage;