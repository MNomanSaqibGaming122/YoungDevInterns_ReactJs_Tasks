import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-section text-white text-center">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1 className="display-4 fw-bold">Welcome to Our College</h1>
            <p className="lead">
              Discover your future with our world-class academic programs and vibrant campus life.
            </p>
            <Link to="/about">
              <Button variant="primary" size="lg">Learn More</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;