import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, RefreshCcw, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const InteractiveDemo = () => {
  const [step, setStep] = useState(0); 
  const [activeFood, setActiveFood] = useState(0);

  const foods = [
    { name: "Greek Salad bowl", calories: 342, protein: 12, carbs: 18, fat: 24, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop" },
    { name: "Grilled Salmon Plate", calories: 485, protein: 42, carbs: 0, fat: 34, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop" },
    { name: "Avocado Sourdough", calories: 290, protein: 9, carbs: 32, fat: 18, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop" }
  ];

  const handleScan = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 1800);
  };

  const reset = () => {
    setStep(0);
    setActiveFood((prev) => (prev + 1) % foods.length);
  };

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-black">
              Try the <span className="text-blue-600">magic</span> yourself.
            </h2>
            <div className="space-y-10 max-w-lg mx-auto lg:mx-0">
              {[
                { title: "Point & Snap", text: "Take a photo of any meal. Our AI does the rest.", icon: <Camera size={20} /> },
                { title: "Deep Analysis", text: "Ingredients are identified with medical-grade precision.", icon: <Zap size={20} /> },
                { title: "Instant Log", text: "Macros and calories are added to your profile instantly.", icon: <CheckCircle2 size={20} /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 border border-black/5 shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-black text-lg tracking-tight mb-2 uppercase">{item.title}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={step === 2 ? reset : handleScan}
              disabled={step === 1}
              className="mt-12 px-10 py-5 bg-black text-white font-black rounded-2xl flex items-center gap-4 hover:bg-black/80 transition-all disabled:opacity-50 shadow-2xl mx-auto lg:mx-0"
            >
              {step === 2 ? <RefreshCcw size={20} /> : <Camera size={20} />}
              {step === 0 ? "Scan a demo meal" : step === 1 ? "Analyzing bowl..." : "Try another scan"}
            </button>
          </div>

          <div className="flex-1 order-1 lg:order-2 w-full max-w-[360px]">
            <div className="relative aspect-[9/19] rounded-[3.5rem] border-[8px] border-neutral-900 bg-black shadow-2xl overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-2xl z-20" />
              
              <div className="absolute inset-0">
                 <img 
                    src={foods[activeFood].image} 
                    alt="Food Scan" 
                    className={`w-full h-full object-cover transition-all duration-700 ${step === 1 ? 'scale-110 brightness-50' : 'scale-100'}`} 
                 />
              </div>

              {/* Scan UI Overlay */}
              <div className="absolute inset-x-8 top-1/4 bottom-1/4 border-2 border-white/20 rounded-[2rem] flex items-center justify-center overflow-hidden">
                 <AnimatePresence>
                   {step === 1 && (
                     <motion.div 
                        initial={{ top: -10 }}
                        animate={{ top: '110%', opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute left-0 right-0 h-1.5 bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,1)] z-10" 
                     />
                   )}
                 </AnimatePresence>
                 {step === 0 && <div className="text-white/20 font-black text-xs uppercase tracking-widest">Alignment Window</div>}
              </div>

              {/* Result Modal */}
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 300, opacity: 0 }}
                    className="absolute bottom-4 left-4 right-4 p-6 glass rounded-[2.5rem] z-20"
                  >
                    <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">
                       <CheckCircle2 size={12} />
                       AI ANALYSIS ACTIVE
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-black tracking-tight">{foods[activeFood].name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-2xl border border-black/5">
                        <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Calories</div>
                        <div className="text-xl font-black text-black">{foods[activeFood].calories}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-2xl border border-black/5">
                        <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Protein</div>
                        <div className="text-xl font-black text-black">{foods[activeFood].protein}g</div>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all text-sm shadow-xl">
                      Log Meal
                      <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex justify-center gap-2">
               {foods.map((_, i) => (
                 <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${activeFood === i ? 'w-10 bg-black' : 'w-2 bg-black/10'}`} />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
