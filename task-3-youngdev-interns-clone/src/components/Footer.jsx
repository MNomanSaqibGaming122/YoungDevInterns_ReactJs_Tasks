import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3 className="footer-logo">YoungDev<span>Interns</span></h3>
          <p className="footer-tagline">Empowering Tomorrow's Developers Today</p>
          <div className="footer-contact">
            <p><FaMapMarkerAlt className="contact-icon" /> Karachi, Pakistan</p>
            <p><FaEnvelope className="contact-icon" /> ceo@youngdevinterns.net</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Important Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/internship-guide">Internship Guide</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social Links</h4>
          <p>Subscribe to our newsletter</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit"></button>
          </form>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@copyright YoungDev Interns 2025</p>
      </div>
    </footer>
  );
};

export default Footer;