import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    { label: "Active Users", value: "10K+", icon: <ShieldCheck size={16} /> },
    { label: "Meals Tracked", value: "1.2M", icon: <Zap size={16} /> },
    { label: "App Rating", value: "4.9/5", icon: <Star size={16} fill="currentColor" /> },
  ];

  const testimonials = [
    {
      name: "Marcus J.",
      handle: "@marcusfit",
      text: "Cal Trek is actually magic. I just snap a photo of my meal and it does the rest. No more manual searching.",
      avatar: "https://i.pravatar.cc/100?u=marcus"
    },
    {
      name: "Sarah L.",
      handle: "@sarah_wellness",
      text: "The cleanest UI I've seen. It makes tracking feel premium, not a chore. Lost 10lbs in my first month!",
      avatar: "https://i.pravatar.cc/100?u=sarah"
    },
    {
      name: "David K.",
      handle: "@techdavid",
      text: "As a dev, I appreciate the accuracy of the AI. It identified my complex home-cooked bowls with 98% precision.",
      avatar: "https://i.pravatar.cc/100?u=david"
    }
  ];

  return (
    <section id="results" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex -space-x-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img 
                key={i} 
                src={`https://i.pravatar.cc/100?u=user${i}`} 
                className="w-12 h-12 rounded-full border-4 border-white shadow-sm" 
                alt="user" 
              />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Join the <span className="text-blue-600">elite league</span> of trackstars.
          </h2>
          <p className="text-xl text-gray-400 font-medium">10,000+ people are transforming their lives with Cal Trek.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">{stat.icon}</div>
              <div className="text-4xl font-black tracking-tighter mb-2">{stat.value}</div>
              <div className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Marquee-like grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 border border-black/5 flex flex-col justify-between"
            >
              <p className="text-lg font-bold text-gray-900 leading-tight mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-black/10" />
                <div>
                  <div className="text-sm font-black text-black">{item.name}</div>
                  <div className="text-xs font-bold text-gray-400">{item.handle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
