import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap, Clock } from 'lucide-react';

const Transformation = () => {
  return (
    <section id="transformation" className="py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Visual Side */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale contrast-125 relative group shadow-xl"
              >
                 <img src="https://images.unsplash.com/photo-1541534741688-6078c64b52d3?w=500&q=80" alt="Before" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/20 flex items-end p-8">
                    <div className="glass px-4 py-2 rounded-xl text-black font-black text-xs uppercase tracking-tighter">Day 1</div>
                 </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group mt-12 shadow-2xl border-4 border-blue-500/20"
              >
                 <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?w=500&q=80" alt="After" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent flex items-end p-8">
                    <div className="bg-blue-600 px-4 py-2 rounded-xl text-white font-black text-xs uppercase tracking-tighter shadow-lg">Day 90</div>
                 </div>
              </motion.div>
            </div>
            
            {/* Stats Overlay */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="absolute top-1/2 -right-8 lg:-right-16 translate-y-[-50%] p-8 glass rounded-[2.5rem] space-y-6 shadow-2xl z-10 hidden md:block"
            >
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><Trophy size={24} /></div>
                 <div>
                   <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Weight Change</div>
                   <div className="text-2xl font-black text-black">-22 lbs</div>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl"><Zap size={24} /></div>
                 <div>
                   <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Metabolism</div>
                   <div className="text-2xl font-black text-black">+14%</div>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1] text-black">
              Your results are <br />
              <span className="text-blue-600">inevitable.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
              "We don't just track calories; we build sustainable habits. Cal Trek provides the clarity you need to master your nutrition."
            </p>
            
            <div className="space-y-8 mb-12 max-w-sm mx-auto lg:mx-0">
               {[
                 { icon: <Clock size={20} />, text: "Automated habit formation logs" },
                 { icon: <Zap size={20} />, text: "Real-time metabolic sync" },
                 { icon: <ArrowRight size={20} />, text: "Expert nutrition coaching" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-5 text-black font-black text-lg tracking-tight group">
                   <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-600 shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
                    {item.icon}
                   </div>
                   {item.text}
                 </div>
               ))}
            </div>
            
            <button className="group flex items-center justify-center lg:justify-start gap-4 text-black font-black text-xl hover:text-blue-600 transition-colors mx-auto lg:mx-0">
              Start Your Transformation
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
