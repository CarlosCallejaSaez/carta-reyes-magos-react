import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Carta a los Reyes Magos</h1>
      </div>
      <nav className="nav-links">
        <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noopener noreferrer">
          <FiGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/carlos-calleja-saez/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={30} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
