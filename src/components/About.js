import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About RD Construction</h1>
          <p>Building excellence since 2010</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-common">
        <div className="container">
          <div className="grid grid-two--cols">
            <div className="about-content">
              <h2 className="section-common-heading">Our Story</h2>
              <p>
                Founded in 2010 by Er. Santosh Devar, RD Construction began as a small 
                residential construction firm in Vijayapur. What started as a modest 
                operation with a handful of employees has grown into one of the region's 
                most trusted construction companies.
              </p>
              <p>
                Our growth has been fueled by our commitment to quality, integrity, and 
                customer satisfaction. We've expanded our services to include commercial 
                construction, interior design, and project management while maintaining 
                the personal touch that our clients appreciate.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>250+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Construction Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-common bg-light">
        <div className="container">
          <div className="grid grid-two--cols">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction services through innovative solutions, 
                quality craftsmanship, and unwavering commitment to our clients' vision 
                and satisfaction.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To be the construction partner of choice by setting industry standards 
                for quality, reliability, and customer service while contributing 
                positively to our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-common">
        <div className="container">
          <h2 className="section-common-heading">Meet Our Team</h2>
          <p className="section-common-subheading">
            Our strength lies in our experienced and dedicated team of professionals.
          </p>
          
          <div className="grid grid-three--cols">
            <div className="team-card">
              <div className="team-img">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Santosh Devar" 
                />
              </div>
              <div className="team-content">
                <h3>Er. Santosh Devar</h3>
                <p>Founder & CEO</p>
                <p className="team-bio">
                  With over 15 years of experience in civil engineering and construction, 
                  Santosh leads our company with vision and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>
              Contact us today to schedule a consultation with our team of experts. 
              We'll work with you to understand your needs and develop a customized solution.
            </p>
            <Link to="/contact" className="btn btn-white">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;