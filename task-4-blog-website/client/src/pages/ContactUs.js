import React, { useState } from 'react';
import './StaticPage.css'; // Reusing the same CSS file
import './ContactUs.css'; // Specific styles for the form

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend endpoint.
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="static-page-container">
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion, or just want to say hello? I'd love to hear from you. Please fill out the form below, and I'll get back to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" value={subject} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" value={message} onChange={onChange} rows="6" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-details">
        <h3>Alternatively, you can reach out via:</h3>
        <p><strong>Email:</strong> contact@myblog.com</p>
        <p><strong>Location:</strong> Peshawar, Pakistan</p>
      </div>
    </div>
  );
};

export default ContactUs;