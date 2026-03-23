import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useElementScroll } from 'framer-motion';
import { Scan, Brain, Award, TrendingUp, Zap, Target } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI Food Recognition",
      description: "Just point your camera. Our advanced neural network identifies 5,000+ foods instantly with 98% accuracy.",
      image: `${import.meta.env.BASE_URL}assets/scanner.jpg`,
      icon: <Scan className="text-blue-500" />
    },
    {
      title: "Real-time Macro Breakdown",
      description: "Get detailed protein, carb, and fat analyses formatted specifically to help you reach your daily goals.",
      image: `${import.meta.env.BASE_URL}assets/details.jpg`,
      icon: <Zap className="text-yellow-500" />
    },
    {
      title: "Progress Visualization",
      description: "Track your transformation with beautiful, data-rich charts and a personalized goal journey.",
      image: `${import.meta.env.BASE_URL}assets/progress.jpg`,
      icon: <TrendingUp className="text-purple-500" />
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left: Sticky Mockup */}
          <div className="hidden lg:block sticky top-32 h-[700px] flex items-center justify-center">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute inset-0 bg-blue-100/30 blur-[100px] rounded-full -z-10" />
              
              <div className="relative bg-neutral-900 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-neutral-800 transition-all duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-800 rounded-b-2xl z-20" />
                <div className="rounded-[2.8rem] overflow-hidden bg-white aspect-[9/19.5] relative">
                  {features.map((feature, index) => (
                    <motion.img
                      key={index}
                      src={feature.image}
                      alt={feature.title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ 
                        opacity: activeFeature === index ? 1 : 0,
                        scale: activeFeature === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Feature Cards */}
          <div className="space-y-40 lg:py-40">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveFeature(index)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                className="group"
              >
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gray-50 text-black shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                  {feature.description}
                </p>
                <div className="lg:hidden mt-12 rounded-[2.5rem] overflow-hidden border-8 border-neutral-900 shadow-2xl">
                  <img src={feature.image} alt={feature.title} className="w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
