import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { AppView } from '../types';

interface HeroProps {
  onBookNow: () => void;
  onConsult: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, onConsult }) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
          alt="Modern Salon Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/90 via-stone-100/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
            <div className="flex text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500">Rated #1 in Carolina</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[1.1] mb-6">
            Redefining <br/>
            <span className="italic text-gold-700">Modern Beauty</span>
          </h1>
          
          <p className="text-stone-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            Experience expert artistry in a space designed for your comfort. From precision cuts to transformative color, we bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookNow}
              className="px-8 py-4 bg-stone-900 text-white font-medium tracking-wider hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group"
            >
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={onConsult}
              className="px-8 py-4 bg-white border border-stone-300 text-stone-900 font-medium tracking-wider hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
            >
               <span>✨ AI Style Consultant</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;