'use client'

import { Navigation } from "../Navigation";
import { Hero } from "../Hero";
import { ProblemSolution } from "../ProblemSolution";
import { HowItWorks } from "../HowItWorks";
import { MarketplacePreview } from "../MarketplacePreview";
import { Testimonials } from "../Testimonials";
import { Community } from "../Community";
import { Footer } from "../Footer";
import { FloatingCTA } from "../FloatingCTA";

export function LandingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <MarketplacePreview />
      <Testimonials />
      <Community />
      <Footer />
      <FloatingCTA />
    </div>
  );
}