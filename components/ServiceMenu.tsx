import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ServiceMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories = ['all', 'hair', 'color', 'treatment', 'styling'];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Our Services</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Tailored treatments designed to enhance your natural beauty and maintain the health of your hair.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-stone-900">
                  {service.price}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl text-stone-900 group-hover:text-gold-700 transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                <button className="mt-auto w-full py-3 border-t border-stone-100 flex items-center justify-between text-stone-800 font-medium text-sm uppercase tracking-wider group-hover:text-gold-700 transition-colors">
                  Book This Service
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMenu;