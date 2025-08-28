import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ContentForm = ({ contentItem, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'News',
    author: 'Admin',
    date: new Date().toISOString().slice(0, 10),
    body: ''
  });

  useEffect(() => {
    if (contentItem) {
      setFormData(contentItem);
    }
  }, [contentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Container className="my-4">
      <h2>{contentItem ? 'Edit Content' : 'Add New Content'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange}>
            <option>News</option>
            <option>Event</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Content Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {contentItem ? 'Update Content' : 'Add Content'}
        </Button>
      </Form>
    </Container>
  );
};

export default ContentForm;