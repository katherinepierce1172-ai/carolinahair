export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'hair' | 'color' | 'treatment' | 'styling';
  image?: string;
}

export interface StylistRecommendation {
  styleName: string;
  description: string;
  maintenanceLevel: string;
  reasoning: string;
  products: string[];
}

export interface UserHairProfile {
  hairType: string; // straight, wavy, curly, coily
  faceShape: string; // oval, round, square, heart
  hairLength: string; // short, medium, long
  goals: string; // volume, sleekness, easy maintenance
}

export enum AppView {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  CONSULTANT = 'CONSULTANT',
  BOOKING = 'BOOKING'
}