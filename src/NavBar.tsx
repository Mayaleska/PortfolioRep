import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
        </div>
        <li><Link to="/HomePage">HomePage</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="VideoGallery">Video Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/ProfKnowledge">Professional Knowledge</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;