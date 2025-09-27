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
          ? 'bg-purple-900/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl text-white">Momint</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-purple-100 hover:text-white transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('marketplace')}
              className="text-purple-100 hover:text-white transition-colors duration-200"
            >
              Marketplace
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-purple-100 hover:text-white transition-colors duration-200"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-purple-100 hover:text-white transition-colors duration-200"
            >
              Reviews
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => setCurrentScreen('auth')}
              variant="white"
              className="transition-all duration-300 transform hover:scale-105"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-purple-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-purple-100 hover:text-white transition-colors duration-200 py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('marketplace')}
                className="block w-full text-left text-purple-100 hover:text-white transition-colors duration-200 py-2"
              >
                Marketplace
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="block w-full text-left text-purple-100 hover:text-white transition-colors duration-200 py-2"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-purple-100 hover:text-white transition-colors duration-200 py-2"
              >
                Reviews
              </button>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-white/10"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setCurrentScreen('auth')}
                  variant="white"
                  className="w-full"
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