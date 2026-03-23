import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-black/5 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img src="assets/logo.png" className="w-10 h-10 rounded-xl object-contain" alt="Cal Trek" />
              <span className="text-2xl font-black tracking-tighter text-black uppercase">CAL TREK</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed font-medium">
              Elite AI-powered nutrition tracking for those who demand excellence. Built to make transformation effortless.
            </p>
          </div>

          <div>
            <h4 className="text-black font-black mb-8 text-xs uppercase tracking-widest">PRODUCT</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#results" className="hover:text-black transition-colors">Success Stories</a></li>
              <li><a href="#download" className="hover:text-black transition-colors">App Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-black mb-8 text-xs uppercase tracking-widest">LEGAL</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@calviewai.com" className="hover:text-black transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Cal Trek AI. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-8">
             <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-black transition-colors"><Github size={20} /></a>
             <a href="mailto:support@calviewai.com" className="text-gray-400 hover:text-black transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
