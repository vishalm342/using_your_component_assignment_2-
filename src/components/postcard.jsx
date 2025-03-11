// eslint-disable-next-line no-unused-vars
import React from 'react';
import './postcard.css';
import LikeButton from './likebutton';

// eslint-disable-next-line react/prop-types
const PostCard = ({ profilePic, username, content }) => {
  return (
    <div className="post-card">
      <img src={profilePic} alt={username} className="profile-picture" />
      <div className="post-content">
        <h3 className="username">{username}</h3>
        <p className="content">{content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;