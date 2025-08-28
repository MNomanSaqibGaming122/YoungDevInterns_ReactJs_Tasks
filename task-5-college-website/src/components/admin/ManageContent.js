import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import ContentForm from './ContentForm';

const ManageContent = () => {
  const [content, setContent] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Load content from localStorage on component mount
    const storedContent = JSON.parse(localStorage.getItem('content')) || [];
    setContent(storedContent);
  }, []);

  const handleAddClick = () => {
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleDeleteClick = (itemId) => {
    const updatedContent = content.filter((item) => item.id !== itemId);
    localStorage.setItem('content', JSON.stringify(updatedContent));
    setContent(updatedContent);
  };

  const handleSave = (newItem) => {
    let updatedContent;
    if (selectedItem) {
      updatedContent = content.map((item) =>
        item.id === selectedItem.id ? newItem : item
      );
    } else {
      const newId = content.length > 0 ? Math.max(...content.map(item => item.id)) + 1 : 1;
      updatedContent = [...content, { ...newItem, id: newId }];
    }
    localStorage.setItem('content', JSON.stringify(updatedContent));
    setContent(updatedContent);
    setShowForm(false);
  };

  return (
    <Container className="my-4">
      {showForm ? (
        // The onSave prop is explicitly passed here
        <ContentForm contentItem={selectedItem} onSave={handleSave} />
      ) : (
        <>
          <h2 className="mb-4">Manage Website Content</h2>
          <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" onClick={handleAddClick}>Add New Item</Button>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>
                    <Button variant="info" size="sm" className="me-2" onClick={() => handleEditClick(item)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default ManageContent;