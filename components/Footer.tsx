import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800 pb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
               <span className="font-serif text-2xl tracking-widest font-semibold text-white">
                CAROLINA
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-gold-500 mt-1">
                Hair Studios
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Elevating hair artistry through modern techniques and personalized care. Visit us for an experience that goes beyond the chair.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl italic text-stone-200">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span className="text-stone-400 text-sm">
                  123 Stylish Avenue, Suite 100<br/>
                  Charlotte, NC 28202
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <span className="text-stone-400 text-sm">(704) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl italic text-stone-200">Hours</h4>
            <div className="space-y-2 text-sm text-stone-400">
               <div className="flex justify-between border-b border-stone-800 pb-2">
                 <span>Tue - Fri</span>
                 <span>10:00 AM - 7:00 PM</span>
               </div>
               <div className="flex justify-between border-b border-stone-800 pb-2">
                 <span>Saturday</span>
                 <span>9:00 AM - 5:00 PM</span>
               </div>
               <div className="flex justify-between pt-2">
                 <span>Sun - Mon</span>
                 <span className="text-stone-600">Closed</span>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-stone-600 text-xs uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Carolina Hair Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;