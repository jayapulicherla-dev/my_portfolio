// src/components/Header.js
import React from 'react';
import resumeData from '../resumeData.json';

const Header = () => {
  const { name, title, email, phone, linkedin, linkedinLink } = resumeData.personalInfo;
  return (
    <header className="app-header" id="home">
      <div className="container header-content">
        {/* Image container moved to be before the text container */}
        <div className="header-image-container">
          <img src="/images/profile.png" alt={name} className="profile-image" />
        </div>
        <div className="header-text">
          <h1>{name}</h1>
          <p className="title">{title}</p>
          <div className="contact-links">
            <a href={`mailto:${email}`}>{email}</a> |
            <span> {phone} </span> |
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">{linkedin}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;