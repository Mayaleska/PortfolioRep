import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for responsive layout and predefined styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript bundle (including Popper)
import {Link} from'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HeadShot from'./assets/HeadShot.jpg'; // Import Headshot photo to display on the Nav Bar
import Contact from './Pages/Contact';
import About from './Pages/About';
import ProfKnowledge from './Pages/ProfKnowledge';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import VideoGallery from './Pages/VideoGallery';
import Education from './Pages/Education';
import HomePage from './Pages/HomePage'; // Import your new homepage
import Chat from './Pages/Chat'
import './App.css'
import './NavBar';
import './NavBar.css';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <div className="navbar-logo">
            <div className="logo-container">
              {/* Wrap the logo image in a Link component */}
              <Link to="/HomePage">
                <img src={HeadShot} alt="Logo" /> {/*clicking on the logo image will now bring you to the home page*/}
              </Link>
            </div>
            {/* Links displayed on the nav bar */}
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="VideoGallery">Video Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Chat">Chat</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/ProfKnowledge">Professional Knowledge</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
      <Routes> {/* Routes for each page on the nav bar */}
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/ProfKnowledge" element={<ProfKnowledge />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/HomePage" replace />} />
      </Routes>
      <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Maya Leszczynska. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
export default App;
