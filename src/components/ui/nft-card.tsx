'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { NFT } from "../../contexts/AppContext";

interface NFTCardProps {
  nft: NFT;
  onClick?: () => void;
  onBuy?: (e: React.MouseEvent) => void;
  onView?: (e: React.MouseEvent) => void;
}

export function NFTCard({ nft, onClick, onBuy, onView }: NFTCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/15 relative">
        {/* Enhanced shadow glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 0.8,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Flip container */}
        <motion.div
          className="relative aspect-square"
          style={{ perspective: "1000px" }}
          onHoverStart={() => setIsFlipped(true)}
          onHoverEnd={() => setIsFlipped(false)}
        >
          {/* Front side - Image */}
          <motion.div
            className="absolute inset-0 backface-hidden"
            animate={{ 
              rotateY: isFlipped ? 180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d" 
            }}
          >
            <div className="relative overflow-hidden h-full">
              <ImageWithFallback
                src={nft.image}
                alt={nft.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Overlay info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                  {nft.category}
                </Badge>
                <Badge className="bg-purple-500/80 backdrop-blur-sm text-white border-purple-400/20">
                  {nft.edition}
                </Badge>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="flex items-center space-x-4 text-white/80">
                  <motion.div 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{nft.views.toLocaleString()}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{nft.likes}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back side - Price & Creator */}
          <motion.div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md flex flex-col justify-center items-center p-6 text-center"
            animate={{ 
              rotateY: isFlipped ? 0 : -180,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transform: "rotateY(180deg)"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isFlipped ? 1 : 0,
                y: isFlipped ? 0 : 20
              }}
              transition={{ duration: 0.3, delay: isFlipped ? 0.3 : 0 }}
              className="space-y-4"
            >
              <div className="text-center">
                <p className="text-white text-3xl mb-2">{nft.price}</p>
                <p className="text-purple-200">{nft.priceUSD}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={nft.creator.avatar} />
                  <AvatarFallback>{nft.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-white text-sm">{nft.creator.name}</p>
                  <p className="text-purple-300 text-xs">{nft.creator.handle}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={onView}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  View
                </Button>
                <Button 
                  size="sm"
                  onClick={onBuy}
                  variant="gradient"
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Buy
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Card content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-white text-xl mb-2">{nft.title}</h3>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
              <div>
                <p className="text-purple-200">{nft.creator.name}</p>
                <p className="text-purple-300 text-sm">{nft.creator.handle}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-lg">{nft.price}</p>
              <p className="text-purple-200 text-sm">{nft.priceUSD}</p>
            </div>
            <div className="flex space-x-2">
              <Button 
                size="sm"
                variant="outline"
                onClick={onView}
                className="border-white/20 text-white hover:bg-white/10"
              >
                View
              </Button>
              <Button 
                size="sm"
                onClick={onBuy}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                Buy
              </Button>
            </div>
          </div>
          
          {/* Perks section */}
          <div className="border-t border-white/10 pt-4">
            <p className="text-purple-200 text-sm mb-2">Perks:</p>
            <div className="flex flex-wrap gap-2">
              {nft.perks.slice(0, 2).map((perk, perkIndex) => (
                <motion.div
                  key={perkIndex}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="outline"
                    className="text-xs border-white/20 text-purple-100 hover:bg-white/10 transition-colors duration-300"
                  >
                    {perk}
                  </Badge>
                </motion.div>
              ))}
              {nft.perks.length > 2 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="outline"
                    className="text-xs border-white/20 text-purple-100 hover:bg-white/10 transition-colors duration-300"
                  >
                    +{nft.perks.length - 2} more
                  </Badge>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}