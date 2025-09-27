import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useApp } from "../contexts/AppContext";

const nftCards = [
  {
    id: 1,
    title: "Digital Dreams",
    creator: "@artInfluencer",
    price: "0.5 ETH",
    image: "https://images.unsplash.com/photo-1635237755468-5fba69c13f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwbmZ0fGVufDF8fHx8MTc1ODgxODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: "Meet & Greet + Discord Access"
  },
  {
    id: 2,
    title: "Social Moment",
    creator: "@trendingStar",
    price: "0.3 ETH",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzU4ODk3OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: "Exclusive Content + 20% Merch Discount"
  },
  {
    id: 3,
    title: "Abstract Vision",
    creator: "@creativeGuru",
    price: "0.8 ETH",
    image: "https://images.unsplash.com/photo-1546380841-bf3afc314a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: "1-on-1 Call + Early Access to Drops"
  }
];

export function Hero() {
  const { setCurrentScreen } = useApp();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 pt-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 -z-10" />
      
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Own Moments from Your
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Favorite Influencers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Exclusive NFTs with perks like meet-and-greets, discounts, gated content
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={() => setCurrentScreen('auth')}
              className="bg-white text-purple-900 hover:bg-purple-50 transition-all duration-300 px-8 py-4"
            >
              Get Early Access
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-purple-200"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-white/20" />
              ))}
            </div>
            <span>Join 50,000+ creators already earning</span>
          </motion.div>
        </motion.div>

        {/* NFT Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {nftCards.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white mb-1">{nft.title}</h3>
                      <p className="text-purple-200">{nft.creator}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white">{nft.price}</p>
                    </div>
                  </div>
                  <p className="text-purple-100">{nft.perks}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}