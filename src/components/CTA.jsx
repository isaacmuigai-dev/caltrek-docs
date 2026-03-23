import React from 'react';
import { motion } from 'framer-motion';
import { Apple, PlayCircle, ShieldCheck } from 'lucide-react';

const CTA = () => {
  return (
    <section id="download" className="py-40 relative bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 border border-black/5 text-gray-900 mb-8">
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="text-xs font-black uppercase tracking-widest tracking-widest">JOIN THE REVOLUTION</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-black">
            Ready to <span className="text-blue-600">own</span> <br />
            your health?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic">
            "Stop guessing what's in your bowl. Start winning your day with the world's most intuitive AI tracker."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-6 bg-black text-white font-black text-xl rounded-3xl flex items-center justify-center gap-4 shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-neutral-800">
              <Apple size={28} fill="white" />
              App Store
            </button>
            <button className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-black text-black font-black text-xl rounded-3xl flex items-center justify-center gap-4 transition-all transform hover:-translate-y-2 hover:bg-gray-50">
              <PlayCircle size={28} />
              Play Store
            </button>
          </div>
          
          <div className="mt-24 pt-12 border-t border-black/5 flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale contrast-125">
             <div className="text-2xl font-black tracking-tight">Health Connect</div>
             <div className="text-2xl font-black tracking-tighter italic">APPLE HEALTH</div>
             <div className="text-2xl font-black uppercase tracking-tighter">MyFitnessPal Sync</div>
             <div className="text-2xl font-black tracking-widest">STRAVA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
