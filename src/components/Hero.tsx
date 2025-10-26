import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useApp } from "../contexts/AppContext";

export function Hero() {
  const { setCurrentScreen } = useApp();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 pt-24 relative overflow-hidden seamless-section">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-tight">
            Own Moments from Your
            <br />
            <span className="bg-gradient-to-r from-momint-purple to-momint-blue bg-clip-text text-transparent animate-gradient-shift">
              Favorite Influencers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Exclusive NFTs with perks like meet-and-greets, discounts, and gated content
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={() => setCurrentScreen('auth')}
              className="bg-momint-purple hover:bg-momint-purple-dark text-white px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-2xl animate-pulse-glow"
            >
              Get Early Access
            </Button>
            <Button 
              size="lg" 
              className="glass-card text-primary hover:text-white hover:bg-momint-purple/20 px-10 py-4 transition-all duration-300 transform hover:scale-105 text-lg font-bold shadow-lg hover:shadow-xl rounded-2xl"
            >
              View Demo
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 text-tertiary text-sm"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>50K+ Active Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>1.2K+ Verified Creators</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>25K+ NFTs Minted</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}