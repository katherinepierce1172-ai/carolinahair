import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceMenu from './components/ServiceMenu';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewChange = (view: AppView) => {
    setCurrentView(view);
    if (view === AppView.HOME) window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === AppView.SERVICES) scrollToSection('services');
    if (view === AppView.CONSULTANT) scrollToSection('consultant');
    if (view === AppView.BOOKING) {
      // In a real app, this might open a modal or redirect
      alert("Booking system integration placeholder.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-gold-200 selection:text-stone-900">
      <Header currentView={currentView} onChangeView={handleViewChange} />
      
      <main className="flex-grow">
        <Hero 
          onBookNow={() => handleViewChange(AppView.BOOKING)} 
          onConsult={() => handleViewChange(AppView.CONSULTANT)}
        />
        
        <ServiceMenu />
        
        <AIStylist />
      
        {/* Testimonials Section (Simple inline for now to save file count) */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl italic mb-12">Client Love</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-800/50 p-8 rounded-xl">
                <p className="text-stone-300 italic mb-4">"Absolutely transformed my hair. The balayage is perfect."</p>
                <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">- Sarah M.</span>
              </div>
              <div className="bg-stone-800/50 p-8 rounded-xl">
                <p className="text-stone-300 italic mb-4">"The AI consultant suggestion was spot on. I love my new bob!"</p>
                <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">- Emily R.</span>
              </div>
              <div className="bg-stone-800/50 p-8 rounded-xl">
                <p className="text-stone-300 italic mb-4">"Best salon experience in Charlotte. Professional and chic."</p>
                <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">- Jessica T.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;