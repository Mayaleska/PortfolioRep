import React, { useState } from 'react';
import './VideoGallery.css';
import BackTrack from '../assets/BackTrackVideoFinal.mp4';

interface Video {
  src: string;
  reactions: { like: number; love: number; wow: number };
  comments: string[];
}

function VideoGallery() {
  // Initialize the state for videos
  const [videos, setVideos] = useState<Video[]>([
    {
      src: BackTrack,
      reactions: { like: 0, love: 0, wow: 0 },
      comments: [],
    },
    // Add more videos as needed
  ]);

  const [index, setIndex] = useState(0); // Current video index
  const [comment, setComment] = useState<string>(''); // Current comment input

  // Navigate to the next video
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  // Navigate to the previous video
  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  // Handle reactions
  const handleReaction = (reaction: keyof Video['reactions']) => {
    setVideos((prevVideos) =>
      prevVideos.map((video, i) =>
        i === index
          ? { ...video, reactions: { ...video.reactions, [reaction]: video.reactions[reaction] + 1 } }
          : video
      )
    );
  };

  // Handle comments
  const handleAddComment = () => {
    if (!comment.trim()) return;
    setVideos((prevVideos) =>
      prevVideos.map((video, i) =>
        i === index ? { ...video, comments: [...video.comments, comment] } : video
      )
    );
    setComment('');
  };

  return (
    <div className="video-gallery-container">
      <header className="video-gallery-header">
        <h1>Video Gallery</h1>
      </header>
      
      {/* Display the current video */}
      <video
        src={videos[index].src}
        controls
        className="video-player"
        key={videos[index].src} // Ensures video reloads when changing
      />
      
      {/* Reactions */}
      <div className="reactions">
        <button onClick={() => handleReaction('like')}>👍 {videos[index].reactions.like}</button>
        <button onClick={() => handleReaction('love')}>❤️ {videos[index].reactions.love}</button>
        <button onClick={() => handleReaction('wow')}>😮 {videos[index].reactions.wow}</button>
      </div>

      {/* Comments */}
      <div className="comments">
        <h3>Comments:</h3>
        <div className="comment-list">
          {videos[index].comments.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>

      {/* Navigation buttons */}
      <div className="video-gallery-buttons">
        <button onClick={goToPreviousVideo} className="video-gallery-button">
          Previous
        </button>
        <button onClick={goToNextVideo} className="video-gallery-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoGallery;