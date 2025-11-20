import React, { useState } from 'react';
import { UserHairProfile, StylistRecommendation } from '../types';
import { getHairConsultation } from '../services/geminiService';
import { Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

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
    <section id="consultant" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-gold-300 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Sparkles size={16} className="text-gold-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-stone-800">Powered by Gemini AI</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Virtual Hair Consultant</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Not sure what look suits you best? Let our advanced AI stylist analyze your profile and recommend the perfect cut and care routine.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 min-h-[500px] flex flex-col md:flex-row">
          
          {/* Left Side: Image/Visual */}
          <div className="w-full md:w-1/3 bg-stone-900 relative p-8 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                alt="Stylist Consult" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-gold-300 font-serif text-3xl italic mb-2">Personalized Artistry</h3>
              <p className="text-stone-300 text-sm">Technique tailored to your unique features.</p>
            </div>
            <div className="relative z-10 mt-12 md:mt-0">
              <div className="flex items-center gap-3 text-white/80 text-sm mb-2">
                <CheckCircle2 size={16} className="text-gold-500" />
                <span>Face Shape Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm mb-2">
                 <CheckCircle2 size={16} className="text-gold-500" />
                 <span>Texture Matching</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                 <CheckCircle2 size={16} className="text-gold-500" />
                 <span>Product Pairing</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form or Result */}
          <div className="w-full md:w-2/3 p-8 md:p-12 bg-white flex flex-col justify-center">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Hair Texture</label>
                    <select 
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      value={profile.hairType}
                      onChange={(e) => handleInputChange('hairType', e.target.value)}
                    >
                      <option value="">Select Texture</option>
                      <option value="Straight (Type 1)">Straight</option>
                      <option value="Wavy (Type 2)">Wavy</option>
                      <option value="Curly (Type 3)">Curly</option>
                      <option value="Coily (Type 4)">Coily</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Face Shape</label>
                    <select 
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      value={profile.faceShape}
                      onChange={(e) => handleInputChange('faceShape', e.target.value)}
                    >
                      <option value="">Select Shape</option>
                      <option value="Oval">Oval</option>
                      <option value="Round">Round</option>
                      <option value="Square">Square</option>
                      <option value="Heart">Heart</option>
                      <option value="Diamond">Diamond</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Current Length</label>
                    <select 
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      value={profile.hairLength}
                      onChange={(e) => handleInputChange('hairLength', e.target.value)}
                    >
                      <option value="">Select Length</option>
                      <option value="Short (Pixie/Bob)">Short</option>
                      <option value="Medium (Shoulder)">Medium</option>
                      <option value="Long (Below Shoulder)">Long</option>
                    </select>
                  </div>
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Primary Goal</label>
                    <select 
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      value={profile.goals}
                      onChange={(e) => handleInputChange('goals', e.target.value)}
                    >
                      <option value="">Select Goal</option>
                      <option value="Low Maintenance">Low Maintenance</option>
                      <option value="Volume & Body">Volume & Body</option>
                      <option value="Sleek & Shiny">Sleek & Shiny</option>
                      <option value="Bold Transformation">Bold Transformation</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center gap-2">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !profile.hairType || !profile.faceShape}
                  className={`w-full py-4 mt-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    isLoading 
                      ? 'bg-stone-200 text-stone-500 cursor-not-allowed' 
                      : 'bg-stone-900 text-white hover:bg-gold-600 hover:shadow-lg'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Analyzing Profile...
                    </>
                  ) : (
                    <>
                      Generate Recommendation
                      <Sparkles size={18} />
                    </>
                  )}
                </button>
              </div>
            )}

            {step === 2 && result && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-stone-100 pb-4">
                  <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-1 block">We Recommend</span>
                  <h3 className="font-serif text-4xl text-stone-900">{result.styleName}</h3>
                </div>
                
                <div>
                  <p className="text-stone-600 leading-relaxed text-lg">{result.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-stone-50 p-6 rounded-xl border border-stone-100">
                  <div>
                     <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 block">Why it works</span>
                     <p className="text-stone-800 text-sm font-medium">{result.reasoning}</p>
                  </div>
                  <div>
                     <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 block">Maintenance</span>
                     <p className="text-stone-800 text-sm font-medium">{result.maintenanceLevel}</p>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-3 block">Recommended Products</span>
                  <div className="flex flex-wrap gap-2">
                    {result.products.map((product, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-700 shadow-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={reset}
                  className="text-stone-500 hover:text-stone-900 text-sm font-medium underline decoration-gold-300 decoration-2 underline-offset-4 mt-4"
                >
                  Start New Consultation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;