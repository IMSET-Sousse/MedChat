import { useState, useEffect } from 'react';

const useChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Logic to fetch messages from the API
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return messages;
};

export default useChat;