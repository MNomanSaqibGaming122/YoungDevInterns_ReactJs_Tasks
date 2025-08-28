import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admissions.css';

const Admissions = () => {
  const [showReqs, setShowReqs] = useState(false);
  const [showDeadlines, setShowDeadlines] = useState(false);
  const [showAid, setShowAid] = useState(false);

  const handleCloseReqs = () => setShowReqs(false);
  const handleShowReqs = () => setShowReqs(true);
  
  const handleCloseDeadlines = () => setShowDeadlines(false);
  const handleShowDeadlines = () => setShowDeadlines(true);
  
  const handleCloseAid = () => setShowAid(false);
  const handleShowAid = () => setShowAid(true);

  return (
    <div>
      <div className="admissions-hero text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1>Admissions</h1>
          <p className="lead">Your journey to a brighter future starts here.</p>
        </Container>
      </div>
      <Container className="my-5">
        <h2 className="text-center mb-4">Admissions Information</h2>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">Application Requirements</Card.Title>
                <Card.Text>
                  Learn about the documents and qualifications you need to prepare for your application. This includes transcripts, test scores, and letters of recommendation.
                </Card.Text>
                <Button variant="outline-primary" onClick={handleShowReqs}>View Requirements</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">Deadlines</Card.Title>
                <Card.Text>
                  Stay on track with our important application and financial aid deadlines for the upcoming academic year.
                </Card.Text>
                <Button variant="outline-primary" onClick={handleShowDeadlines}>Check Deadlines</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">Financial Aid</Card.Title>
                <Card.Text>
                  Explore the various scholarships, grants, and loan options available to help you finance your education.
                </Card.Text>
                <Button variant="outline-primary" onClick={handleShowAid}>Learn About Aid</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <section className="text-center my-5 p-4 bg-light rounded">
          <h2>Ready to Apply?</h2>
          <p className="lead">
            Take the first step towards your future today.
          </p>
          <Link to="/admissions/apply">
            <Button variant="primary" size="lg">Apply Now</Button>
          </Link>
        </section>
      </Container>

      <Modal show={showReqs} onHide={handleCloseReqs}>
        <Modal.Header closeButton>
          <Modal.Title>Application Requirements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Applicants must provide the following:</p>
          <ul>
            <li>Completed online application form</li>
            <li>Official high school or college transcripts</li>
            <li>SAT/ACT or other standardized test scores</li>
            <li>Two letters of recommendation</li>
            <li>Personal essay or statement of purpose</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReqs}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeadlines} onHide={handleCloseDeadlines}>
        <Modal.Header closeButton>
          <Modal.Title>Important Deadlines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here are the key dates for the upcoming academic year:</p>
          <ul>
            <li>Early Admission Application Deadline: November 1st</li>
            <li>Regular Admission Application Deadline: January 15th</li>
            <li>Financial Aid Application Deadline: February 1st</li>
            <li>Decision Notification: March 15th</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeadlines}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAid} onHide={handleCloseAid}>
        <Modal.Header closeButton>
          <Modal.Title>Financial Aid & Scholarships</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We offer a variety of financial aid options to help students afford their education:</p>
          <ul>
            <li>Merit-based scholarships</li>
            <li>Need-based grants</li>
            <li>Federal and private loans</li>
            <li>Work-study programs</li>
          </ul>
          <p>For more details, please visit our financial aid office or contact us directly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAid}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admissions;