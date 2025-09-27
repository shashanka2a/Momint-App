import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Eye, Heart, Users } from "lucide-react";

const featuredNFTs = [
  {
    id: 1,
    title: "Sunset Vibes",
    creator: "Alex Thompson",
    handle: "@alexvibes",
    price: "0.8 ETH",
    priceUSD: "$1,280",
    image: "https://images.unsplash.com/photo-1635237755468-5fba69c13f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwbmZ0fGVufDF8fHx8MTc1ODgxODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: ["VIP Event Access", "Exclusive Merch", "1:1 Call"],
    views: 2840,
    likes: 156,
    edition: "1 of 1",
    category: "Photography"
  },
  {
    id: 2,
    title: "Digital Dreams",
    creator: "Sarah Chen",
    handle: "@sarahcreates",
    price: "0.5 ETH",
    priceUSD: "$800",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzU4ODk3OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: ["Behind Scenes", "Discord Role", "Early Drops"],
    views: 1920,
    likes: 89,
    edition: "5 of 10",
    category: "Digital Art"
  },
  {
    id: 3,
    title: "Creative Flow",
    creator: "Maya Johnson",
    handle: "@mayastyle",
    price: "0.3 ETH",
    priceUSD: "$480",
    image: "https://images.unsplash.com/photo-1546380841-bf3afc314a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    perks: ["Tutorial Access", "15% Store Discount"],
    views: 3200,
    likes: 203,
    edition: "3 of 5",
    category: "Abstract"
  }
];

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-20 px-4 bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Discover Exclusive Moments
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Browse unique NFTs from your favorite creators, each with real utility and exclusive perks
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Photography", "Digital Art", "Music", "Sports", "Gaming"].map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                  category === "All" 
                    ? "bg-white text-[#1A1A1A]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Overlay stats */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                        {nft.category}
                      </Badge>
                      <Badge className="bg-purple-500/80 backdrop-blur-sm text-white border-purple-400/20">
                        {nft.edition}
                      </Badge>
                    </div>
                    
                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-white/80">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{nft.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{nft.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-white text-xl mb-2">{nft.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                      <div>
                        <p className="text-purple-200">{nft.creator}</p>
                        <p className="text-purple-300 text-sm">{nft.handle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-lg">{nft.price}</p>
                      <p className="text-purple-200 text-sm">{nft.priceUSD}</p>
                    </div>
                    <Button 
                      size="sm"
                      variant="gradient"
                    >
                      View Details
                    </Button>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-purple-200 text-sm mb-2">Included Perks:</p>
                    <div className="flex flex-wrap gap-2">
                      {nft.perks.map((perk, perkIndex) => (
                        <Badge 
                          key={perkIndex}
                          variant="outline"
                          className="text-xs border-white/20 text-purple-100"
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
            variant="outline"
            className="border-white/50 text-white hover:bg-white/20 px-8 py-4 transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm font-bold"
          >
            <Users className="w-5 h-5 mr-2" />
            Explore Full Marketplace
          </Button>
        </motion.div>
      </div>
    </section>
  );
}