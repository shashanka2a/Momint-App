'use client'

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useApp } from "../contexts/AppContext";

export function Navigation() {
  const { setCurrentScreen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-momint-purple/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#a855f7', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="15" fill="url(#navLogoGradient)"/>
                <g transform="translate(16, 16)">
                  <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="white" opacity="0.9"/>
                  <circle cx="5" cy="-5" r="1" fill="white" opacity="0.7"/>
                  <circle cx="-5" cy="5" r="1" fill="white" opacity="0.7"/>
                </g>
              </svg>
            </div>
            <span className="text-xl md:text-2xl text-primary font-bold">Momint</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "How It Works", id: "how-it-works" },
              { label: "Marketplace", id: "marketplace" },
              { label: "Community", id: "community" },
              { label: "Reviews", id: "testimonials" }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-secondary hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-momint-purple transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-primary hover:text-white hover:bg-momint-purple/20 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => setCurrentScreen('auth')}
              className="bg-momint-purple hover:bg-momint-purple-dark text-white transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2 font-medium"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2 rounded-lg hover:bg-momint-purple/20 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-momint-purple/20"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { label: "How It Works", id: "how-it-works" },
                { label: "Marketplace", id: "marketplace" },
                { label: "Community", id: "community" },
                { label: "Reviews", id: "testimonials" }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-secondary hover:text-primary transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-momint-purple/10 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-momint-purple/20">
                <Button 
                  variant="ghost" 
                  className="w-full text-primary hover:text-white hover:bg-momint-purple/20 justify-start"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setCurrentScreen('auth')}
                  className="w-full bg-momint-purple hover:bg-momint-purple-dark text-white rounded-xl"
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}