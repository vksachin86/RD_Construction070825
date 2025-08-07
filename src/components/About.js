import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Project",
      category: "Residential",
      date: "Jan 2023",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "A luxurious 5-bedroom villa with contemporary design and smart home features."
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "Commercial",
      date: "Mar 2023",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "A 10-story office building with modern amenities and sustainable design."
    },
    {
      id: 3,
      title: "Heritage Home Restoration",
      category: "Renovation",
      date: "May 2023",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Restoration of a 100-year-old heritage property while preserving its historic character."
    }
  ];

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "From custom homes to multi-family residences, we build quality living spaces tailored to your needs.",
      icon: "fas fa-home"
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "We construct office buildings, retail spaces, and commercial complexes with functionality and style.",
      icon: "fas fa-building"
    },
    {
      id: 3,
      title: "Interior Design",
      description: "Our design team creates beautiful, functional interiors that reflect your personality and lifestyle.",
      icon: "fas fa-couch"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 style={{color: "#000000ff" }}>About RD Construction</h1>
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
              {/* <img 
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Construction Team" 
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-common bg-light">
        <div className="container">
          <h2 className="section-common-heading">Our Services</h2>
          <p className="section-common-subheading">
            Comprehensive construction solutions tailored to meet your specific needs.
          </p>
          
          <div className="grid grid-three--cols">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-common">
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

      {/* Projects Section */}
      <section className="section-common bg-light">
        <div className="container">
          <h2 className="section-common-heading">Our Projects</h2>
          <p className="section-common-subheading">
            Take a look at some of our recently completed projects that showcase 
            our craftsmanship and attention to detail.
          </p>
          
          <div className="grid grid-three--cols">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span><i className="fas fa-calendar-alt"></i> {project.date}</span>
                  </div>
                </div>
              </div>
            ))}
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
          
          <div className="team-card">
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