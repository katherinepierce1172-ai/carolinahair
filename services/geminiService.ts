import { GoogleGenAI, Type } from "@google/genai";
import { StylistRecommendation, UserHairProfile } from '../types';

// Safely access process.env to avoid ReferenceError in some browser environments
const getApiKey = () => {
  try {
    return process.env.API_KEY;
  } catch (e) {
    console.warn("process.env not available");
    return undefined;
  }
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getHairConsultation = async (profile: UserHairProfile): Promise<StylistRecommendation | null> => {
  if (!ai) {
    console.error("API Key missing - GoogleGenAI client not initialized");
    return {
      styleName: "Demo Mode - API Key Missing",
      description: "Please configure your API key in the environment variables to get real AI recommendations.",
      maintenanceLevel: "N/A",
      reasoning: "System check failed: API Key not found.",
      products: ["Configuration needed"]
    };
  }

  const prompt = `
    Act as a world-class senior hair stylist at a luxury salon.
    Based on the following client profile, suggest the PERFECT hairstyle and care routine.
    
    Client Profile:
    - Hair Type: ${profile.hairType}
    - Face Shape: ${profile.faceShape}
    - Current Length: ${profile.hairLength}
    - Hair Goals: ${profile.goals}

    Provide a sophisticated, trendy, and personalized recommendation.
    Ensure the tone is professional, encouraging, and high-end.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            styleName: { type: Type.STRING, description: "A catchy, trendy name for the recommended style" },
            description: { type: Type.STRING, description: "Detailed description of the cut and style" },
            maintenanceLevel: { type: Type.STRING, description: "Low, Medium, or High with brief explanation" },
            reasoning: { type: Type.STRING, description: "Why this suits their face shape and hair type specifically" },
            products: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of 3 key products to maintain this look"
            }
          },
          required: ["styleName", "description", "maintenanceLevel", "reasoning", "products"]
        }
      }
    });

    const text = response.text;
    if (text) {
      // Robust parsing: extract JSON object by finding first '{' and last '}'
      // This handles cases where the model adds markdown (```json) or conversational intro text
      const firstOpen = text.indexOf('{');
      const lastClose = text.lastIndexOf('}');
      
      if (firstOpen !== -1 && lastClose !== -1) {
        const jsonStr = text.substring(firstOpen, lastClose + 1);
        return JSON.parse(jsonStr) as StylistRecommendation;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};