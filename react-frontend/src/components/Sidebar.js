import React from 'react';

const Sidebar = ({ chatHistory, onSelectConversation }) => {
  return (
    <div className="sidebar">
      <h3>Chat History</h3>
      <ul>
        {chatHistory.map((chat, index) => (
          <li key={index} onClick={() => onSelectConversation(index)}>
            Conversation {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
