import React, { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addPost, addReaction, addComment } from '../postSlice';
import './Blog.css';

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
    </div>
  );
};

export default Blog;
