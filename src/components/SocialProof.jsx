import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Meals Tracked", value: "1.2M" },
    { label: "Avg. Weight Loss", value: "12 lbs" },
    { label: "App Store Rating", value: "4.9/5" },
  ];

  const testimonials = [
    {
      name: "Marcus J.",
      role: "Gym Enthusiast",
      text: "Cal Trek changed the game for me. I used to hate manual logging, now I just take a photo and get back to my workout.",
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Sarah L.",
      role: "Weight Loss Journey",
      text: "Lost 15 lbs in 2 months. The streaks kept me consistent when I wanted to quit. Highly recommended!",
      avatar: "https://i.pravatar.cc/100?img=25"
    },
    {
      name: "David K.",
      role: "Tech Professional",
      text: "The cleanest UI I've seen in a fitness app. The AI recognition is spooky accurate. It's like magic.",
      avatar: "https://i.pravatar.cc/100?img=33"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 border-y border-white/5 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-primary uppercase tracking-tighter opacity-70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-950 border border-white/5 relative group hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10" />
                <div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.role}</div>
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
