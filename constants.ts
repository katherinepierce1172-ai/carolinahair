import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    name: "Precision Cut & Style",
    description: "A customized haircut designed to complement your face shape and hair texture. Includes wash and blowout.",
    price: "$85+",
    category: 'hair',
    image: "https://picsum.photos/id/64/800/600"
  },
  {
    id: '2',
    name: "Signature Balayage",
    description: "Hand-painted highlights for a natural, sun-kissed look with soft regrowth lines.",
    price: "$220+",
    category: 'color',
    image: "https://picsum.photos/id/338/800/600"
  },
  {
    id: '3',
    name: "Keratin Smoothing Treatment",
    description: "Eliminates frizz and increases manageability. Leaves hair silky and shiny for up to 4 months.",
    price: "$300+",
    category: 'treatment',
    image: "https://picsum.photos/id/325/800/600"
  },
  {
    id: '4',
    name: "Full Foil Highlight",
    description: "Traditional foil highlights for maximum brightness and dimension from root to end.",
    price: "$185+",
    category: 'color',
    image: "https://picsum.photos/id/129/800/600"
  },
  {
    id: '5',
    name: "Luxury Blowout",
    description: "Wash, scalp massage, and professional round-brush styling for volume and shine.",
    price: "$55+",
    category: 'styling',
    image: "https://picsum.photos/id/177/800/600"
  },
  {
    id: '6',
    name: "Gloss & Toner",
    description: "Refresh your color and add incredible shine in between full color services.",
    price: "$60+",
    category: 'color',
    image: "https://picsum.photos/id/433/800/600"
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'AI Consultant', href: '#consultant' },
  { label: 'Book Now', href: '#book' },
];