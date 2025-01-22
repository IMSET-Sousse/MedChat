import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import Messages from './components/Messages';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // To store chat messages
  const [userInput, setUserInput] = useState(''); // To handle user input
  const [history, setHistory] = useState([]); // To store chat history
  const [searchTerm, setSearchTerm] = useState(''); // For search functionality

  
  // Function to handle sending a message
  const sendMessage = () => {
    if (userInput.trim() === '') return; // Avoid sending empty messages

    const newMessages = [
      ...messages,
      { sender: 'user', text: userInput },
      { sender: 'bot', text: getBotResponse(userInput) },
    ];
    setMessages(newMessages);
    setUserInput('');
    saveToHistory(newMessages);
  };

  // Function to simulate bot response
  const getBotResponse = (input) => {
    if (input.toLowerCase().includes('symptom')) {
      return 'Please describe your symptoms in detail.';
    } else if (input.toLowerCase().includes('appointment')) {
      return 'You can book an appointment by visiting our website or calling our clinic.';
    }
    return 'I am here to help with your healthcare questions. Could you elaborate?';
  };

  // Function to save chat to history
  const saveToHistory = (newMessages) => {
    const chatSession = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      messages: newMessages,
    };
    const updatedHistory = [...history, chatSession];
    setHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  // Function to load chat history
  const loadHistory = () => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  };

  // Clear messages for a new chat
  const startNewChat = () => {
    setMessages([]);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="chatbot-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-top">
          {/* Search Bar */}
          <div className="search-container">
            <span className="icon">🔍</span>
            <input
              type="text"
              placeholder="Search chats"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* New Chat Button */}
          <button className="new-chat" onClick={startNewChat}>
            + New Chat
          </button>
        </div>
        {/* Chat History */}
        <div className="chat-history">
          <h3>History</h3>
          <ul>
            {history
              .filter((chat) =>
                chat.messages.some((message) =>
                  message.text.toLowerCase().includes(searchTerm.toLowerCase())
                )
              )
              .map((chat) => (
                <li key={chat.id}>
                  <span className="chat-title">Chat on {chat.date}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Chatbox */}
      <div className="chatbox">
        <Messages messages={messages} />
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
