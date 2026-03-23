import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Brain, Award, TrendingUp, Zap, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Scan className="text-primary" />,
      title: "AI Food Recognition",
      description: "Just point your camera. Our advanced neural network identifies 5,000+ foods instantly with 98% accuracy.",
      color: "from-primary/20 to-transparent"
    },
    {
      icon: <Brain className="text-indigo-400" />,
      title: "Smart Insights",
      description: "Personalized nutrition advice based on your metabolism, activity levels, and fitness goals.",
      color: "from-indigo-500/10 to-transparent"
    },
    {
      icon: <Award className="text-amber-400" />,
      title: "Gamified Streaks",
      description: "Stay motivated with daily streaks, levels, and rewards for consistent tracking habits.",
      color: "from-amber-500/10 to-transparent"
    },
    {
      icon: <TrendingUp className="text-rose-400" />,
      title: "Visual Progress",
      description: "Beautiful charts that make complex data simple to understand. See your transformation happen.",
      color: "from-rose-500/10 to-transparent"
    },
    {
      icon: <Zap className="text-sky-400" />,
      title: "High Performance",
      description: "Built for speed. No lag, no waiting. Experience the fastest calorie tracking in the industry.",
      color: "from-sky-500/10 to-transparent"
    },
    {
      icon: <Target className="text-purple-400" />,
      title: "Macro Accuracy",
      description: "Get detailed breakdowns of proteins, fats, and carbs for every meal with medical-grade precision.",
      color: "from-purple-500/10 to-transparent"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-6"
          >
            Features built for <br />
            <span className="text-primary">your success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We've combined world-class AI with premium design to create a tracking experience that's actually enjoyable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-[2rem] bg-gray-900/50 border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mb-6 shadow-xl border border-white/5 group-hover:scale-110 transition-transform relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
