import React, { useState } from "react";
import "./App.css";

const ChatbotUI = () => {
  const initialMessages = [
    { sender: "bot", text: "Hello, how can I assist you today?" },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);

      // Simulating bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Let me guide you to protect your health!" },
        ]);
      }, 1000);

      setInput("");
    }
  };

  const handleNewChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="chatbot-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="search-new-chat">
          <button className="new-chat-button" onClick={handleNewChat}>+ New Chat</button>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>
        <div className="chat-history">
          <p className="history-item">Chat 1</p>
          <p className="history-item">Chat 2</p>
          <p className="history-item">Chat 3</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
