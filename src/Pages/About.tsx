
import './About.css';
import PassionImage from '../assets/Passion.jpg';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Maya Leszczynska</h1>
        <img src={PassionImage} alt="Maya Leszczynska" className="about-image" />
        <p>I was born in Limerick, Ireland, and am currently living at home in East Clare. 
          I am a student at the University of Limerick studying a Masters in Interaction & 
          Experience Design. I have a Bachelors Degree in Animation & Motion Design which I
           attained at the Limerick School of Art and Design in 2023.  </p>
      </header>
      <div className="about-content">
        <h2></h2>
        <p>
          My main interests lie in design with a focus in game design and development.
           Much of my past work, including that done in my Bachelors Degree, revolves 
           around my love of cats. I have two cats who are called Iggy and Isaac who were 
           the main source of my inspiration throughout my Bachelors Degree. I also hold a 
           Level 5 PLC qualification in Culinary Skills which fueled my pre exisiting love of cooking. 
           As for hobbies, most of my free time is used to create art, spend time with my family and 
           play video games. 
        </p>
      </div>
    </div>
  );
}

export default About;