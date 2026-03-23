import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap, TrendingUp } from 'lucide-react';

const Transformation = () => {
  return (
    <section id="transformation" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-3xl overflow-hidden grayscale contrast-125 relative group"
              >
                 <img src="https://images.unsplash.com/photo-1541534741688-6078c64b52d3?w=500&q=80" alt="Before" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                   <div className="text-white">
                      <div className="text-xs font-bold uppercase tracking-widest opacity-70">Week 0</div>
                      <div className="text-lg font-bold">The Beginning</div>
                   </div>
                 </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-[3/4] rounded-3xl overflow-hidden relative group mt-8 border-4 border-primary/40 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
              >
                 <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?w=500&q=80" alt="After" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                   <div className="text-white">
                      <div className="text-xs font-bold uppercase tracking-widest opacity-80">Week 12</div>
                      <div className="text-xl font-bold italic">The Transformation</div>
                   </div>
                 </div>
              </motion.div>
            </div>
            
            {/* Stats Overlay */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="absolute top-1/2 -right-4 lg:-right-12 translate-y-[-50%] p-6 glass-morphism rounded-3xl space-y-4 shadow-2xl z-10 hidden sm:block"
            >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-primary/20 rounded-lg text-primary"><Trophy size={18} /></div>
                 <div>
                   <div className="text-[10px] text-gray-500 font-bold uppercase">Weight Lost</div>
                   <div className="text-xl font-extrabold">-18 lbs</div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-accent/20 rounded-lg text-accent"><Zap size={18} /></div>
                 <div>
                   <div className="text-[10px] text-gray-500 font-bold uppercase">Consistency</div>
                   <div className="text-xl font-extrabold">94%</div>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.2]">
              Your journey is <br />
              <span className="text-primary italic">more than numbers.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We help you build the discipline and awareness that leads to lasting change. Cal Trek isn't just about calories; it's about understanding how fuel affects your performance, mood, and long-term health.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 { icon: <TrendingUp size={20} />, text: "Automated progress tracking and goal setting." },
                 { icon: <Zap size={20} />, text: "Real-time adjustments based on your daily activity." },
                 { icon: <ArrowRight size={20} />, text: "Personalized coaching insights that evolve with you." }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-white font-medium">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">{item.icon}</div>
                   {item.text}
                 </div>
               ))}
            </div>
            
            <button className="group flex items-center gap-3 text-white font-bold text-lg hover:text-primary transition-colors">
              Start Your Story Today
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
