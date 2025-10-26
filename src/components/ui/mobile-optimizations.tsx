'use client'

import { useEffect, useState } from 'react'

// Hook to detect mobile devices and screen size
export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setScreenSize({ width, height })
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return { isMobile, isTablet, screenSize }
}

// Component to handle touch interactions
export function TouchOptimized({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [isTouching, setIsTouching] = useState(false)

  const handleTouchStart = () => setIsTouching(true)
  const handleTouchEnd = () => setIsTouching(false)

  return (
    <div 
      className={`touch-manipulation ${className} ${isTouching ? 'active' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}

// Mobile-optimized spacing utilities
export const mobileSpacing = {
  section: 'py-12 md:py-20',
  container: 'px-4 sm:px-6 lg:px-8',
  text: {
    hero: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl',
    heading: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    subheading: 'text-lg sm:text-xl md:text-2xl',
    body: 'text-sm sm:text-base md:text-lg',
    small: 'text-xs sm:text-sm'
  },
  grid: {
    cards: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    stats: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    features: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  },
  gap: {
    small: 'gap-4 sm:gap-6',
    medium: 'gap-6 sm:gap-8',
    large: 'gap-8 sm:gap-12'
  }
}

// Mobile-optimized button sizes
export const mobileButtonSizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
  xlarge: 'px-10 py-5 text-xl'
}

// Mobile-optimized card styles
export const mobileCardStyles = {
  base: 'rounded-2xl md:rounded-3xl',
  padding: 'p-4 sm:p-6 md:p-8',
  shadow: 'shadow-lg hover:shadow-xl',
  hover: 'hover:scale-105 md:hover:scale-110'
}
