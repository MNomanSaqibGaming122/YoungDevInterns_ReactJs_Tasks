import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-hero text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1>Contact Us</h1>
          <p className="lead">We're here to help. Get in touch with us.</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6} className="mb-4">
            <h2 className="text-primary mb-3">Send us a message</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h2 className="text-primary mb-3">General Information</h2>
            <p>
              Have a question? We're ready to help. Please use the form to send us a message, or contact us using the information below.
            </p>
            <div className="contact-info">
              <p><strong>Address:</strong> Surizai Payan, Mohalla Busat Khel, Peshawar</p>
              <p><strong>Phone:</strong> +92 (123) 123-4567</p>
              <p><strong>Email:</strong> info@college.edu</p>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206.81822325537357!2d71.60672809222466!3d33.96448576059993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1756362355135!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;