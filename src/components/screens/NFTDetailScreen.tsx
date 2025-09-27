'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { useApp } from "../../contexts/AppContext";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Eye, 
  ShoppingCart,
  Clock,
  Zap,
  Shield,
  Award,
  ExternalLink,
  MessageSquare,
  TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const mockTransactionHistory = [
  { type: 'Minted', user: 'Alex Thompson', price: '0.0 ETH', time: '2 months ago' },
  { type: 'Listed', user: 'Alex Thompson', price: '0.8 ETH', time: '2 months ago' },
  { type: 'Price Changed', user: 'Alex Thompson', price: '0.8 ETH', time: '1 month ago' }
];

const mockBids = [
  { user: 'CryptoCollector', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face', amount: '0.75 ETH', time: '2 hours ago' },
  { user: 'NFTEnthusiast', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b4ac?w=50&h=50&fit=crop&crop=face', amount: '0.7 ETH', time: '5 hours ago' },
  { user: 'ArtLover', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face', amount: '0.65 ETH', time: '1 day ago' }
];

export function NFTDetailScreen() {
  const { selectedNFT, setCurrentScreen, setSelectedNFT } = useApp();
  const [isLiked, setIsLiked] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [showBidInput, setShowBidInput] = useState(false);

  if (!selectedNFT) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">NFT not found</h2>
          <Button onClick={() => setCurrentScreen('marketplace')} variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Back to Marketplace
          </Button>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    // In a real app, this would initiate the purchase flow
    alert('Purchase flow would be initiated here');
  };

  const handlePlaceBid = () => {
    if (bidAmount) {
      alert(`Bid of ${bidAmount} ETH placed!`);
      setBidAmount('');
      setShowBidInput(false);
    }
  };

  const handleUnlockContent = () => {
    setSelectedNFT({
      ...selectedNFT,
      exclusiveContent: {
        type: 'video',
        content: 'https://sample-video-url.com/exclusive-content.mp4',
        unlocked: true
      }
    });
    setCurrentScreen('exclusive-content');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentScreen('marketplace')}
                className="text-white hover:bg-white/10 p-2"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Marketplace
              </Button>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`text-white hover:bg-white/10 ${isLiked ? 'text-red-400' : ''}`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {selectedNFT.likes + (isLiked ? 1 : 0)}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={selectedNFT.image}
                  alt={selectedNFT.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                    {selectedNFT.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500/80 backdrop-blur-sm text-white border-purple-400/20">
                    {selectedNFT.edition}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{selectedNFT.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{selectedNFT.likes}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Properties */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6 mt-6">
              <h3 className="text-white text-lg mb-4">Properties</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-purple-200 text-sm">Category</p>
                  <p className="text-white">{selectedNFT.category}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-purple-200 text-sm">Edition</p>
                  <p className="text-white">{selectedNFT.edition}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-purple-200 text-sm">Rarity</p>
                  <p className="text-white">Rare</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-purple-200 text-sm">Chain</p>
                  <p className="text-white">Ethereum</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title and Creator */}
            <div>
              <h1 className="text-4xl text-white mb-4">{selectedNFT.title}</h1>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={selectedNFT.creator.avatar} />
                  <AvatarFallback>{selectedNFT.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-purple-200">Created by</p>
                  <p className="text-white text-lg">{selectedNFT.creator.name}</p>
                  <p className="text-purple-300 text-sm">{selectedNFT.creator.handle}</p>
                </div>
              </div>
            </div>

            {/* Price and Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-purple-200 text-sm">Current Price</p>
                  <p className="text-3xl text-white">{selectedNFT.price}</p>
                  <p className="text-purple-200">{selectedNFT.priceUSD}</p>
                </div>
                <div className="text-right">
                  <p className="text-purple-200 text-sm">Ends in</p>
                  <p className="text-white text-lg">5 days</p>
                  <div className="flex items-center text-purple-200 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    2h 34m 12s
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mb-4">
                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white h-12"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
                <Button
                  onClick={() => setShowBidInput(!showBidInput)}
                  size="lg"
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 h-12"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Place Bid
                </Button>
              </div>

              {showBidInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/10 pt-4"
                >
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Enter bid amount (ETH)"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-purple-200 focus:border-purple-400 focus:outline-none"
                    />
                    <Button
                      onClick={handlePlaceBid}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      Submit Bid
                    </Button>
                  </div>
                </motion.div>
              )}
            </Card>

            {/* Perks Preview */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg">Exclusive Perks</h3>
                <Badge className="bg-green-500/20 text-green-300">
                  <Award className="w-3 h-3 mr-1" />
                  {selectedNFT.perks.length} Perks
                </Badge>
              </div>
              <div className="space-y-3">
                {selectedNFT.perks.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                    <Shield className="w-5 h-5 text-purple-300" />
                    <span className="text-white">{perk}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleUnlockContent}
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                Unlock Exclusive Content
              </Button>
            </Card>

            {/* Current Bids */}
            {mockBids.length > 0 && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
                <h3 className="text-white text-lg mb-4">Current Bids</h3>
                <div className="space-y-3">
                  {mockBids.map((bid, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={bid.avatar} />
                          <AvatarFallback>{bid.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white text-sm">{bid.user}</p>
                          <p className="text-purple-200 text-xs">{bid.time}</p>
                        </div>
                      </div>
                      <p className="text-white">{bid.amount}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Tabs defaultValue="description" className="space-y-6">
            <TabsList className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-1">
              <TabsTrigger 
                value="description" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-purple-900 text-white"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="creator"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-purple-900 text-white"
              >
                Creator Bio
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-purple-900 text-white"
              >
                Transaction History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
                <p className="text-purple-200 mb-4">{selectedNFT.description}</p>
                <Separator className="bg-white/10 my-4" />
                <div className="space-y-3">
                  <h4 className="text-white">What you get:</h4>
                  <ul className="space-y-2">
                    {selectedNFT.perks.map((perk, index) => (
                      <li key={index} className="flex items-center space-x-2 text-purple-200">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="creator">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={selectedNFT.creator.avatar} />
                    <AvatarFallback>{selectedNFT.creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-2">{selectedNFT.creator.name}</h3>
                    <p className="text-purple-200 mb-4">{selectedNFT.creator.handle}</p>
                    <p className="text-purple-200 mb-4">
                      Digital artist and content creator passionate about exploring the intersection of technology and creativity. 
                      Known for vibrant, thought-provoking pieces that challenge conventional artistic boundaries.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-purple-200">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>23 NFTs Created</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>15.6K Followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
                <div className="space-y-4">
                  {mockTransactionHistory.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-purple-300" />
                        </div>
                        <div>
                          <p className="text-white">{transaction.type}</p>
                          <p className="text-purple-200 text-sm">by {transaction.user}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white">{transaction.price}</p>
                        <p className="text-purple-200 text-sm">{transaction.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}