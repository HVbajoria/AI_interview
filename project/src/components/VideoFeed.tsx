import React from 'react';
import { Camera, CameraOff, Mic, MicOff } from 'lucide-react';

interface VideoFeedProps {
  isVideoOn: boolean;
  isAudioOn: boolean;
  onToggleVideo: () => void;
  onToggleAudio: () => void;
}

export function VideoFeed({ isVideoOn, isAudioOn, onToggleVideo, onToggleAudio }: VideoFeedProps) {
  return (
    <div className="relative w-72 aspect-video bg-gray-900 rounded-lg overflow-hidden">
      {isVideoOn ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <CameraOff className="w-12 h-12 text-gray-400" />
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
        <button
          onClick={onToggleVideo}
          className="p-2 rounded-full bg-gray-800/90 hover:bg-gray-700 transition-colors"
        >
          {isVideoOn ? (
            <Camera className="w-5 h-5 text-white" />
          ) : (
            <CameraOff className="w-5 h-5 text-white" />
          )}
        </button>
        <button
          onClick={onToggleAudio}
          className="p-2 rounded-full bg-gray-800/90 hover:bg-gray-700 transition-colors"
        >
          {isAudioOn ? (
            <Mic className="w-5 h-5 text-white" />
          ) : (
            <MicOff className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}