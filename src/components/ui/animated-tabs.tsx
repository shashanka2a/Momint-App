'use client'

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

interface AnimatedTabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

interface AnimatedTabsListProps {
  className?: string;
  children: React.ReactNode;
}

interface AnimatedTabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AnimatedTabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

const AnimatedTabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
  direction: number;
}>({
  activeTab: '',
  setActiveTab: () => {},
  direction: 0
});

export function AnimatedTabs({ 
  defaultValue, 
  className, 
  children, 
  onValueChange 
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [direction, setDirection] = useState(0);
  const previousTab = useRef(defaultValue);

  const handleTabChange = (value: string) => {
    const tabs = Array.from(document.querySelectorAll('[data-tab-trigger]'));
    const currentIndex = tabs.findIndex(tab => tab.getAttribute('data-value') === previousTab.current);
    const newIndex = tabs.findIndex(tab => tab.getAttribute('data-value') === value);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(value);
    onValueChange?.(value);
    previousTab.current = value;
  };

  return (
    <AnimatedTabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange, direction }}>
      <Tabs value={activeTab} onValueChange={handleTabChange} className={className}>
        {children}
      </Tabs>
    </AnimatedTabsContext.Provider>
  );
}

export function AnimatedTabsList({ className, children }: AnimatedTabsListProps) {
  return (
    <TabsList className={className}>
      {children}
    </TabsList>
  );
}

export function AnimatedTabsTrigger({ value, className, children }: AnimatedTabsTriggerProps) {
  const { activeTab } = React.useContext(AnimatedTabsContext);
  
  return (
    <TabsTrigger
      value={value}
      data-tab-trigger
      data-value={value}
      className={`${className} transition-all duration-300 ease-in-out relative overflow-hidden`}
    >
      {children}
      
      {/* Active indicator with slide animation */}
      {activeTab === value && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 -z-10 bg-white rounded-xl"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </TabsTrigger>
  );
}

export function AnimatedTabsContent({ value, className, children }: AnimatedTabsContentProps) {
  const { activeTab, direction } = React.useContext(AnimatedTabsContext);
  const isActive = activeTab === value;

  return (
    <TabsContent value={value} className={`${className} relative overflow-hidden`}>
      <AnimatePresence mode="wait" custom={direction}>
        {isActive && (
          <motion.div
            key={value}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: { duration: 0.2 }
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </TabsContent>
  );
}

// Need to import React for context
import React from "react";