import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';

// Establish a connection to the server
const socket = io('http://localhost:5174');

interface ChatMessage {
  message: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>(''); // State for the current message input
  const [chat, setChat] = useState<ChatMessage[]>(() => {
    // Load chat messages from localStorage
    const savedChat = localStorage.getItem('chatMessages');
    return savedChat ? JSON.parse(savedChat) : [];
  });

  // Save chat messages to localStorage whenever the chat state changes
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chat));
  }, [chat]);

  // Function to send a chat message
  const sendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) return; // Prevent empty messages from being sent

    const chatMessage: ChatMessage = { message };

    // Emit the message to the server
    socket.emit('chat', chatMessage);

    // Update the chat list locally
    setChat((prevChat) => [...prevChat, { message: `You: ${message}` }]);
    setMessage(''); // Clear the input field
  };

  // Listen for incoming chat messages
  useEffect(() => {
    const receiveChat = (payload: ChatMessage) => {
      setChat((prevChat) => [...prevChat, { message: `Friend: ${payload.message}` }]);
    };

    socket.on('chat', receiveChat);

    // Clean up the event listener on component unmount
    return () => {
      socket.off('chat', receiveChat);
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat</div>
      <div className="chat-messages">
        {chat.map((payload, index) => (
          <div
            key={index}
            className={`chat-message ${payload.message.startsWith('You:') ? 'sent' : ''}`}
          >
            {payload.message}
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={sendChat}>
        <input
          type="text"
          name="chat"
          className="chat-input"
          placeholder="Type your message here..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        />
        <button type="submit" className="chat-send-button">Send</button>
      </form>
    </div>
  );
};

export default Chat;