import React, { useState, useEffect } from 'react';

const ChatInterface = () => {
  const [socket, setSocket] = useState(null);
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'answer') {
        setChat((prevChat) => [...prevChat, { sender: 'bot', message: data.answer }]);
      }
    };
    setSocket(ws);
    return () => ws.close();
  }, []);

  const handleSend = () => {
    if (socket && question) {
      socket.send(JSON.stringify({ type: 'query', question }));
      setChat((prevChat) => [...prevChat, { sender: 'user', message: question }]);
      setQuestion('');
    }
  };

  return (
    <div>
      <h2>Chat Interface</h2>
      <div>
        {chat.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
        ))}
      </div>
      <input value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInterface;
