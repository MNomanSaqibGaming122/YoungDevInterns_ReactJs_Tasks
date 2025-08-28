import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.css'; 

const MyNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
  The <span className="futuristic-word">Futuristic</span> College
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/academics" className="nav-link-custom">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admissions" className="nav-link-custom">Admissions</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link as={Link} to="/admin" className="admin-login-btn">Admin Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;