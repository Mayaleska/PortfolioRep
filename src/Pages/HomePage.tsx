
import ProfileImage from '../assets/HeadShot.jpg';  // Import for profile image
import './HomePage.css'; // Link to CSS file


function HomePage() {
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
      </div>
  );

} 

export default HomePage;