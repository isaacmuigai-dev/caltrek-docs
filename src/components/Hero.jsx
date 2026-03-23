import React from 'react';
import { motion } from 'framer-motion';
import { Apple, PlayCircle, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-8"
            >
              <Users size={16} />
              <span className="text-sm font-semibold tracking-tight">Loved by 10,000+ fitness enthusiasts</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-black">
              Snap. Track.<br />
              <span className="text-blue-600">Transform.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl mb-12 italic">
              "The world's most intuitive AI nutrition coach. 
              Track your meals in seconds just by taking a photo."
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-black/80 transition-all transform hover:-translate-y-1 shadow-xl">
                <Apple size={24} fill="white" />
                <div className="text-left">
                  <p className="text-xs opacity-70">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-black/80 transition-all transform hover:-translate-y-1 shadow-xl">
                <PlayCircle size={24} fill="white" />
                <div className="text-left">
                  <p className="text-xs opacity-70">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold text-gray-400">4.9/5 stars from 8,000+ users</p>
              </div>
            </div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[800px] flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full max-w-[340px] px-4 md:px-0">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[3.5rem] blur-2xl opacity-40" />
              
              {/* Phone Mockup */}
              <div className="relative bg-neutral-900 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-neutral-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-800 rounded-b-2xl z-20" />
                <div className="rounded-[2.8rem] overflow-hidden bg-white aspect-[9/19.5]">
                  <img 
                    src="assets/home.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Cal Trek App" 
                  />
                </div>
              </div>
              {/* Floating UI Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Analyzing</p>
                    <p className="text-base font-black tracking-tight">Healthy Meal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-1/3 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Confidence</p>
                    <p className="text-base font-black tracking-tight text-green-600">98% Match</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow behind mockup */}
            <div className="absolute inset-0 bg-blue-100/30 blur-[100px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
