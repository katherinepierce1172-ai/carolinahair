import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    name: "Precision Cut & Style",
    description: "A customized haircut designed to complement your face shape and hair texture. Includes wash and blowout.",
    price: "$85+",
    category: 'hair',
    image: "https://images.unsplash.com/photo-1620331313123-6ccada2f7601?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '2',
    name: "Signature Balayage",
    description: "Hand-painted highlights for a natural, sun-kissed look with soft regrowth lines.",
    price: "$220+",
    category: 'color',
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '3',
    name: "Keratin Smoothing",
    description: "Eliminates frizz and increases manageability. Leaves hair silky and shiny for up to 4 months.",
    price: "$300+",
    category: 'treatment',
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '4',
    name: "Full Foil Highlight",
    description: "Traditional foil highlights for maximum brightness and dimension from root to end.",
    price: "$185+",
    category: 'color',
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '5',
    name: "Luxury Blowout",
    description: "Wash, scalp massage, and professional round-brush styling for volume and shine.",
    price: "$55+",
    category: 'styling',
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '6',
    name: "Gloss & Toner",
    description: "Refresh your color and add incredible shine in between full color services.",
    price: "$60+",
    category: 'color',
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop"
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'AI Consultant', href: '#consultant' },
  { label: 'Book Now', href: '#book' },
];