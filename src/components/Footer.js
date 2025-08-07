import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>RD Construction</h3>
            <p>
              We are a full-service construction company specializing in residential, 
              commercial, and industrial projects. Our commitment to quality and 
              customer satisfaction sets us apart.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/_rdconstruction_" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://wa.me/9036634782" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Residential Construction</Link></li>
              <li><Link to="/services">Commercial Buildings</Link></li>
              <li><Link to="/services">Interior Design</Link></li>
              <li><Link to="/services">Renovations</Link></li>
              <li><Link to="/services">Project Management</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <FaMapMarkerAlt /> Near Ganesh Nagar, Ibrahimput Vijayapur
            </p>
            <p>
              <FaPhone /> <a href="tel:+919036634782">+91 9036634782</a>
            </p>
            <p>
              <FaPhone /> <a href="tel:+919481631994">+91 9481631994</a>
            </p>
            <p>
              <FaEnvelope /> <a href="mailto:reachrdconstruction@gmail.com">reachrdconstruction@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} RD Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;