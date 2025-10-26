import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Mail, Bell } from "lucide-react";
import { useState } from "react";

export function Community() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Join our waitlist and get early access when we launch
          </p>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mt-12 mb-12"
          >
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-momint-purple focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-gradient-to-r from-momint-purple to-momint-blue hover:from-momint-purple-dark hover:to-momint-blue-dark text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-bold shadow-lg hover:shadow-xl"
                  >
                    <Bell className="w-5 h-5" />
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-secondary text-center">
                  Get notified about our launch and exclusive early access
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl text-primary font-bold">You're on the list!</h3>
                <p className="text-secondary">
                  We'll notify you as soon as we launch. Get ready for something amazing! 🚀
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Community platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-secondary mb-8 font-medium">
              Follow us for updates and behind-the-scenes content
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