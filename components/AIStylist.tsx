import React, { useState } from 'react';
import { UserHairProfile, StylistRecommendation } from '../types';
import { getHairConsultation } from '../services/geminiService';
import { Sparkles, Loader2, User, Ruler, Smile, Target, ArrowRight, RefreshCcw, Scissors } from 'lucide-react';

const AIStylist: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserHairProfile>({
    hairType: '',
    faceShape: '',
    hairLength: '',
    goals: ''
  });
  const [result, setResult] = useState<StylistRecommendation | null>(null);

  const handleInputChange = (field: keyof UserHairProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const recommendation = await getHairConsultation(profile);
      if (recommendation) {
        setResult(recommendation);
        setStep(2);
      } else {
        setError("Could not generate a recommendation. Please try again.");
      }
    } catch (err) {
        console.error(err);
      setError("An error occurred while connecting to our stylist AI.");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setStep(1);
    setResult(null);
    setProfile({ hairType: '', faceShape: '', hairLength: '', goals: '' });
  };

  return (
    <section id="consultant" className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Background Art */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500 rounded-full mix-blend-overlay blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-500 rounded-full mix-blend-overlay blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/3 text-white">
            <div className="flex items-center gap-2 text-gold-500 mb-6">
              <Sparkles size={20} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase">AI-Powered Styling</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl mb-6 leading-none">
              Find Your <br/>
              <span className="text-stone-400 italic">Signature Look</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Our intelligent consultant analyzes your unique features to propose a style that isn't just trendy—it's unmistakably you.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-800">
              <div>
                <span className="block text-2xl font-serif text-white mb-1">01</span>
                <span className="text-xs uppercase tracking-wider text-stone-500">Analyze Profile</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-white mb-1">02</span>
                <span className="text-xs uppercase tracking-wider text-stone-500">Tailored Cut</span>
              </div>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
              
              {/* Card Header */}
              <div className="bg-stone-50 border-b border-stone-100 p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-gold-500">
                     <Scissors size={20} />
                   </div>
                   <div>
                     <h3 className="font-serif text-xl text-stone-900">Consultation Suite</h3>
                     <p className="text-xs text-stone-500 uppercase tracking-wider">Virtual Stylist</p>
                   </div>
                </div>
                {step === 2 && (
                  <button onClick={reset} className="text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-stone-900 flex items-center gap-1 transition-colors">
                    <RefreshCcw size={14} /> Reset
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                {step === 1 && (
                  <div className="animate-fade-in space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                          <User size={14} /> Hair Texture
                        </label>
                        <select 
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-4 text-stone-900 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:bg-stone-100"
                          value={profile.hairType}
                          onChange={(e) => handleInputChange('hairType', e.target.value)}
                        >
                          <option value="">Select Texture...</option>
                          <option value="Straight (Type 1)">Straight</option>
                          <option value="Wavy (Type 2)">Wavy</option>
                          <option value="Curly (Type 3)">Curly</option>
                          <option value="Coily (Type 4)">Coily</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                          <Smile size={14} /> Face Shape
                        </label>
                        <select 
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-4 text-stone-900 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:bg-stone-100"
                          value={profile.faceShape}
                          onChange={(e) => handleInputChange('faceShape', e.target.value)}
                        >
                          <option value="">Select Shape...</option>
                          <option value="Oval">Oval</option>
                          <option value="Round">Round</option>
                          <option value="Square">Square</option>
                          <option value="Heart">Heart</option>
                          <option value="Diamond">Diamond</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                          <Ruler size={14} /> Current Length
                        </label>
                        <select 
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-4 text-stone-900 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:bg-stone-100"
                          value={profile.hairLength}
                          onChange={(e) => handleInputChange('hairLength', e.target.value)}
                        >
                          <option value="">Select Length...</option>
                          <option value="Short (Pixie/Bob)">Short</option>
                          <option value="Medium (Shoulder)">Medium</option>
                          <option value="Long (Below Shoulder)">Long</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                          <Target size={14} /> Primary Goal
                        </label>
                        <select 
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-4 text-stone-900 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:bg-stone-100"
                          value={profile.goals}
                          onChange={(e) => handleInputChange('goals', e.target.value)}
                        >
                          <option value="">Select Goal...</option>
                          <option value="Low Maintenance">Low Maintenance</option>
                          <option value="Volume & Body">Volume & Body</option>
                          <option value="Sleek & Shiny">Sleek & Shiny</option>
                          <option value="Bold Transformation">Bold Transformation</option>
                        </select>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
                        {error}
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading || !profile.hairType || !profile.faceShape}
                      className={`w-full py-5 mt-4 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                        isLoading 
                          ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                          : 'bg-stone-900 text-white hover:bg-gold-600 hover:shadow-xl transform hover:-translate-y-1'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Analyzing Features...
                        </>
                      ) : (
                        <>
                          Generate My Look
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                )}

                {step === 2 && result && (
                  <div className="animate-scale-in h-full flex flex-col">
                    <div className="text-center mb-8">
                      <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        Highly Recommended
                      </span>
                      <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
                        {result.styleName}
                      </h3>
                      <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {result.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                        <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 block">Stylist's Notes</span>
                        <p className="text-stone-800 font-medium leading-relaxed">{result.reasoning}</p>
                      </div>
                      <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col justify-between">
                         <div>
                            <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 block">Maintenance</span>
                            <p className="text-stone-800 font-medium">{result.maintenanceLevel}</p>
                         </div>
                         <div className="mt-4">
                            <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 block">Essential Products</span>
                            <div className="flex flex-wrap gap-2">
                              {result.products.map((p, i) => (
                                <span key={i} className="text-xs font-semibold bg-white border border-stone-200 px-2 py-1 rounded-md text-stone-600">
                                  {p}
                                </span>
                              ))}
                            </div>
                         </div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-stone-800 transition-colors">
                      Book This Look
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;