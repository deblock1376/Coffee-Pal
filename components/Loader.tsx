
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};
