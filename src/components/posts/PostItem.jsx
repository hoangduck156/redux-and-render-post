
import React from 'react';

const PostItem = ({ post }) => (
  <div style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <div>
      <span>User ID: {post.userId}</span> | <span>Post ID: {post.id}</span>
    </div>
  </div>
);

export default PostItem;