import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './About.css';

import innovativeImage from '../assets/images/innovative.jpg';
import collabImage from '../assets/images/collab.jpg';
import libraryImage from '../assets/images/library.jpg';

const About = () => {
  const carouselImages = [
    {
      src: innovativeImage,
      alt: 'Campus Library',
      caption: 'State-of-the-Art Library',
      description: 'A vast collection of resources for academic excellence.'
    },
    {
      src: collabImage,
      alt: 'Student Lounge',
      caption: 'Student Collaboration Spaces',
      description: 'Modern facilities for group projects and student life.'
    },
    {
      src: libraryImage,
      alt: 'Classroom',
      caption: 'Innovative Learning Environment',
      description: 'Classrooms designed for interactive and engaging lectures.'
    },
  ];

  return (
    <div className="about-page">
      <div className="about-hero text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1>About Our College</h1>
          <p className="lead">A legacy of excellence and a vision for the future.</p>
        </Container>
      </div>
      <Container className="my-5">
        <section className="mb-5">
          <Row>
            <Col md={6}>
              <h2>Our Story</h2>
              <p>
                Founded in 1985 with a vision to provide accessible and high-quality education, College Name has grown from a small community college into a leading institution recognized for its academic rigor and innovative research. Our journey began with a commitment to student success, and that remains the cornerstone of our mission today.
              </p>
              <p>
                Over the decades, we've expanded our campus, developed a diverse range of programs, and built a vibrant community of scholars, artists, and leaders. We are proud of our history and excited about the future we are building together.
              </p>
            </Col>
            <Col md={6}>
              <Carousel className="shadow">
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={image.alt}
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
                      <h3>{image.caption}</h3>
                      <p>{image.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </section>

        <hr />

        <section className="mb-5">
          <Row>
            <Col md={6}>
              <h2 className="text-primary">Our Mission</h2>
              <p>
                To empower students with the knowledge, skills, and values they need to thrive in a complex and ever-changing world. We are dedicated to academic excellence, innovative research, and fostering a collaborative and inclusive environment.
              </p>
            </Col>
            <Col md={6}>
              <h2 className="text-primary">Our Vision</h2>
              <p>
                To be a premier institution of higher learning, known for its transformative education, groundbreaking research, and a deep commitment to serving the community.
              </p>
            </Col>
          </Row>
        </section>

        <hr />

        <section className="text-center">
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="p-4 bg-light rounded">
                <h2>A Message from Our President</h2>
                <p className="fst-italic">
                  "Welcome to our college. Here, you'll find a community that challenges you to think critically, create fearlessly, and engage deeply with the world around you. We believe in the power of education to change lives, and we are committed to helping you achieve your full potential."
                </p>
                <p className="fw-bold">- Prof. Muhammad Noman Saqib</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;