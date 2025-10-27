
import React from 'react';
import { InfoIcon } from './icons/InfoIcon';

export const Hero: React.FC = () => {
  return (
    <div className="text-center p-6 bg-stone-50 rounded-lg animate-fade-in">
        <InfoIcon className="w-10 h-10 mx-auto text-stone-400 mb-3" />
        <h3 className="text-lg font-semibold text-stone-700">Your Perfect Cup Awaits</h3>
        <p className="text-stone-500 mt-1">Enter a description of your coffee beans above to generate a custom pour-over recipe.</p>
        <p className="text-sm text-stone-400 mt-4">
            Try being specific! Mention roast level (light, medium, dark), origin (Ethiopian, Colombian), or flavor notes (fruity, chocolaty).
        </p>
    </div>
  );
};
