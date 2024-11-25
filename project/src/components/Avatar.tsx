import React from 'react';
import { Bot } from 'lucide-react';

export function Avatar() {
  return (
    <div className="relative aspect-video bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Bot className="w-24 h-24 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
        <p className="text-white text-center text-sm">
          AI Interviewer is speaking...
        </p>
      </div>
    </div>
  );
}