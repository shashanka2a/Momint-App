import { motion } from "framer-motion";
import { DollarSign, Users, Shield, Heart, Lock, MessageCircle } from "lucide-react";

const influencerChallenges = [
  {
    icon: DollarSign,
    title: "Monetization Limits",
    description: "Platform algorithms and ad revenue caps limit earning potential"
  },
  {
    icon: Users,
    title: "Engagement Issues", 
    description: "Declining organic reach makes it harder to connect with audiences"
  },
  {
    icon: Shield,
    title: "Rights & Ownership",
    description: "Content creators lose control and ownership of their work"
  }
];

const fanChallenges = [
  {
    icon: Heart,
    title: "No True Ownership",
    description: "Supporting creators doesn't give fans anything lasting or valuable"
  },
  {
    icon: Lock,
    title: "Limited Exclusivity",
    description: "Everyone sees the same content - no special access or perks"
  },
  {
    icon: MessageCircle,
    title: "Poor Interaction",
    description: "One-way communication with little meaningful connection"
  }
];

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-20 px-4 bg-gradient-to-b from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Solving Real Problems
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Traditional social platforms create barriers between creators and fans. We&apos;re changing that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Influencer Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-8">
              For Influencers
            </h3>
            {influencerChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <challenge.icon className="w-8 h-8 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-white mb-2">{challenge.title}</h4>
                  <p className="text-purple-100">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fan Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-8">
              For Fans
            </h3>
            {fanChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <challenge.icon className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-white mb-2">{challenge.title}</h4>
                  <p className="text-purple-100">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}