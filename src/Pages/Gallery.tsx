import React, { useState, useEffect } from 'react';
import './Gallery.css';
import HeadShot from '../assets/HeadShot.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';
import Passion from '../assets/Passion.jpg';

interface Image {
  src: string;
  title: string;
  reactions: { like: number; love: number; wow: number };
  comments: string[];
}

const ImageGallery: React.FC = () => {
  const initialImages: Image[] = [
    {
      src: HeadShot,
      title: 'Formal Head Shot',
      reactions: { like: 0, love: 0, wow: 0 },
      comments: [],
    },
    {
      src: Aesthetic,
      title: 'Aesthetic Landscape',
      reactions: { like: 0, love: 0, wow: 0 },
      comments: [],
    },
    {
      src: Passion,
      title: 'My Passion in Life',
      reactions: { like: 0, love: 0, wow: 0 },
      comments: [],
    },
  ];

  const [index, setIndex] = useState(0); // Current image index
  const [comment, setComment] = useState<string>(''); // Current comment input

  // Load saved images from localStorage or initialize with defaults
  const [images, setImages] = useState<Image[]>(() => {
    const savedImages = localStorage.getItem('galleryImages');
    return savedImages ? JSON.parse(savedImages) : initialImages;
  });

  const saveImagesToLocalStorage = (updatedImages: Image[]) => {
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
  };

  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle reactions
  const handleReaction = (reaction: keyof Image['reactions']) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.map((img, i) =>
        i === index
          ? { ...img, reactions: { ...img.reactions, [reaction]: img.reactions[reaction] + 1 } }
          : img
      );
      saveImagesToLocalStorage(updatedImages);
      return updatedImages;
    });
  };

  // Handle comments
  const handleAddComment = () => {
    if (!comment.trim()) return;
    setImages((prevImages) => {
      const updatedImages = prevImages.map((img, i) =>
        i === index ? { ...img, comments: [...img.comments, comment] } : img
      );
      saveImagesToLocalStorage(updatedImages);
      return updatedImages;
    });
    setComment('');
  };

  // Keyboard navigation
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      goToNextImage();
    } else if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>Assignment 1 Photography Series</p>
      </header>
      <img
        src={images[index].src}
        alt={`Gallery Image ${index + 1}`}
        className="gallery-image"
      />
      <h2 className="image-title">{images[index].title}</h2>

      {/* Reactions */}
      <div className="reactions">
        <button onClick={() => handleReaction('like')}>👍 {images[index].reactions.like}</button>
        <button onClick={() => handleReaction('love')}>❤️ {images[index].reactions.love}</button>
        <button onClick={() => handleReaction('wow')}>😮 {images[index].reactions.wow}</button>
      </div>

      {/* Comments */}
      <div className="comments">
        <h3>Comments:</h3>
        <div className="comment-list">
          {images[index].comments.map((c, i) => (
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

      {/* Navigation Buttons */}
      <div className="gallery-buttons">
        <button onClick={goToPreviousImage} className="gallery-button">
          Previous
        </button>
        <button onClick={goToNextImage} className="gallery-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
