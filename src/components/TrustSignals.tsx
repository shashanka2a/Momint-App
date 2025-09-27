import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const trustedBy = [
  { name: "TechCrunch", logo: "TC" },
  { name: "Forbes", logo: "F" },
  { name: "Wired", logo: "W" },
  { name: "The Verge", logo: "TV" },
  { name: "Mashable", logo: "M" }
];

const stats = [
  { value: "2.5M+", label: "Creator Earnings" },
  { value: "98%", label: "Creator Satisfaction" },
  { value: "50K+", label: "NFTs Sold" },
  { value: "24/7", label: "Support" }
];

export function TrustSignals() {
  return (
    <section className="py-16 px-4 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-200 mb-8">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{brand.logo}</span>
                </div>
                <span className="ml-2 text-purple-100">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}