import { motion } from "framer-motion";
import { Sparkles, Zap, Gift } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    number: "01",
    title: "AI Transforms Content",
    description: "Our AI turns your social posts into unique digital art pieces that capture your most memorable moments"
  },
  {
    icon: Zap,
    number: "02", 
    title: "Easy NFT Minting",
    description: "Influencers mint NFTs effortlessly with our streamlined process - no technical knowledge required"
  },
  {
    icon: Gift,
    number: "03",
    title: "Fans Unlock Perks",
    description: "NFT holders get exclusive access to meet-and-greets, private content, discounts, and special experiences"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden seamless-section">
      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Three simple steps to transform social moments into valuable digital assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-card rounded-3xl p-8 card-hover h-full">
                {/* Enhanced step number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-momint-purple to-momint-blue rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Enhanced icon */}
                <div className="flex justify-center mb-8 mt-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-momint-purple/20 to-momint-blue/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-momint-purple" />
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="text-center space-y-6">
                  <h3 className="text-xl md:text-2xl text-primary font-bold">
                    {step.title}
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Enhanced connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-momint-purple to-momint-blue rounded-full transform -translate-y-1/2 animate-pulse" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}