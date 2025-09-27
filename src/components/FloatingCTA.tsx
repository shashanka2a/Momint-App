'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUp, Sparkles } from "lucide-react";
import { useApp } from "../contexts/AppContext";

export function FloatingCTA() {
  const { setCurrentScreen } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero
      setIsVisible(scrollY > heroHeight * 0.8);
      
      // Show scroll to top after scrolling more
      setShowScrollTop(scrollY > heroHeight * 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEarlyAccess = () => {
    setCurrentScreen('auth');
  };

  return (
    <>
      {/* Floating CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
          >
            <Button
              onClick={scrollToEarlyAccess}
              size="lg"
              variant="gradient"
              className="px-8 py-4 rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5" />
              Get Early Access
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}