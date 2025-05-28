import React, { useRef } from 'react';
import axios from 'axios';

const RegistrationTab = () => {
  const videoRef = useRef(null);

  const handleRegister = async () => {
    const name = prompt('Enter your name:');
    if (name) {
      // Capture image from webcam and send to backend
      // For simplicity, assuming backend handles image capture
      await axios.post('http://localhost:5000/register', { name });
    }
  };

  return (
    <div>
      <h2>Register Face</h2>
      <video ref={videoRef} autoPlay></video>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationTab;
