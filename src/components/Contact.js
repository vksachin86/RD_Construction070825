import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      const response = await fetch("https://formspree.io/f/mpzvopeg", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Contact Us</h1>
            <p className="hero-subheading">Get in touch with our team for inquiries or project discussions</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-common">
        <div className="container">
          <div className="grid grid-two--cols">
            <div className="contact-form-container">
              <h2 className="section-common-heading">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus.error && (
                    <p className="error-message">
                      There was an error submitting your message. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
            
            <div className="contact-info">
              <h2 className="section-common-heading">Contact Information</h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Near Ganesh Nagar, Ibrahimput Vijayapur</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+919036634782">+91 9036634782</a>
                    </p>
                    <p>
                      <a href="tel:+919481631994">+91 9481631994</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:reachrdconstruction@gmail.com">reachrdconstruction@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/_rdconstruction_" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://wa.me/9036634782" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-common">
        <div className="container">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3819.734208645284!2d75.71924627515152!3d16.78989418399894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ3JzIzLjYiTiA3NcKwNDMnMTguNiJF!5e0!3m2!1sen!2sin!4v1714307114943!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RD Construction Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Construction Project?</h2>
            <p>
              Contact us today for a free consultation and quote. Our team is ready 
              to discuss your project requirements and provide expert guidance.
            </p>
            <Link to="/contact" className="btn btn-white">Get A Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;