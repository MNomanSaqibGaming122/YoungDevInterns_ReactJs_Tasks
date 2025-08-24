import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css'; // Import the new CSS file

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error fetching posts', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { 'x-auth-token': token } };
        await axios.delete(`/api/posts/${id}`, config);
        fetchPosts();
      } catch (err) {
        console.error('Error deleting post', err);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-card">
        <h2 className="card-title">Existing Posts</h2>
        <div className="table-wrapper">
          <table className="posts-table">
            <thead className="table-header">
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {posts.map(post => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>
                    <Link to={`/admin/edit-post/${post._id}`} className="edit-link">Edit</Link>
                    <button onClick={() => handleDelete(post._id)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;