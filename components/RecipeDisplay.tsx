
import React from 'react';
import type { CoffeeRecipe } from '../types';
import { GrindIcon } from './icons/GrindIcon';
import { TemperatureIcon } from './icons/TemperatureIcon';
import { WeightIcon } from './icons/WeightIcon';
import { WaterDropIcon } from './icons/WaterDropIcon';
import { NoteIcon } from './icons/NoteIcon';

interface RecipeDisplayProps {
  recipe: CoffeeRecipe;
}

const RecipeCard: React.FC<{ icon: React.ReactNode; title: string; value: string; unit: string }> = ({ icon, title, value, unit }) => (
  <div className="bg-stone-50 rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105 duration-200">
    <div className="text-stone-500 mb-2">{icon}</div>
    <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">{title}</h3>
    <p className="text-2xl font-bold text-stone-900">{value}<span className="text-lg font-normal text-stone-500 ml-1">{unit}</span></p>
  </div>
);

export const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RecipeCard 
          icon={<GrindIcon className="w-8 h-8"/>} 
          title="Grind" 
          value={recipe.grindSetting}
          unit=""
        />
        <RecipeCard 
          icon={<TemperatureIcon className="w-8 h-8"/>} 
          title="Temp" 
          value={recipe.waterTemperatureCelsius.toString()}
          unit="°C"
        />
        <RecipeCard 
          icon={<WeightIcon className="w-8 h-8"/>} 
          title="Coffee" 
          value={recipe.coffeeWeightGrams.toString()}
          unit="g"
        />
        <RecipeCard 
          icon={<WaterDropIcon className="w-8 h-8"/>} 
          title="Water" 
          value={recipe.waterVolumeML.toString()}
          unit="ml"
        />
      </div>
      <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-800 p-4 rounded-r-lg" role="alert">
        <div className="flex">
          <div className="py-1"><NoteIcon className="w-6 h-6 mr-3 text-amber-500" /></div>
          <div>
            <p className="font-bold">Barista's Note</p>
            <p className="text-sm">{recipe.brewingNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
