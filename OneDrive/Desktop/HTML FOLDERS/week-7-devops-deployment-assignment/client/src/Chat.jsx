import React, { useState, useRef } from 'react';
import { useSocket } from './socket/socket';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const inputRef = useRef(null);

  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    setTyping,
  } = useSocket();

  const handleConnect = () => {
    if (username.trim()) {
      connect(username);
      setConnected(true);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
      setTyping(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setTyping(e.target.value.length > 0);
  };

  const handleDisconnect = () => {
    disconnect();
    setConnected(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      {!connected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2>Join Chat</h2>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleConnect()}
            autoFocus
          />
          <button onClick={handleConnect} disabled={!username.trim()}>Connect</button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Chat Room</h2>
            <button onClick={handleDisconnect}>Disconnect</button>
          </div>
          <div style={{ marginBottom: 10 }}>
            <strong>Connected users:</strong> {users.map(u => u.username || u).join(', ')}
          </div>
          <div style={{ minHeight: 200, maxHeight: 300, overflowY: 'auto', background: '#f9f9f9', padding: 10, borderRadius: 4, marginBottom: 10 }}>
            {messages.map((msg, idx) => (
              <div key={msg.id || idx} style={{ color: msg.system ? '#888' : '#222', fontStyle: msg.system ? 'italic' : 'normal' }}>
                {msg.system ? (
                  <span>{msg.message}</span>
                ) : (
                  <>
                    <strong>{msg.username || 'Anonymous'}:</strong> {msg.message}
                  </>
                )}
              </div>
            ))}
          </div>
          {typingUsers.length > 0 && (
            <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>
              {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </div>
          )}
          <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={handleInputChange}
              onFocus={() => setTyping(input.length > 0)}
              onBlur={() => setTyping(false)}
              style={{ flex: 1 }}
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim()}>Send</button>
          </form>
        </>
      )}
      <div style={{ marginTop: 10, fontSize: 12, color: isConnected ? 'green' : 'red' }}>
        Status: {isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </div>
  );
};

export default Chat; 