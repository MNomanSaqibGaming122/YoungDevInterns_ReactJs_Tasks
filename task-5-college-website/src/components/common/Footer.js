import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; 
import departments from '../data/departments';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="py-5">

          <Col md={3} className="mb-4">
            <h5>Our Campus</h5>
            <p className="campus-text">
              Inqilaab Road,
              <br />
              Peshawar City, 24381
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> info@futuristic.edu
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h5>Departments</h5>
            <ul className="list-unstyled footer-links">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <Link to={`/academics/department/${dept.id}`}>{dept.name}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/admissions">Apply Now</Link></li>
              <li><Link to="/library">Library Portal</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5>Social</h5>
            <div className="social-icons">
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>

        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom-row align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="copyright-text mb-0">&copy; {new Date().getFullYear()} The Futuristic College. All Rights Reserved.</p>
          </Col>
          <Col md={6}>
            <div className="bottom-nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/academics">Academics</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;