import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    degree: '',
    board: '',
    studyGroup: '',
    marks: '',
    totalMarks: '',
    percentage: '',
    address: '',
    interest: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const newApplication = { ...formData, id: applications.length + 1, status: 'Pending' };
    localStorage.setItem('applications', JSON.stringify([...applications, newApplication]));

    alert('Your application has been submitted!');
    navigate('/admissions');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center mb-4">Online Application Form</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Middle Name (Optional)</Form.Label>
                  <Form.Control type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Latest Degree / Current Education</Form.Label>
              <Form.Select name="degree" value={formData.degree} onChange={handleChange} required>
                <option value="">Select a degree</option>
                <option value="High School">High School</option>
                <option value="Associate's Degree">Associate's Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Board / Institute</Form.Label>
              <Form.Control type="text" name="board" value={formData.board} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Study Group</Form.Label>
              <Form.Select name="studyGroup" value={formData.studyGroup} onChange={handleChange} required>
                <option value="">Select a group</option>
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
                <option value="Computer Science">Computer Science</option>
              </Form.Select>
            </Form.Group>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Obtained Marks</Form.Label>
                  <Form.Control type="number" name="marks" value={formData.marks} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Marks</Form.Label>
                  <Form.Control type="number" name="totalMarks" value={formData.totalMarks} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Percentage</Form.Label>
                  <Form.Control type="number" name="percentage" value={formData.percentage} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Program of Interest for Admission</Form.Label>
              <Form.Select name="interest" value={formData.interest} onChange={handleChange} required>
                <option value="">Select a program</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Arts & Humanities">Arts & Humanities</option>
                <option value="Natural Sciences">Natural Sciences</option>
                <option value="Health Sciences">Health Sciences</option>
              </Form.Select>
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit Application
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationForm;