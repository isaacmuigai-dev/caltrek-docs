import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: "Snap",
      desc: "Instant photo capture. No typing, no searching catalogs.",
      icon: "📸"
    },
    {
      title: "Analyze",
      desc: "Our AI breaks down ingredients, weight and macros.",
      icon: "🧠"
    },
    {
      title: "Track",
      desc: "Synchronize automatically with Apple Health & Google Fit.",
      icon: "📊"
    },
    {
      title: "Improve",
      desc: "Receive AI insights on how to optimize your next meal.",
      icon: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-900/10 relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Tracking as it <span className="text-primary italic">should be.</span></h2>
          <p className="text-gray-400">Four simple steps to a better you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative mb-8 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-2xl relative z-10">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-gray-950 flex items-center justify-center text-xs font-black shadow-lg">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
