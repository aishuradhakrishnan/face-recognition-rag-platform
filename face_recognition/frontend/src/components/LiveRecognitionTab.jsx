import React, { useEffect, useRef } from 'react';

const LiveRecognitionTab = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start video stream and display recognized faces
    // For simplicity, assuming backend handles recognition and overlays
  }, []);

  return (
    <div>
      <h2>Live Recognition</h2>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
};

export default LiveRecognitionTab;
