import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Users, Zap } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-20 px-4 relative overflow-hidden seamless-section">
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Connect with creators and collectors in our vibrant community
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-momint-purple to-momint-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-primary font-bold">50K+</h3>
              <p className="text-secondary font-medium">Active Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-momint-blue to-momint-purple rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-primary font-bold">1.2K+</h3>
              <p className="text-secondary font-medium">Verified Creators</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-momint-purple to-momint-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-primary font-bold">25K+</h3>
              <p className="text-secondary font-medium">NFTs Minted</p>
            </motion.div>
          </div>

          {/* Enhanced Community platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-secondary mb-8 font-medium">
              Join the conversation and stay updated on new drops
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-bold shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </Button>
              
              <Button 
                size="lg" 
                className="glass-card text-primary hover:text-white hover:bg-momint-purple/20 px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-bold shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.68 12.44L8.86 3.18a1.5 1.5 0 0 0-2.36 1.88l5.34 7.94-5.34 7.94a1.5 1.5 0 0 0 2.36 1.88l6.82-9.26c.26-.37.26-.87 0-1.12z"/>
                </svg>
                Join Telegram
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}