import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatBox from './components/chatbox';
import ConversationHistory from './components/ConversationHistory';
import FileShare from './components/FileShare';
import SearchBar from './components/SearchBar';
import { getConversationHistory, getFileShare, search } from './api';

function App() {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    getConversationHistory().then(response => {
      setOutput(response.data);
    });
  }, []);

  return (
    <div>
      <ChatBox text={text} setText={setText} output={output} />
      <ConversationHistory />
      <FileShare />
      <SearchBar />
    </div>
  );
}

export default App;