import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Transformation from './components/Transformation';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <motion.div
              animate={{ scale: [0.9, 1.1, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="w-20 h-20 border-4 border-black/5 border-t-blue-500 rounded-full animate-spin" />
              <img src="/assets/logo.png" className="absolute inset-0 m-auto w-10 h-10 rounded-xl" alt="Cal Trek" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] glow-blue opacity-40 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] glow-purple opacity-30 blur-[120px]" />
        </div>
        
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <SocialProof />
          <Features />
          <InteractiveDemo />
          <Transformation />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
