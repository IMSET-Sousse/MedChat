import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import Messages from './components/Messages';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(''); 
  const [history, setHistory] = useState([]); 

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);
    setUserInput('');

    axios.post('/api/chat', { message: userInput })
      .then(response => {
        const botMessage = { text: response.data.response, sender: 'bot' };
        setMessages([...newMessages, botMessage]);
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };


  useEffect(() => {
    axios.get('/api/conversations')
      .then(response => {
        setHistory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the conversation history!', error);
      });
  }, []);

  return (
    <div className="Chatbot">
      <Messages messages={messages} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;