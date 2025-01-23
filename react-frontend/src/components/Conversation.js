import React from 'react';

function Conversation({ text, setText, output }) {
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => console.log('Envoyer le message')}>Envoyer</button>
      <p>Output: {output}</p>
    </div>
  );
}

export default Conversation;