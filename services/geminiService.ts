
import { GoogleGenAI, Type } from "@google/genai";
import type { CoffeeRecipe } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const recipeSchema = {
  type: Type.OBJECT,
  properties: {
    grindSetting: { 
      type: Type.STRING, 
      description: 'The recommended grind size for the coffee beans, e.g., "Medium-fine, like table salt".' 
    },
    waterTemperatureCelsius: { 
      type: Type.NUMBER, 
      description: 'The ideal water temperature in degrees Celsius.' 
    },
    coffeeWeightGrams: { 
      type: Type.NUMBER, 
      description: 'The weight of the coffee grounds in grams.' 
    },
    waterVolumeML: { 
      type: Type.NUMBER, 
      description: 'The total volume of water to use in milliliters.' 
    },
    brewingNotes: {
      type: Type.STRING,
      description: 'A brief, actionable tip for the brewing process, like "Bloom for 45 seconds with 50ml of water." or "Pour in slow concentric circles."'
    },
  },
  required: ['grindSetting', 'waterTemperatureCelsius', 'coffeeWeightGrams', 'waterVolumeML', 'brewingNotes'],
};

export const getPourOverRecipe = async (coffeeType: string): Promise<CoffeeRecipe> => {
  const prompt = `You are a world-class barista specializing in pour-over coffee. Your task is to provide the ideal pour-over recipe for a single cup (around 250-300ml) based on the user's coffee description.

Coffee description: "${coffeeType}"

Generate a precise recipe.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const recipe = JSON.parse(jsonText) as CoffeeRecipe;
    return recipe;

  } catch (error) {
    console.error("Error fetching recipe from Gemini API:", error);
    throw new Error("Could not generate a recipe. The AI may be experiencing issues. Please try again later.");
  }
};
