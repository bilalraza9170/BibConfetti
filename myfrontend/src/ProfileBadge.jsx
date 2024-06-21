// ProfileBadge.jsx

import React from 'react';
//import './ProfileBadge.css'; // Import the CSS file for styling

const ProfileBadge = () => {
  return (
    <div className="profile-badge">
      <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
      <span className="username">John Doe</span>
    </div>
  );
};

export default ProfileBadge;
