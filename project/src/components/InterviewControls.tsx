import React from 'react';
import { Play, Pause, SkipForward, MessageSquare } from 'lucide-react';

interface InterviewControlsProps {
  isPaused: boolean;
  onTogglePause: () => void;
  onSkipQuestion: () => void;
  currentQuestion: number;
  totalQuestions: number;
}

export function InterviewControls({
  isPaused,
  onTogglePause,
  onSkipQuestion,
  currentQuestion,
  totalQuestions,
}: InterviewControlsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Interview Controls</h3>
        <span className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onTogglePause}
          className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {isPaused ? (
            <>
              <Play className="w-4 h-4" />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          )}
        </button>
        
        <button
          onClick={onSkipQuestion}
          className="flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <SkipForward className="w-4 h-4" />
          <span>Skip</span>
        </button>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}