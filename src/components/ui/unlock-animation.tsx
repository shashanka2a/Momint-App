'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Unlock, Sparkles } from "lucide-react";

interface UnlockAnimationProps {
  isUnlocked: boolean;
  children: React.ReactNode;
  lockedContent?: React.ReactNode;
  onUnlock?: () => void;
  className?: string;
}

export function UnlockAnimation({ 
  isUnlocked, 
  children, 
  lockedContent, 
  onUnlock,
  className 
}: UnlockAnimationProps) {
  const [showUnlockEffect, setShowUnlockEffect] = useState(false);
  const [hasUnlocked, setHasUnlocked] = useState(isUnlocked);

  useEffect(() => {
    if (isUnlocked && !hasUnlocked) {
      setShowUnlockEffect(true);
      const timer = setTimeout(() => {
        setHasUnlocked(true);
        setShowUnlockEffect(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked, hasUnlocked]);

  const handleUnlock = () => {
    onUnlock?.();
  };

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {!hasUnlocked && (
          <motion.div
            key="locked"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(10px)",
              scale: 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative overflow-hidden"
          >
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-10 rounded-3xl" />
            
            {/* Locked content placeholder */}
            <div className="filter blur-sm scale-95">
              {lockedContent || (
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Unlock className="w-8 h-8" />
                    </div>
                    <p className="text-lg mb-2">Exclusive Content</p>
                    <p className="text-purple-200 text-sm">Unlock to reveal</p>
                  </div>
                </div>
              )}
            </div>

            {/* Unlock button */}
            <motion.button
              onClick={handleUnlock}
              className="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-2xl flex items-center space-x-2 backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <Unlock className="w-5 h-5" />
                <span>Unlock Content</span>
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {showUnlockEffect && (
          <motion.div
            key="unlocking"
            className="absolute inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Particle effects */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i / 12) * Math.PI * 2) * 100,
                  y: Math.sin((i / 12) * Math.PI * 2) * 100,
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Central unlock icon */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        )}

        {hasUnlocked && (
          <motion.div
            key="unlocked"
            initial={{ 
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.9
            }}
            animate={{ 
              opacity: 1,
              filter: "blur(0px)",
              scale: 1
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}