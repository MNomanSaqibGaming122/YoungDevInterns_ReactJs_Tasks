import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './SinglePostPage.css';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="status-message">Loading...</div>;
  }

  if (!post) {
    return <div className="status-message">Post not found.</div>;
  }

  return (
    <div className="single-post-container">
      <h1 className="post-heading">{post.title}</h1>
      <p className="post-meta">
        Published on {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SinglePostPage;