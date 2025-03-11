// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './likebutton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button 
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;