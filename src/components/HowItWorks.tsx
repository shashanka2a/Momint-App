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
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Three simple steps to transform social moments into valuable digital assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl md:text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}