
import React from 'react';

interface CoffeeInputFormProps {
  coffeeType: string;
  setCoffeeType: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const CoffeeInputForm: React.FC<CoffeeInputFormProps> = ({ coffeeType, setCoffeeType, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <input
        type="text"
        value={coffeeType}
        onChange={(e) => setCoffeeType(e.target.value)}
        placeholder="e.g., Medium roast Kenyan, single origin"
        className="w-full px-4 py-3 text-lg border-2 border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 disabled:opacity-50"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto bg-stone-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-800 transition-colors duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? 'Brewing...' : 'Get Recipe'}
      </button>
    </form>
  );
};
