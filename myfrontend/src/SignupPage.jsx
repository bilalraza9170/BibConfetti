import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Assuming the Signup page shares styling with the Login page

const SignupPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [Oname, setOname] = useState('');
  const [Odetail, setOdetail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")
  }



  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
      <h1 className="app-title">bibConfetti</h1>
        <h2 className="app-title">Sign Up</h2>
        {/* <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" value={role} onChange={e => setRole(e.target.value)}>
            <option value="">Select a role</option>
            <option value="user">Researcher</option>
            <option value="user">Conference Organizer</option>
            
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Oname">Oname</label>
          <input type="text" id="Oname" value={Oname} onChange={e => setOname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Odetail">Odetail</label>
          <input type="text" id="Odetail" value={Odetail} onChange={e => setOdetail(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignupPage;