import React, { useState, useEffect } from 'react';
import './Gallery.css';
import HeadShot from '../assets/HeadShot.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';
import Passion from '../assets/Passion.jpg';


interface Image { /* Created an Image interface to define the structure of the image objects. */
  src: string;
  title: string;
}

/* Added code to add a title to each image in the Image Gallery using ChatGPT for help */


const ImageGallery: React.FC = () => {
  const [index, setIndex] = useState(0);   // useState hook to manage the current index of the displayed image

  // An array of image URLs for the gallery
  // Define the images array with objects containing src and title
  const images: Image[] = [
    { src: HeadShot, title: 'Formal Head Shot' }, //added the capability of dsiplaying a title under each image in the gallery
    { src: Aesthetic, title: 'Aesthetic Landscape' },
    { src: Passion, title: 'My Passion in Life' },
  ];

  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  /* controls for going through the image gallery using keyboard arrow keys */
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