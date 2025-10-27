
import React, { useState, useCallback } from 'react';
import type { CoffeeRecipe } from './types';
import { getPourOverRecipe } from './services/geminiService';
import { RecipeDisplay } from './components/RecipeDisplay';
import { CoffeeInputForm } from './components/CoffeeInputForm';
import { Loader } from './components/Loader';
import { CoffeeBeansIcon } from './components/icons/CoffeeBeansIcon';
import { ErrorDisplay } from './components/ErrorDisplay';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  const [coffeeType, setCoffeeType] = useState<string>('Light roast Ethiopian Yirgacheffe');
  const [recipe, setRecipe] = useState<CoffeeRecipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecipe = useCallback(async () => {
    if (!coffeeType.trim()) {
      setError('Please describe your coffee beans.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const result = await getPourOverRecipe(coffeeType);
      setRecipe(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [coffeeType]);

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-800 antialiased">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          
          <div className="flex items-center gap-4 mb-4">
            <CoffeeBeansIcon className="w-12 h-12 text-stone-500" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              Pour Over Pal
            </h1>
          </div>
          <p className="text-lg text-stone-600 mb-8">
            Describe your coffee. We'll craft the perfect pour-over recipe for you.
          </p>

          <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300">
            <CoffeeInputForm
              coffeeType={coffeeType}
              setCoffeeType={setCoffeeType}
              onSubmit={handleGetRecipe}
              isLoading={isLoading}
            />

            <div className="mt-8">
              {isLoading && <Loader />}
              {error && <ErrorDisplay message={error} />}
              {recipe && !isLoading && <RecipeDisplay recipe={recipe} />}
              {!isLoading && !recipe && !error && <Hero />}
            </div>
          </div>
          
          <footer className="mt-12 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pour Over Pal. Perfect brew, powered by AI.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
