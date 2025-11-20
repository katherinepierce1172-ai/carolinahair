import { GoogleGenAI, Type } from "@google/genai";
import { StylistRecommendation, UserHairProfile } from '../types';

const apiKey = process.env.API_KEY;
// Initialize safely
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getHairConsultation = async (profile: UserHairProfile): Promise<StylistRecommendation | null> => {
  if (!ai) {
    console.error("API Key missing");
    return {
      styleName: "Demo Mode - API Key Missing",
      description: "Please configure your API key to get real AI recommendations.",
      maintenanceLevel: "N/A",
      reasoning: "System check failed.",
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

    if (response.text) {
      return JSON.parse(response.text) as StylistRecommendation;
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};