import React, { useState } from 'react';
import CallPreview from './components/CallPreview';
import VideoCallInterface from './components/VideoCallInterface';

function App() {
  const [isInCall, setIsInCall] = useState(false);

  const handleStartCall = () => {
    setIsInCall(true);
  };

  const handleEndCall = () => {
    setIsInCall(false);
  };

  return (
    <div className="App">
      {isInCall ? (
        <VideoCallInterface onCallEnd={handleEndCall} />
      ) : (
        <CallPreview onStartCall={handleStartCall} />
      )}
    </div>
  );
}

export default App;