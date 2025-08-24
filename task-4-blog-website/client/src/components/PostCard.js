import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">
        {post.content.substring(0, 100)}...
      </p>
      <Link to={`/post/${post._id}`} className="read-more-link">
        Read More →
      </Link>
    </div>
  );
};

export default PostCard;