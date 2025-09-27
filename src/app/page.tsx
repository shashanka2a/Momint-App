'use client'

import { useEffect } from "react";
import { useApp } from "@/contexts/AppContext";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import { LandingScreen } from "@/components/screens/LandingScreen";
import { AuthScreen } from "@/components/screens/AuthScreen";
import { DashboardScreen } from "@/components/screens/DashboardScreen";  
import { MarketplaceScreen } from "@/components/screens/MarketplaceScreen";
import { NFTDetailScreen } from "@/components/screens/NFTDetailScreen";
import { MintingScreen } from "@/components/screens/MintingScreen";
import { ExclusiveContentScreen } from "@/components/screens/ExclusiveContentScreen";

export default function Home() {
  const { currentScreen, isNavigating } = useApp();

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <LoadingOverlay isVisible={isNavigating} message="Navigating..." />
      {(() => {
        switch (currentScreen) {
          case 'landing':
            return <LandingScreen />;
          case 'auth':
            return <AuthScreen />;
          case 'dashboard':
            return <DashboardScreen />;
          case 'marketplace':
            return <MarketplaceScreen />;
          case 'nft-detail':
            return <NFTDetailScreen />;
          case 'minting':
            return <MintingScreen />;
          case 'exclusive-content':
            return <ExclusiveContentScreen />;
          default:
            return <LandingScreen />;
        }
      })()}
    </>
  );
}
