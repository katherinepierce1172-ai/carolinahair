import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const ServiceMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories = ['all', 'hair', 'color', 'treatment', 'styling'];

  return (
    <section className="py-32 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Menu</span>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-tight">
              Curated Services
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-sm mb-6">
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors z-10 duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-serif font-medium text-stone-900">
                  {service.price}
                </div>
              </div>
              
              <div className="flex flex-col border-l-2 border-transparent group-hover:border-gold-500 pl-0 group-hover:pl-4 transition-all duration-300">
                <h3 className="font-serif text-2xl text-stone-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-gold-600 transition-colors">
                  Book Now <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMenu;