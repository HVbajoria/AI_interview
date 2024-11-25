export interface Message {
  id: string;
  content: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

export interface InterviewState {
  isVideoOn: boolean;
  isAudioOn: boolean;
  isPaused: boolean;
  currentQuestionIndex: number;
}

export interface Question {
  id: string;
  text: string;
  category: 'technical' | 'behavioral' | 'scenario';
}