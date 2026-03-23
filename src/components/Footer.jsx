import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-gray-950">C</div>
              <span className="text-xl font-bold italic">Cal <span className="text-primary text-2xl">Trek</span></span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Premium AI-powered nutrition tracking for high-performers. Built to make tracking effortless and effective.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">AI Demo</a></li>
              <li><a href="#transformation" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="gym.html" className="hover:text-primary transition-colors">Cal Trek for Gyms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="privacy_policy.html" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="terms_of_service.html" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="delete_account.html" className="hover:text-primary transition-colors">Account Removal</a></li>
              <li><a href="mailto:support@calviewai.com" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Cal Trek AI. All rights reserved. Made for fitness enthusiasts.
          </div>
          
          <div className="flex items-center gap-6">
             <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-all text-gray-400 hover:text-primary"><Instagram size={18} /></a>
             <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-all text-gray-400 hover:text-primary"><Twitter size={18} /></a>
             <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-all text-gray-400 hover:text-primary"><Github size={18} /></a>
             <a href="mailto:support@calviewai.com" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-all text-gray-400 hover:text-primary"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
