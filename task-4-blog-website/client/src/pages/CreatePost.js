import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'; // Import the new CSS file

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    slug: '',
  });
  const navigate = useNavigate();

  const { title, content, slug } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    };

    const body = JSON.stringify({ title, content, slug });

    try {
      await axios.post('/api/posts', body, config);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Post</h2>
      <form onSubmit={onSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug (e.g., my-first-post)</label>
          <input type="text" id="slug" name="slug" value={slug} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" value={content} onChange={onChange} required rows="10"></textarea>
        </div>
        <button type="submit" className="submit-button">Publish Post</button>
      </form>
    </div>
  );
};

export default CreatePost;