import React, { useState } from 'react';
import { Avatar } from './components/Avatar';
import { VideoFeed } from './components/VideoFeed';
import { ChatSidebar } from './components/ChatSidebar';
import { InterviewControls } from './components/InterviewControls';
import type { Message, InterviewState } from './types';

const MOCK_QUESTIONS = [
  {
    id: '1',
    text: 'Tell me about yourself and your background.',
    category: 'behavioral',
  },
  {
    id: '2',
    text: 'What interests you about this position?',
    category: 'behavioral',
  },
  {
    id: '3',
    text: 'Describe a challenging project you worked on.',
    category: 'scenario',
  },
] as const;

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome to your AI interview! Are you ready to begin?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const [interviewState, setInterviewState] = useState<InterviewState>({
    isVideoOn: false,
    isAudioOn: false,
    isPaused: false,
    currentQuestionIndex: 0,
  });

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleToggleVideo = () => {
    setInterviewState((prev) => ({
      ...prev,
      isVideoOn: !prev.isVideoOn,
    }));
  };

  const handleToggleAudio = () => {
    setInterviewState((prev) => ({
      ...prev,
      isAudioOn: !prev.isAudioOn,
    }));
  };

  const handleTogglePause = () => {
    setInterviewState((prev) => ({
      ...prev,
      isPaused: !prev.isPaused,
    }));
  };

  const handleSkipQuestion = () => {
    setInterviewState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.min(
        prev.currentQuestionIndex + 1,
        MOCK_QUESTIONS.length - 1
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Interview Simulator</h1>
          <p className="text-gray-600">Practice your interview skills with our AI interviewer</p>
        </header>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <Avatar />
            
            <InterviewControls
              isPaused={interviewState.isPaused}
              onTogglePause={handleTogglePause}
              onSkipQuestion={handleSkipQuestion}
              currentQuestion={interviewState.currentQuestionIndex}
              totalQuestions={MOCK_QUESTIONS.length}
            />

            <div className="fixed bottom-8 right-8">
              <VideoFeed
                isVideoOn={interviewState.isVideoOn}
                isAudioOn={interviewState.isAudioOn}
                onToggleVideo={handleToggleVideo}
                onToggleAudio={handleToggleAudio}
              />
            </div>
          </div>

          <div className="h-[calc(100vh-12rem)]">
            <ChatSidebar messages={messages} onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;