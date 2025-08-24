import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';
import PostCard from '../components/PostCard';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recentPosts = posts.slice(0, 5);

  return (
    <div className="homepage-container">
      <div className="main-content">
        <h1 className="homepage-title">M Noman's Blog</h1>
        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="no-posts-message">
            No posts found for your search.
          </p>
        )}
      </div>

      <aside className="sidebar">
        <div className="widget">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="widget">
          <h3 className="widget-title">Recent Posts</h3>
          <ul className="widget-list">
            {recentPosts.map(post => (
              <li key={post._id}>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="widget">
          <h3 className="widget-title">About the Author</h3>
          <p>Hi, I'm Muhammad Noman Saqib, a tech enthusiast and intern at YoungDev Interns, sharing my development journey.</p>
          <Link to="/about-us" className="read-more-link">Learn More</Link>
        </div>
      </aside>
    </div>
  );
};

export default HomePage;