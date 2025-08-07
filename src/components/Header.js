import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`section-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          <div className="nav-brand">
            <Link to="/">
              <img src="/rd-icon.png" alt="RD Construction Logo" className="logo-img" />
            </Link>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          
          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
              <li className="nav-item cta-btn">
                <Link className="btn btn-primary" to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </li>
            </ul>
            
            <div className="mobile-social-links">
              <a href="https://www.instagram.com/_rdconstruction_" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://wa.me/9036634782" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;