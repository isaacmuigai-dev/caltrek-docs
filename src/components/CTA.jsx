import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, PlayCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            Stop guessing. <br />
            <span className="text-gradient">Start winning.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto italic">
            Join 10,000+ others who have transformed their lives with Cal Trek. The only AI that understands your plate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-light text-gray-950 font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1 hover:shadow-primary/40">
              <Apple size={24} className="fill-gray-950" />
              Download on App Store
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black text-lg rounded-2xl border border-white/10 flex items-center justify-center gap-3 backdrop-blur-xl transition-all hover:-translate-y-1">
              <PlayCircle size={24} />
              Get on Google Play
            </button>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
             <div className="text-xl font-bold">Health Connect</div>
             <div className="text-xl font-bold italic">Apple Health</div>
             <div className="text-xl font-bold tracking-tighter uppercase">MyFitnessPal Sync</div>
             <div className="text-xl font-bold">Strava</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
