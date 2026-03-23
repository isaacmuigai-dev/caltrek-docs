import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import Transformation from './components/Transformation';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 selection:bg-primary/30 selection:text-primary-light">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[100px] rounded-full -z-10" />
        
        <Navbar />
        
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <InteractiveDemo />
          <HowItWorks />
          <Transformation />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
