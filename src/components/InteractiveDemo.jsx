import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, RefreshCcw, CheckCircle2, ChevronRight } from 'lucide-react';

const InteractiveDemo = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Scanning, 2: Result
  const [activeFood, setActiveFood] = useState(0);

  const foods = [
    { name: "Greek Salad", calories: 342, protein: 12, carbs: 18, fat: 24, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop" },
    { name: "Grilled Salmon", calories: 485, protein: 42, carbs: 0, fat: 34, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop" },
    { name: "Avocado Toast", calories: 290, protein: 9, carbs: 32, fat: 18, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop" }
  ];

  const handleScan = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 2000);
  };

  const reset = () => {
    setStep(0);
    setActiveFood((prev) => (prev + 1) % foods.length);
  };

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">See the AI <span className="text-primary italic">in action.</span></h2>
            <div className="space-y-6">
              {[
                { title: "Point & Snap", text: "Take a photo of any meal, snack, or drink." },
                { title: "AI Analysis", text: "Our neural engine identifies ingredients instantly." },
                { title: "Auto-Log", text: "Macros and calories are added to your day automatically." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={step === 2 ? reset : handleScan}
              disabled={step === 1}
              className="mt-12 px-8 py-4 bg-primary text-gray-950 font-bold rounded-2xl flex items-center gap-4 hover:bg-primary-light transition-all disabled:opacity-50"
            >
              {step === 2 ? <RefreshCcw size={20} /> : <Camera size={20} />}
              {step === 0 ? "Try Scanning a Meal" : step === 1 ? "AI Analyzing..." : "Scan Next Meal"}
            </button>
          </div>

          <div className="flex-1 order-1 lg:order-2 w-full max-w-sm">
            <div className="relative aspect-[9/16] rounded-[3rem] border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden group">
              {/* Camera Stream Mock */}
              <div className="absolute inset-0">
                 <img 
                    src={foods[activeFood].image} 
                    alt="Food Scan" 
                    className={`w-full h-full object-cover transition-all duration-700 ${step === 1 ? 'scale-110 brightness-50' : 'scale-100'}`} 
                 />
              </div>

              {/* Scan UI Overlay */}
              <div className="absolute inset-x-8 top-1/4 bottom-1/4 border-2 border-white/20 rounded-2xl flex items-center justify-center">
                 <AnimatePresence>
                   {step === 1 && (
                     <motion.div 
                        initial={{ top: 0 }}
                        animate={{ top: '100%', opacity: [1, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(34,197,94,1)] z-10" 
                     />
                   )}
                 </AnimatePresence>
                 {step === 0 && <Camera size={48} className="text-white/30" />}
              </div>

              {/* Result Modal */}
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    className="absolute bottom-6 left-6 right-6 p-6 glass-morphism rounded-3xl z-20"
                  >
                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                       <CheckCircle2 size={12} />
                       Analysis Complete
                    </div>
                    <h3 className="text-xl font-bold mb-4">{foods[activeFood].name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-white/5 rounded-xl">
                        <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Calories</div>
                        <div className="text-lg font-bold text-primary">{foods[activeFood].calories}</div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl">
                        <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Protein</div>
                        <div className="text-lg font-bold text-accent">{foods[activeFood].protein}g</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-primary/20 text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-gray-950 transition-all text-xs">
                      Log to Daily Journal
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
               {foods.map((_, i) => (
                 <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${activeFood === i ? 'w-8 bg-primary' : 'w-2 bg-gray-800'}`} />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
