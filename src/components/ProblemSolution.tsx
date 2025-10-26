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
    <section id="problem-solution" className="py-20 px-4 bg-momint-secondary relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-800/20 animate-gradient-shift" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Solving Real Problems
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
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
            <h3 className="text-2xl md:text-3xl text-primary font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-momint-purple to-momint-blue rounded-lg flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              For Influencers
            </h3>
            {influencerChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-momint-purple/20 to-momint-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-6 h-6 text-momint-purple" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-primary font-bold mb-2 text-lg">{challenge.title}</h4>
                    <p className="text-secondary leading-relaxed">{challenge.description}</p>
                  </div>
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
            <h3 className="text-2xl md:text-3xl text-primary font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-momint-blue to-momint-purple rounded-lg flex items-center justify-center mr-3">
                <Heart className="w-5 h-5 text-white" />
              </div>
              For Fans
            </h3>
            {fanChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-momint-blue/20 to-momint-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-6 h-6 text-momint-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-primary font-bold mb-2 text-lg">{challenge.title}</h4>
                    <p className="text-secondary leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}