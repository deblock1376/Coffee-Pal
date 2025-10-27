
import React from 'react';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-r-lg animate-fade-in" role="alert">
      <div className="flex">
        <div className="py-1">
          <AlertTriangleIcon className="w-6 h-6 mr-3 text-red-500"/>
        </div>
        <div>
          <p className="font-bold">Oops!</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
