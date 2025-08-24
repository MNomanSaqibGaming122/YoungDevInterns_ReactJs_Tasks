import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CreatePost.css'; // Reusing the same CSS file

const EditPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    slug: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setFormData({
          title: res.data.title,
          content: res.data.content,
          slug: res.data.slug,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

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
      await axios.put(`/api/posts/${id}`, body, config);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Post</h2>
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
        <button type="submit" className="submit-button">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;