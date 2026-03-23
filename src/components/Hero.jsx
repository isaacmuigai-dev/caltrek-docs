import React from 'react';
import { motion } from 'framer-motion';
import { Play, Shield, Camera, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} className="fill-primary" />
              The Future of Nutrition is AI
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Snap. Track. <br />
              <span className="text-gradient">Transform.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              The AI-powered food tracking app that does the math for you. Just take a photo, and Cal Trek instantly analyzes your macros, calories, and nutrients.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-gray-950 font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1">
                Download for iOS
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 group">
                <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-60"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-400 italic">Trusted by 10,000+ fitness enthusiasts</p>
            </motion.div>
          </div>

          {/* Visual Content - Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-[280px] lg:w-[320px] mx-auto aspect-[9/19.5] rounded-[3rem] border-[8px] border-gray-800 bg-gray-900 shadow-[0_0_50px_rgba(34,197,94,0.3)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center">
                <div className="w-20 h-4 bg-gray-800 rounded-full mt-2" />
              </div>
              
              {/* Mock App UI */}
              <div className="p-4 pt-10 flex flex-col h-full bg-gray-950">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-800" />
                  <div className="flex-1 mx-3 h-2 bg-gray-800/50 rounded-full" />
                  <Shield size={20} className="text-primary" />
                </div>
                
                <div className="flex-1 rounded-2xl bg-gray-900/50 border border-white/5 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  {/* Scanner Mock */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/40 shadow-[0_0_15px_rgba(34,197,94,1)] animate-pulse" style={{ animation: 'bounce 2s infinite' }} />
                  <div className="absolute inset-x-6 top-1/4 bottom-1/4 border-2 border-primary/20 rounded-xl flex items-center justify-center">
                     <Camera size={40} className="text-primary/10" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-gray-950/80 backdrop-blur-md rounded-xl border border-white/10">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">AI Analyzing...</div>
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>Avocado Toast</span>
                      <span className="text-primary">342 kcal</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                   {[1,2,3].map(i => <div key={i} className="aspect-square rounded-xl bg-gray-900 border border-white/5" />)}
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] -z-10 rounded-full" />
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 blur-[40px] rounded-full" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
