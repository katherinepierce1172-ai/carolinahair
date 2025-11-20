import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
  onConsult: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, onConsult }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-stone-50">
      {/* Split Layout Background */}
      <div className="absolute inset-0 flex flex-col md:flex-row z-0">
        <div className="w-full md:w-1/2 bg-stone-100 relative hidden md:block">
             {/* Decorative Elements */}
             <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-stone-100 to-transparent z-10"></div>
        </div>
        <div className="w-full md:w-1/2 h-full relative">
           <div className="absolute inset-0 bg-stone-900/10 z-10 md:hidden"></div>
           <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1920&auto=format&fit=crop" 
            alt="Editorial Hair Model" 
            className="w-full h-full object-cover object-top animate-scale-in"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
        <div className="w-full md:w-1/2 pt-20 md:pt-0">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-px w-8 bg-gold-500"></div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold-600">Est. 2024</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.95] mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
              Artistry <br/>
              <span className="italic font-light text-stone-600">in motion.</span>
            </h1>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-md animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
              Experience a sanctuary where modern technique meets timeless beauty. We craft styles that are uniquely yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
              <button 
                onClick={onBookNow}
                className="group px-8 py-4 bg-stone-900 text-white text-sm font-medium tracking-widest uppercase hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Book Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onConsult}
                className="group px-8 py-4 bg-transparent border border-stone-300 text-stone-900 text-sm font-medium tracking-widest uppercase hover:border-stone-900 hover:bg-stone-50 transition-all duration-300"
              >
                 AI Consultation
              </button>
            </div>

            <div className="mt-16 flex items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
               <div className="flex -space-x-3">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client"/>
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client"/>
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client"/>
               </div>
               <div className="flex flex-col">
                 <div className="flex text-gold-500 mb-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                 </div>
                 <span className="text-xs text-stone-500 font-medium"><span className="font-bold text-stone-900">4.9/5</span> from 500+ reviews</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;