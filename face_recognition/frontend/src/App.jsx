import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/RegistrationTab';
import LiveRecognition from './components/LiveRecognitionTab';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Face Recognition Platform</h1>
          <nav className="nav-bar">
            <Link to="/">Register</Link>
            <Link to="/recognition">Live Recognition</Link>
            <Link to="/chat">Chat Q&A</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/recognition" element={<LiveRecognition />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
