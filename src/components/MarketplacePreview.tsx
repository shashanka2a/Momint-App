import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Eye, Heart, Users } from "lucide-react";

const featuredNFTs = [
  {
    id: 1,
    title: "Digital Sunset",
    creator: "Alex Thompson",
    handle: "@alexvibes",
    price: "0.8 ETH",
    priceUSD: "$1,280",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc1ODgxODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: ["VIP Event Access", "Exclusive Merch", "1:1 Call"],
    views: 2840,
    likes: 156,
    edition: "1 of 1",
    category: "Photography",
    rarity: "Legendary"
  },
  {
    id: 2,
    title: "Neon Dreams",
    creator: "Sarah Chen",
    handle: "@sarahcreates",
    price: "0.5 ETH",
    priceUSD: "$800",
    image: "https://images.unsplash.com/photo-1746128034004-15f131d1d30c?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    perks: ["Behind Scenes", "Discord Role", "Early Drops"],
    views: 1920,
    likes: 89,
    edition: "5 of 10",
    category: "Digital Art",
    rarity: "Epic"
  },
  {
    id: 3,
    title: "Cosmic Flow",
    creator: "Maya Johnson",
    handle: "@mayastyle",
    price: "0.3 ETH",
    priceUSD: "$480",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBzcGFjZSUyMGFydHxlbnwxfHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: ["Tutorial Access", "15% Store Discount"],
    views: 3200,
    likes: 203,
    edition: "3 of 5",
    category: "Abstract",
    rarity: "Rare"
  }
];

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-20 px-4 relative overflow-hidden seamless-section">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
            Discover Exclusive Moments
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Browse unique NFTs from your favorite creators, each with real utility and exclusive perks
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Photography", "Digital Art", "Music", "Sports", "Gaming"].map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "secondary"}
                className={`px-6 py-3 cursor-pointer transition-all duration-300 text-sm font-medium ${
                  category === "All" 
                    ? "bg-momint-purple text-white hover:bg-momint-purple-dark animate-pulse-glow" 
                    : "glass-card text-secondary hover:text-primary hover:bg-momint-purple/20"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="glass-card rounded-3xl overflow-hidden card-hover">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Enhanced overlay stats */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <Badge className="glass text-primary border-momint-purple/30">
                        {nft.category}
                      </Badge>
                      <div className="flex flex-col gap-2">
                        <Badge className="bg-momint-purple/90 text-white border-momint-purple/50">
                          {nft.edition}
                        </Badge>
                        <Badge className={`text-xs font-bold ${
                          nft.rarity === 'Legendary' ? 'bg-yellow-500/90 text-yellow-900' :
                          nft.rarity === 'Epic' ? 'bg-purple-500/90 text-white' :
                          'bg-blue-500/90 text-white'
                        }`}>
                          {nft.rarity}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Enhanced bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-primary/90">
                        <div className="flex items-center space-x-1 glass px-3 py-1 rounded-full">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">{nft.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 glass px-3 py-1 rounded-full">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">{nft.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-primary text-xl font-bold mb-2">{nft.title}</h3>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-momint-purple to-momint-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {nft.creator.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-secondary font-medium">{nft.creator}</p>
                        <p className="text-tertiary text-sm">{nft.handle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-primary text-lg font-bold">{nft.price}</p>
                      <p className="text-secondary text-sm">{nft.priceUSD}</p>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-momint-purple hover:bg-momint-purple-dark text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      View Details
                    </Button>
                  </div>
                  
                  <div className="border-t border-momint-purple/20 pt-4">
                    <p className="text-secondary text-sm mb-3 font-medium">Included Perks:</p>
                    <div className="flex flex-wrap gap-2">
                      {nft.perks.map((perk, perkIndex) => (
                        <Badge 
                          key={perkIndex}
                          variant="outline"
                          className="text-xs border-momint-purple/30 text-tertiary hover:text-primary hover:border-momint-purple/50 transition-colors duration-200"
                        >
                          {perk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="glass-card text-primary hover:text-white hover:bg-momint-purple/20 px-8 py-4 transition-all duration-300 transform hover:scale-105 font-bold text-lg rounded-2xl"
          >
            <Users className="w-5 h-5 mr-2" />
            Explore Full Marketplace
          </Button>
        </motion.div>
      </div>
    </section>
  );
}