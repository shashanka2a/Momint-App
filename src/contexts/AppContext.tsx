'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'influencer' | 'fan';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  type: UserType;
  walletAddress?: string;
}

export interface NFT {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  priceUSD: string;
  creator: {
    id: string;
    name: string;
    handle: string;
    avatar: string;
  };
  category: string;
  perks: string[];
  views: number;
  likes: number;
  edition: string;
  isLocked: boolean;
  exclusiveContent?: {
    type: 'video' | 'gallery' | 'message';
    content: string;
    unlocked: boolean;
  };
}

export type Screen = 
  | 'landing'
  | 'auth'
  | 'dashboard'
  | 'marketplace'
  | 'nft-detail'
  | 'minting'
  | 'exclusive-content';

interface AppContextType {
  // Navigation
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  navigateToScreen: (screen: Screen) => Promise<void>;
  isNavigating: boolean;
  
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  
  // App data
  selectedNFT: NFT | null;
  setSelectedNFT: (nft: NFT | null) => void;
  
  // Functions
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string, type: UserType) => Promise<boolean>;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const isAuthenticated = !!user;

  const navigateToScreen = async (screen: Screen) => {
    setIsNavigating(true);
    // Simulate navigation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setCurrentScreen(screen);
    setIsNavigating(false);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      name: email.includes('creator') ? 'Alex Thompson' : 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      type: email.includes('creator') ? 'influencer' : 'fan',
      walletAddress: '0x742d...4e2f'
    };
    
    setUser(mockUser);
    setCurrentScreen('dashboard');
    return true;
  };

  const signup = async (email: string, password: string, name: string, type: UserType): Promise<boolean> => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36),
      email,
      name,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      type,
      walletAddress: type === 'influencer' ? '0x742d...4e2f' : undefined
    };
    
    setUser(mockUser);
    setCurrentScreen('dashboard');
    return true;
  };

  const logout = () => {
    setUser(null);
    setCurrentScreen('landing');
  };

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      navigateToScreen,
      user,
      setUser,
      isAuthenticated,
      selectedNFT,
      setSelectedNFT,
      isNavigating,
      login,
      signup,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}