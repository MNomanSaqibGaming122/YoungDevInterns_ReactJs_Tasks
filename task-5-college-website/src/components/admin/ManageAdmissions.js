import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';

const ManageAdmissions = () => {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApplications);
  }, []);

  const handleShowModal = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  const handleStatusChange = (applicationId, newStatus) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: newStatus } : app
    );
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    setApplications(updatedApplications);
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Manage Admissions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Interest</th>
            <th>Degree</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.firstName} {app.lastName}</td>
              <td>{app.email}</td>
              <td>{app.interest}</td>
              <td>{app.degree}</td>
              <td>
                <span className={`badge ${
                  app.status === 'Approved' ? 'bg-success' :
                  app.status === 'Rejected' ? 'bg-danger' : 'bg-warning'
                }`}>
                  {app.status}
                </span>
              </td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleShowModal(app)}>View</Button>
                <Button variant="success" size="sm" onClick={() => handleStatusChange(app.id, 'Approved')}>Approve</Button>
                <Button variant="danger" size="sm" className="ms-2" onClick={() => handleStatusChange(app.id, 'Rejected')}>Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {selectedApplication && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Personal Information</h5>
            <p><strong>Name:</strong> {selectedApplication.firstName} {selectedApplication.middleName} {selectedApplication.lastName}</p>
            <p><strong>Email:</strong> {selectedApplication.email}</p>
            <p><strong>Address:</strong> {selectedApplication.address}</p>

            <h5 className="mt-3">Academic Information</h5>
            <p><strong>Latest Degree:</strong> {selectedApplication.degree}</p>
            <p><strong>Board/Institute:</strong> {selectedApplication.board}</p>
            <p><strong>Study Group:</strong> {selectedApplication.studyGroup}</p>
            <p><strong>Marks:</strong> {selectedApplication.marks} / {selectedApplication.totalMarks}</p>
            <p><strong>Percentage:</strong> {selectedApplication.percentage}%</p>
            <p><strong>Program of Interest:</strong> {selectedApplication.interest}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="success" onClick={() => { handleStatusChange(selectedApplication.id, 'Approved'); handleCloseModal(); }}>Approve</Button>
            <Button variant="danger" onClick={() => { handleStatusChange(selectedApplication.id, 'Rejected'); handleCloseModal(); }}>Reject</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ManageAdmissions;