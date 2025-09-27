import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Users, Zap } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-20 px-4 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Connect with creators and collectors in our vibrant community
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-white">50K+</h3>
              <p className="text-purple-200">Active Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-white">1.2K+</h3>
              <p className="text-purple-200">Verified Creators</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-white">25K+</h3>
              <p className="text-purple-200">NFTs Minted</p>
            </motion.div>
          </div>

          {/* Community platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-purple-100 mb-8">
              Join the conversation and stay updated on new drops
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="default"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 bg-white/5 backdrop-blur-sm font-bold"
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