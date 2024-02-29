import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import '../styles/navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="navbar-item">
        Home
      </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="navbar-item">
        About
      </Link>
      <Link activeClass="active" to="services" spy={true} smooth={true} duration={500} className="navbar-item">
        Services
      </Link>
      <Link activeClass="active" to="testimonials" spy={true} smooth={true} duration={500} className="navbar-item">
        Testimonials
      </Link>
      <a href='' className="navbar-item">
        Contact
      </a>
    </>
  );

  const handleCloseSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar`}>
      <div className="navbar-container">
      <a className="navbar-logo animate-e">
  Triple-E
  <span className="e">E</span>
  <span className="e">E</span>
</a>


        
        <div className={`navbar-toggle`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen && <FiMenu size={24} />}
          
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLinks />

          <div className="sidebar-close" onClick={handleCloseSidebar}>
            <FiX size={24} />
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;