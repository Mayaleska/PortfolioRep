
import './Blog.css';
import Passion from '../assets/Passion.jpg';
import HeadShot from '../assets/Headshot.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';

function Blog() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Maya's Blog</h1>
        <h2>8 October 2024</h2>
        <h3>Assignment 1: Photography</h3>
        <img src={HeadShot} alt="Maya Leszczynska" className="blog-image" />
        <h3>Formal Head Shot </h3>
        <p>For the formal headshot I had a friend help me take the photos. We took the photos in the 
          conservatory in my house which provided a substantial amount of natural light as the walls
          were lined with windows and the ceiling was transparent. I stood in front of a plain white
          wall for this shoot to ensure adequate contrast between the subject and background of the
          photo. At first the camera was set 1x zoom level and framed my head and shoulders, however
          capturing the photo at this distance produced an undesirable result where my nose very 
          large. After this realisation, my photographer took a few steps back and zoomed in on
          the camera which created a much more flattering result which was more accurate to what
          I look like in real life.  </p>
        <p>To edit the photo, I used Photoshop and Procreate. I firstly brought it into Procreate on 
         my iPad where I used the smudge and brush tool to correct some imperfections on my skin. 
         I used the smudge tool blend out some small blemishes on my face and then used the colour 
         picker and a brush to make the smudge look more natural. I used the brush tool to fix the 
         shape of my eyeliner, making sure to blend the colours so it didn’t look like a drawing. I 
          added a multiply layer where I painted over my lips to make it appear as though I was
          wearing a subtle lipstick. The bottom part of my nose piercings were visible in my 
          nostrils in the original photo so I used the same techniques already listed to remove 
          them so the photo had a cleaner appearance. I then created and Add layer where I used the 
          brush tool in a white colour to accentuate the shine in my eyes, I duplicated this layer 
         and added gaussian blur and a bloom effect to make it look more realistic. Lastly, I added 
          and overlay layer where I used a soft airbrush over most of my face to make my complexion 
          appear brighter and particularly to cover up the dark circles under my eyes. </p>
        <p>I then brought the edited image into Photoshop where I adjusted the saturation and brightness
          values. I slightly increased the overall saturation of the photo, and I used the selection 
          tool to isolate my irises so that I could adjust the hue and saturation to make my eyes 
          appear a brighter green. I also adjusted the colour balance to make my complexion slightly
          more pink.  </p>
      </header>
      <div className="blog-content">
      <h2></h2>
        <img src={Aesthetic} alt="Maya Leszczynska" className="blog-image" />
        <h3>Aesthetic Photo</h3>
        <p>For the aesthetic photo I was on a walk with my sister and her dog as it was nearing sunset.
          My sister went into a field to throw a ball for her dog for a few minutes. I thought that 
          sky had lovely colours at the time and decided it would make a great aesthetic photo for my
          assignment. For this photo there was very little set up as the opportunity for the photo
          came suddenly and I didn’t have much time to think about the settings and composition. 
          I took out my phone and tapped the screen to focus on the sky and adjusted the exposure 
          slider to be slightly lower (1/50 sec.). I made an effort, while taking the photo, to 
          angle the camera so that the surrounding foliage framed the photo subject nicely. </p>
        <p>I brought the photo in procreate first where I added a vignette to the photo using a large
          air brush in black to bring attention to the centre of the photo and add contrast for the 
          sky. I added a soft light layer where I again used a large soft airbrush in white to add 
          brightness to the centre of the photo. I exported the image from Procreate and brought it 
          into Photoshop. In Photoshop I increased the saturation levels and altered the hue to make
          the sky have a vibrant orange and pink look. I also adjusted the colour balance for the 
          highlights to bring even more brightness to the sky. </p>
      </div>
        
       
      <div className="blog-content">
      <h2></h2>
        <img src={Passion} alt="Maya Leszczynska" className="blog-image" />
        <h3>Passion Photo </h3>
        <p>My passion photo comprises of two of my favourite paintings I did of my cats and also one
           of my cats, Isaac. I brought my two paintings outside and placed them in front of some
          foliage to create a nice scene. I then sprinkled some cat treats in front of the paintings
          in the hopes that Isaac would stand in front of them and pose nicely while I took some
          photos. I took the photos close to the ground so that I could capture everything in the 
          scene and some background of the foliage. It was difficult to get a nice shot as my cat
          was not a very reliable subject. When he went into a central position in the scene I took
          as many photos as I could in the hopes that one of them would turn out acceptable. I
          was surprised when I found some where Isaac was in a nice pose. </p>
        <p>This photo was again edited in both Procreate and Photoshop. In Procreate I added a subtle
           vignette using a large soft air brush in black and adjusted the layer opacity so that it
           wasn’t too dark. I also created an overlay layer where I used the brush tool in a bright 
          green colour, that I had colour picked from the cats eyes, to paint over his eyes so they 
          appeared a brighter and more saturated green. I added an add layer where I used the soft 
          air brush in white to add small dots to accentuate the shine in the cats eyes. I then
          duplicated this layer and on lower layer I added a gaussian blur and bloom effect. 
          Lastly I brought the edited photo into Photoshop where I adjusted the saturation and 
          brightness. I also adjusted the colour balance to give the image an orange overtone. </p>
        <p></p>
      </div>
    </div>
  );
}

export default Blog;