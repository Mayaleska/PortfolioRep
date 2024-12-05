import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import ProfileImage from '../assets/HeadShot.jpg'; // Import the profile image
import './HomePage.css'; // Import the CSS file
import HeadShot from '../assets/HeadShot.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';
import Passion from '../assets/Passion.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* Main Content */}
      <div className="content-container">
        <div className="text-section">
          <h1>Maya Leszczynska</h1>
          <p>— Animator, Designer and Masters Student</p>
        </div>

        <div className="image-section">
          <img src={ProfileImage} alt="Maya Leszczynska" className="profile-image" />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Explore Maya's Image Gallery</h2>
        <div className="image-gallery">
          <Link to="/gallery">
            <img src={Aesthetic} alt="Gallery Item 1" className="gallery-image" />
          </Link>
          <Link to="/gallery">
            <img src={ProfileImage} alt="Gallery Item 2" className="gallery-image" />
          </Link>
          <Link to="/gallery">
            <img src={Passion} alt="Gallery Item 3" className="gallery-image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;