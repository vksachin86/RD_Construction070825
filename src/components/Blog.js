import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
    },
    {
      id: 4,
      title: "Luxury Apartment Interior",
      category: "Interior Design",
      date: "Jul 2023",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "High-end interior design for a premium apartment complex."
    },
    {
      id: 5,
      title: "Community Center",
      category: "Institutional",
      date: "Sep 2023",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "A multi-purpose community center with recreational and educational facilities."
    },
    {
      id: 6,
      title: "Retail Space Development",
      category: "Commercial",
      date: "Nov 2023",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "A shopping complex with 20 retail units and ample parking space."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Our Projects</h1>
            <p className="hero-subheading">Explore our portfolio of completed works</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-common">
        <div className="container">
          <h2 className="section-common-heading">Recent Works</h2>
          <p className="section-common-subheading">
            Take a look at some of our recently completed projects that showcase 
            our craftsmanship and attention to detail.
          </p>
          
          <div className="project-filter">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Residential</button>
            <button className="filter-btn">Commercial</button>
            <button className="filter-btn">Interior</button>
            <button className="filter-btn">Renovation</button>
          </div>
          
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
                    <Link to={`/project/${project.id}`} className="view-more">View Details →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-common bg-light">
        <div className="container">
          <h2 className="section-common-heading">Client Testimonials</h2>
          <p className="section-common-subheading">
            Hear what our clients say about working with us.
          </p>
          
          <div className="testimonials">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "RD Construction transformed our vision into reality. Their attention 
                  to detail and commitment to quality was evident throughout the project."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Rajesh Kumar" 
                />
                <div>
                  <h4>Rajesh Kumar</h4>
                  <p>Residential Client</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The commercial complex they built for us was completed on time and 
                  exceeded our expectations. Highly recommend their services."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Priya Shah" 
                />
                <div>
                  <h4>Priya Shah</h4>
                  <p>Commercial Client</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Their team handled our heritage home restoration with such care and 
                  professionalism. They preserved the character while modernizing the space."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Vikram Patel" 
                />
                <div>
                  <h4>Vikram Patel</h4>
                  <p>Renovation Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>
              Contact us today to discuss your construction needs. Our team is ready 
              to bring your vision to life with our expertise and craftsmanship.
            </p>
            <Link to="/contact" className="btn btn-white">Get A Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;