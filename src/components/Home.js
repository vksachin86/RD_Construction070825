import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="hero-content">
            <p className="hero-subheading">Building Excellence Since 2010</p>
            <h1 className="hero-heading">
              We Construct Your <span className="highlight">Dream Projects</span>
            </h1>
            <p className="hero-para">
              RD Construction brings your vision to life with precision engineering, 
              innovative design, and unparalleled craftsmanship. From residential 
              homes to commercial complexes, we build with quality and integrity.
            </p>
            <div className="hero-btn">
              <Link to="/contact" className="btn btn-primary">Get A Quote</Link>
              <Link to="/about" className="btn btn-white">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Construction Site" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-common">
        <div className="container">
          <h2 className="section-common-heading">About RD Construction</h2>
          <p className="section-common-subheading">
            With over a decade of experience in the construction industry, we've built 
            a reputation for excellence, reliability, and innovative solutions.
          </p>
          
          <div className="grid grid-three--cols">
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3>Expert Team</h3>
              <p>
                Our skilled professionals bring years of experience and technical 
                expertise to every project, ensuring quality workmanship.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Quality Materials</h3>
              <p>
                We use only the highest quality materials from trusted suppliers 
                to ensure durability and longevity of your construction.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Client Focused</h3>
              <p>
                Your satisfaction is our priority. We work closely with clients 
                to understand their vision and deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-common bg-light">
        <div className="container">
          <h2 className="section-common-heading">Our Services</h2>
          <p className="section-common-subheading">
            Comprehensive construction solutions tailored to meet your specific needs 
            and project requirements.
          </p>
          
          <div className="grid grid-three--cols">
            <div className="service-card">
              <div className="service-img">
                <img 
                  src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Residential Construction" 
                />
              </div>
              <div className="service-content">
                <h3>Residential Construction</h3>
                <p>
                  Custom home building, renovations, and extensions designed to 
                  create your perfect living space.
                </p>
                <Link to="/services" className="btn-link">Learn More →</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-img">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Commercial Construction" 
                />
              </div>
              <div className="service-content">
                <h3>Commercial Construction</h3>
                <p>
                  Office buildings, retail spaces, and commercial complexes built 
                  for functionality and aesthetic appeal.
                </p>
                <Link to="/services" className="btn-link">Learn More →</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-img">
                <img 
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Interior Design" 
                />
              </div>
              <div className="service-content">
                <h3>Interior Design</h3>
                <p>
                  Custom interior solutions that reflect your style while maximizing 
                  space and functionality.
                </p>
                <Link to="/services" className="btn-link">Learn More →</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-common why-choose-us">
        <div className="container">
          <h2 className="section-common-heading">Why Choose RD Construction</h2>
          <p className="section-common-subheading">
            We stand out from the competition through our commitment to excellence 
            and customer satisfaction.
          </p>
          
          <div className="grid grid-two--cols">
            <div className="why-choose-content">
              <div className="feature-box">
                <span className="feature-number">1</span>
                <h3>Proven Expertise</h3>
                <p>
                  With over 10 years in the industry, we've successfully completed 
                  hundreds of projects of varying complexity.
                </p>
              </div>
              
              <div className="feature-box">
                <span className="feature-number">2</span>
                <h3>Quality Assurance</h3>
                <p>
                  We implement rigorous quality control measures at every stage 
                  to ensure exceptional results.
                </p>
              </div>
              
              <div className="feature-box">
                <span className="feature-number">3</span>
                <h3>Timely Delivery</h3>
                <p>
                  Our efficient project management ensures your project is completed 
                  on schedule without compromising quality.
                </p>
              </div>
            </div>
            
            <div className="why-choose-img">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Construction Team" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-common">
        <div className="container">
          <h2 className="section-common-heading">Our Recent Projects</h2>
          <p className="section-common-subheading">
            Explore our portfolio of completed projects that showcase our craftsmanship 
            and attention to detail.
          </p>
          
          <div className="grid grid-three--cols">
            <div className="project-card">
              <div className="project-img">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Modern Villa" 
                />
              </div>
              <div className="project-content">
                <div className="project-date">
                  <span><i className="fas fa-calendar-alt"></i> Jan 2023</span>
                  <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <h3>Modern Villa Construction</h3>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                <img 
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Office Building" 
                />
              </div>
              <div className="project-content">
                <div className="project-date">
                  <span><i className="fas fa-calendar-alt"></i> Mar 2023</span>
                  <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <h3>Commercial Office Complex</h3>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Interior Design" 
                />
              </div>
              <div className="project-content">
                <div className="project-date">
                  <span><i className="fas fa-calendar-alt"></i> Jun 2023</span>
                  <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <h3>Luxury Interior Design</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/blog" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact us today for a free consultation and let's discuss how we can bring 
              your construction vision to life with our expertise and quality craftsmanship.
            </p>
            <Link to="/contact" className="btn btn-white">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;