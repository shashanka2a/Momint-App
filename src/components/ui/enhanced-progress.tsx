'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "./progress";

interface EnhancedProgressProps {
  value: number;
  className?: string;
  animated?: boolean;
  showPercentage?: boolean;
  color?: 'purple' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

export function EnhancedProgress({ 
  value, 
  className, 
  animated = true,
  showPercentage = false,
  color = 'purple',
  size = 'md'
}: EnhancedProgressProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const heightClass = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }[size];

  const colorClasses = {
    purple: 'from-purple-500 to-blue-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500'
  }[color];

  return (
    <div className={`relative ${className}`}>
      <div className={`${heightClass} bg-white/10 rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClasses} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{ 
            duration: animated ? 0.8 : 0,
            ease: "easeInOut"
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {showPercentage && (
        <motion.div
          className="mt-2 text-center text-white text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.span
            key={Math.floor(displayValue)}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(displayValue)}%
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}