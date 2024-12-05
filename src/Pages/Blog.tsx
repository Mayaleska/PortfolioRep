import React, { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addPost, addReaction, addComment } from '../postSlice';
import './Blog.css';
<<<<<<< HEAD
=======
import Passion from '../assets/Passion.jpg';
import HeadShot from '../assets/Headshot.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';
import Test from '../assets/Test.png';
import BrainStorm from '../assets/BrainStorm.jpg';
import StoryBoard from '../assets/StoryBoard.jpg';
import Test1 from '../assets/Test1.png';
import Cullane from '../assets/Cullane.jpg';
import Green from '../assets/Green.png';
import Mocha from '../assets/Mocha.png';
import AfterEffects from '../assets/AfterEffects.png';
import Me from '../assets/Me.jpg';
import PostsList from '../app/features/posts/PostsList';
>>>>>>> a9952be58cff22d003076cfb493d15e2e86bec85

interface Post {
  title: string;
  date: string;
  content: string;
  image: string | null;
  reactions: {
    like: number;
    love: number;
    wow: number;
    rocket: number;
    coffee: number;
  };
  comments: string[];
}

const Blog: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch<AppDispatch>();

  const [newPost, setNewPost] = useState({ title: '', content: '', image: null as string | null });
  const [comment, setComment] = useState<string>('');

  const handlePostSubmit = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    // Add missing fields: reactions and comments
    dispatch(
      addPost({
        title: newPost.title,
        content: newPost.content,
        image: newPost.image,
        reactions: { like: 0, love: 0, wow: 0, rocket: 0, coffee: 0 }, // Default reactions
        comments: [], // Default empty comments
      })
    );

    setNewPost({ title: '', content: '', image: null });
  };

  const handleReaction = (index: number, reaction: keyof Post['reactions']) => {
    dispatch(addReaction({ index, reaction }));
  };

  const handleComment = (index: number) => {
    if (!comment.trim()) return;
    dispatch(addComment({ index, comment }));
    setComment('');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewPost({ ...newPost, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Maya's Blog</h1>
      </header>
<<<<<<< HEAD

      {/* Post Submission Form */}
      <div className="post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Write your post..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handlePostSubmit}>Create Post</button>
      </div>

      {/* Display Blog Posts */}
      {posts.map((post, index) => (
        <div key={index} className="blog-content">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          {post.image && <img src={post.image} alt="Blog Post" className="blog-image" />}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* Reaction Buttons */}
          <div className="reactions">
            <button onClick={() => handleReaction(index, 'like')}>👍 {post.reactions.like}</button>
            <button onClick={() => handleReaction(index, 'love')}>❤️ {post.reactions.love}</button>
            <button onClick={() => handleReaction(index, 'wow')}>😮 {post.reactions.wow}</button>
            <button onClick={() => handleReaction(index, 'rocket')}>🚀 {post.reactions.rocket}</button>
            <button onClick={() => handleReaction(index, 'coffee')}>☕ {post.reactions.coffee}</button>
          </div>
          {/* Comments */}
          <div className="comments">
            <h3>Comments:</h3>
            {post.comments.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleComment(index)}>Comment</button>
          </div>
        </div>
      ))}
=======
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
         
      </div>

      <div className="blog-content">
      <h2></h2>
        <img src={BrainStorm} alt="Maya Leszczynska" className="blog-image" />
        <h3>Video Project</h3>
        <p>Our project began with the team meeting to brainstorm and discuss ideas for the product demo 
          video. The team was initially inspired by the season at the time of development, Autumn. We began
          discussing themes surrounding Autumn and the things that we individually enjoyed about the season.
          This discussion brought up themes of Halloween, spookiness, autumnal nature, and the team had the
          idea to create a product demo about a scary board game that involved a dark setting with actors
          surrounding a table showcasing shots of the board game and a short demonstration of how the game
         was played. This idea further developed into the concept of a mobile application. The 
         applications purpose is to guide and inform users of abandoned and historical sites around 
         Ireland. </p>
         <img src={StoryBoard} alt="Maya Leszczynska" className="blog-image" />
         <p>Some of the team members began developing story boards for the video and we then practiced some 
          of the shots in the Computer Science Building and edited them together to get an idea of how the 
          video would run and look. </p>
          <img src={Test} alt="Maya Leszczynska" className="blog-image" />
          <img src={Test1} alt="Maya Leszczynska" className="blog-image" />
          <p>I told the team that I knew of an abandoned house that was open to the public near Kilkishen in 
            Clare. The house is called Cullane House and the team decided, despite it being a 50 minute drive
             from UL, it was the perfect location for our video. The team went out to Cullane House together
              to have a look around, get a feel for the atmosphere and to plan and test each shot that we 
              needed for the video project. </p>
              <img src={Cullane} alt="Maya Leszczynska" className="blog-image" />
          <p>For the Group Video Project my roles were Cinematographer and Video Editor. While I was new to
           the role of cinematography, I had previous experience doing video editing in Adobe Premier Pro. </p>
           <img src={Me} alt="Maya Leszczynska" className="blog-image" />
        <p>The role of cinematographer was challenging and exciting. I had little previous experience using a 
          camera for a third level project. For many of the scenes I shot, I used the rule of thirds 
          extensively as I found it was a beginner friendly technique to ensure decent composition. I 
          struggled with the shots that required me to move while holding the camera and found that I was 
          telling my group we need to retake shots often as my ability to stabilise the camera was lacking.
           However, with many phone cameras the video capture comes with a built in stabilisation feature 
           which I found very helpful, as well as the warp stabiliser effect in premier pro which I utilised 
           to help further stabilise some of the shots during editing. </p>
           <p>Video Project Editing </p>
         <p>Once the team had finished filming I went through every shot that was taken and decided which 
        ones were the best quality, in terms of composition, camera stability, lighting, acting and 
         camera movement. Once I had chosen the best scenes I compiled them all in Premier Pro and began 
         editing. I got to make the decisions on the cuts in editing and decided when each scene should be
         cut and trimmed so that we wouldn’t go over the time limit. </p>
          <p>The first step I took was to cut any extra time on either side of each shot that so we didn’t 
          have unnecessary footage. The team wanted the video to look like it was filmed near dusk so I 
          added a Lumetri Colour adjustment layer in Premier Pro and adjusted the parameters to make the 
         video appear as though it was closer to night-time. I then showed this to the team and they 
         thought it was too dark so I further adjusted the Lumetri Colour until all team members were 
          satisfied with how the video looked. </p>
         <p>I spent some time utilising the Warp Stabilisation effect in Premier Pro to help stabilise 
         and smooth any camera wobble or movement for the shots that needed it. Most of the shots that
         were taken by hand needed a small amount of stabilistaion. Some of the scenes were taken
         using a tripod so these ones did not need any further stabilisation. </p>
        <p>Next, the team worked on a title screen for the video. Devikala designed the logo icon for the
           ‘BackTrack’ app in Canva and then sent me the individual layers so I could bring them into After
            Effects and create the Title Screen animation. </p>
            <p>When I began work on adding the graphics for the app, made by Keelan, to the phone green screen
               I quickly became concerned that we had used a green screen against a background of green grass.
               <img src={Green} alt="Maya Leszczynska" className="blog-image" />
                However, I ended up using After Effect’s Mocha tool to map the app graphic to the phone screen
            in Scene 4. To achieve this, I used Mocha to map and track the phone in Keelan’s hand which
            mostly automatically tracked it and then I had to go through the tracking data and adjust 
            the tracked points where they weren’t mapped correctly.
            <img src={Mocha} alt="Maya Leszczynska" className="blog-image" /> I then created a composition in 
           After Effects and used the phone screen tracking data from Mocha to display the graphic of
           the ‘BackTrack’ app to show that the users had arrived at the house. I also added a layer
           that had an image of the sky  and set it to the screen blend mode and used the same 
            tracking data from Mocha to make a reflection of the sky on the phone screen.
            <img src={AfterEffects} alt="Maya Leszczynska" className="blog-image" />
             For Scene 4
           I also made the location pin graphic in Procreate and then animated it in After Effects
            and brought it into Premier Pro and I animated an image of footsteps in Procreate for 
            the transition between scene 2 and 3. </p>
            <p>For Scene 6 I added an echo effect to the audio as the camera was further away from the actors
               and they were inside the stone building. I also added an echo when Devi says; “you there”, at 
               the end of scene 5 when devi enters the doorway. For the credits scene I used the Ultra Key 
               effect in Premier Pro to display the animation of the app logo and credits roll on the phone screen, 
               which I made in After Effects. 
        <p>I sourced all the sound effects and music from Pixabay and Youtube Studio and compiled them in
           After Effects for the video project. Devi and Keelan did the voice over which they sent to me and
            I added it to the premier pro project doing my best to match the audio that I was given to the 
            scenes that we had already shot. In the end I used H.265(HVEC) for the format with a bitrate of
             1.4. Unfortunately, this killed the quality of the video but after extensive research this 
             seemed to be the only way to reduce the file size from 522MB to 24MB in line with the assignment 
             brief. 
</p>
</p>
      </div>

>>>>>>> a9952be58cff22d003076cfb493d15e2e86bec85
    </div>
    
  );
};

export default Blog;
