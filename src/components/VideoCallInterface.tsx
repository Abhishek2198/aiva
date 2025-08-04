import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  PhoneOff, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Settings,
  Maximize2,
  Minimize2,
  AlertCircle
} from 'lucide-react';
import { CallState, TavusConversation } from '../types/tavus';
import { createTavusConversation, endConversation } from '../services/tavusApi';

interface VideoCallInterfaceProps {
  onCallEnd: () => void;
}

const VideoCallInterface: React.FC<VideoCallInterfaceProps> = ({ onCallEnd }) => {
  const [callState, setCallState] = useState<CallState>({
    isConnected: false,
    isLoading: false,
    error: null,
    conversation: null,
    isMuted: false,
    isVideoEnabled: true,
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isEnding, setIsEnding] = useState(false);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const tavusIframeRef = useRef<HTMLIFrameElement>(null);
  const callStartTime = useRef<number>(0);
  const durationInterval = useRef<NodeJS.Timeout>();

  // Ref to prevent double API calls in React StrictMode
  const isInitializing = useRef(false);

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (!isInitializing.current) {
      isInitializing.current = true;
      initializeCall();
    }
    
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (callState.isConnected && callStartTime.current === 0) {
      callStartTime.current = Date.now();
      durationInterval.current = setInterval(() => {
        setCallDuration(Math.floor((Date.now() - callStartTime.current) / 1000));
      }, 1000);
    }

    return () => {
      if (durationInterval.current) {
        clearInterval(durationInterval.current);
      }
    };
  }, [callState.isConnected]);

  const cleanup = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    if (durationInterval.current) {
      clearInterval(durationInterval.current);
    }
  };

  const initializeCall = async () => {
    // Additional safety check
    if (callState.isLoading || callState.isConnected) {
      return;
    }
    
    setCallState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Request user media permissions
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      setLocalStream(stream);
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      // Create Tavus conversation
      const conversation = await createTavusConversation();
      
      setCallState(prev => ({
        ...prev,
        isConnected: true,
        isLoading: false,
        conversation,
      }));

      // Load Tavus conversation in iframe
      if (tavusIframeRef.current && conversation.conversation_url) {
        tavusIframeRef.current.src = conversation.conversation_url;
      }
      
    } catch (error: any) {
      console.error('Error initializing call:', error);
      let errorMessage = 'Failed to connect to Pooja. Please try again.';
      
      if (error.name === 'NotAllowedError') {
        errorMessage = 'Camera and microphone permissions are required for video calls.';
      } else if (error.name === 'NotFoundError') {
        errorMessage = 'No camera or microphone found. Please check your devices.';
      } else if (error.message && error.message.includes('maximum concurrent conversations')) {
        errorMessage = 'There is already an active conversation on your Tavus account. Please end any existing conversations in your Tavus portal before starting a new call, or wait a few minutes and try again.';
      }
      
      setCallState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    }
  };

  const handleEndCall = async () => {
    if (isEnding) return;
    
    setIsEnding(true);
    
    try {
      if (callState.conversation) {
        await endConversation(callState.conversation.conversation_id);
      }
    } catch (error) {
      console.error('Error ending conversation:', error);
    } finally {
      cleanup();
      onCallEnd();
    }
  };

  const toggleMute = () => {
    if (localStream) {
      const audioTracks = localStream.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = callState.isMuted;
      });
      setCallState(prev => ({ ...prev, isMuted: !prev.isMuted }));
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTracks = localStream.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = !callState.isVideoEnabled;
      });
      setCallState(prev => ({ ...prev, isVideoEnabled: !prev.isVideoEnabled }));
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (callState.isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Connecting to Dr. Sarah Johnson...</p>
          <p className="text-white/70 text-sm mt-2">Your Dental Care Specialist</p>
          <p className="text-white/50 text-xs mt-4">Requesting camera and microphone permissions...</p>
        </div>
      </div>
    );
  }

  if (callState.error) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center z-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <p className="text-white text-xl mb-4">{callState.error}</p>
          <div className="space-y-3">
            <button
              onClick={initializeCall}
              className="bg-white text-red-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Try Again
            </button>
            <button
              onClick={onCallEnd}
              className="block w-full text-white/80 hover:text-white transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Main Video Area */}
      <div className="relative w-full h-full">
        {/* Tavus AI Video (Remote) */}
        <div className="absolute inset-0">
          {callState.conversation?.conversation_url ? (
            <iframe
              ref={tavusIframeRef}
              src={callState.conversation.conversation_url}
              className="w-full h-full border-0"
              allow="camera; microphone; fullscreen"
              title="Tavus AI Video Call"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                    alt="Pooja - Travel Agent"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-white text-2xl font-semibold">Pooja</h2>
                <p className="text-white/80 text-lg">Asian Paints Kitchen Expert</p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">Connecting...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Local Video (User) */}
     

        {/* Call Info */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm">{formatDuration(callDuration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-6">
          <div className="flex items-center justify-center space-x-4">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              disabled={isEnding}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 ${
                callState.isMuted 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {callState.isMuted ? (
                <MicOff className="w-6 h-6 text-white" />
              ) : (
                <Mic className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Video Toggle */}
            <button
              onClick={toggleVideo}
              disabled={isEnding}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 ${
                !callState.isVideoEnabled 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {callState.isVideoEnabled ? (
                <Video className="w-6 h-6 text-white" />
              ) : (
                <VideoOff className="w-6 h-6 text-white" />
              )}
            </button>

            {/* End Call Button */}
            <button
              onClick={handleEndCall}
              disabled={isEnding}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 flex items-center justify-center transition-all duration-200 transform hover:scale-105 disabled:scale-100"
            >
              {isEnding ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <PhoneOff className="w-8 h-8 text-white" />
              )}
            </button>

            {/* Settings Button */}
            <button 
              disabled={isEnding}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 flex items-center justify-center transition-all duration-200"
            >
              <Settings className="w-6 h-6 text-white" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              disabled={isEnding}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 flex items-center justify-center transition-all duration-200"
            >
              {isFullscreen ? (
                <Minimize2 className="w-6 h-6 text-white" />
              ) : (
                <Maximize2 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallInterface;