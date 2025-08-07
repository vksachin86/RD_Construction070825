import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "From custom homes to multi-family residences, we build quality living spaces tailored to your needs.",
      icon: "fas fa-home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "We construct office buildings, retail spaces, and commercial complexes with functionality and style.",
      icon: "fas fa-building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Interior Design",
      description: "Our design team creates beautiful, functional interiors that reflect your personality and lifestyle.",
      icon: "fas fa-couch",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation services that breathe new life into your property.",
      icon: "fas fa-hammer",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Project Management",
      description: "Our comprehensive project management ensures your construction project stays on time and on budget.",
      icon: "fas fa-clipboard-list",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Construction Consulting",
      description: "Expert advice for your construction projects, from feasibility studies to design optimization.",
      icon: "fas fa-hard-hat",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a9e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-common">
        <div className="container">
          <h2 className="section-common-heading">What We Offer</h2>
          <p className="section-common-subheading">
            We provide a full range of construction services to meet all your building needs.
          </p>
          
          <div className="grid grid-three--cols">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact" className="btn-link">Get Started →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-common bg-light">
        <div className="container">
          <h2 className="section-common-heading">Our Process</h2>
          <p className="section-common-subheading">
            We follow a structured approach to ensure successful project delivery.
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We begin by understanding your vision, requirements, and budget 
                through detailed discussions.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>
                Our team creates comprehensive plans and 3D renderings to bring 
                your vision to life.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Approvals</h3>
              <p>
                We handle all necessary permits and approvals to ensure compliance 
                with local regulations.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Construction</h3>
              <p>
                Our skilled team executes the project with precision and quality 
                craftsmanship.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Final Inspection</h3>
              <p>
                We conduct thorough quality checks to ensure everything meets our 
                high standards.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Handover</h3>
              <p>
                We deliver the completed project and provide after-service support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Whether you're planning a new construction or renovation project, 
              our team is ready to bring your vision to life with quality and precision.
            </p>
            <Link to="/contact" className="btn btn-white">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;