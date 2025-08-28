import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const initialUsers = [
  { id: 1, name: 'Zeeshan', email: 'zeeshan@futuristic.edu', role: 'Student', status: 'Active' },
  { id: 2, name: 'Faizan', email: 'faizan@futuristic.edu', role: 'Faculty', status: 'Active' },
  { id: 3, name: 'Ali', email: 'ali@futuristic.edu', role: 'Student', status: 'Suspended' },
  { id: 4, name: 'Dr. Khan', email: 'Dr.khan@futuristic.edu', role: 'Faculty', status: 'Active' },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', role: 'Student', status: 'Active' });

  const handleClose = () => {
    setShowModal(false);
    setIsEditing(false);
    setCurrentUser({ name: '', email: '', role: 'Student', status: 'Active' });
  };

  const handleShow = () => setShowModal(true);

  const handleEditShow = (user) => {
    setCurrentUser(user);
    setIsEditing(true);
    handleShow();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
    } else {
      const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      const newUser = {
        ...currentUser,
        id: newId,
        status: 'Active',
      };
      setUsers([...users, newUser]);
    }
    handleClose();
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Users</h2>
        <Button onClick={handleShow} variant="primary">
          <FaPlus className="me-2" /> Add New User
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleEditShow(user)}>
                  <FaEdit />
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit User' : 'Add New User'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={currentUser.name} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={currentUser.email} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" value={currentUser.role} onChange={handleFormChange}>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Admin">Admin</option>
              </Form.Select>
            </Form.Group>
            {isEditing && (
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" value={currentUser.status} onChange={handleFormChange}>
                  <option value="Active">Active</option>
                  <option value="Suspended">Suspended</option>
                </Form.Select>
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit">{isEditing ? 'Save Changes' : 'Add User'}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ManageUsers;