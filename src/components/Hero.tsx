import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useApp } from "../contexts/AppContext";

export function Hero() {
  const { setCurrentScreen } = useApp();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 pt-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Own Moments from Your
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Favorite Influencers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white text-purple-900 hover:bg-purple-50 transition-all duration-300 px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl"
            >
              Get Early Access
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 transition-all duration-300 transform hover:scale-105 text-lg font-bold shadow-lg hover:shadow-xl"
            >
              View Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}