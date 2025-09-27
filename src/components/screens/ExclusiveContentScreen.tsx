'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useApp } from "../../contexts/AppContext";
import { 
  ArrowLeft, 
  Play, 
  Download, 
  Share2, 
  Lock,
  Unlock,
  Star,
  Calendar,
  Clock,
  MessageSquare,
  Gift,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { UnlockAnimation } from "../ui/unlock-animation";

const mockExclusiveContent = {
  video: {
    title: "Behind the Scenes: Creative Process",
    description: "Get an exclusive look at how this NFT was created, including my thought process, techniques used, and the story behind the piece.",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4OTAzNTk5fDA&ixlib=rb-4.1.0&q=80&w=800"
  },
  gallery: [
    {
      title: "Work in Progress #1",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwaW4lMjBwcm9ncmVzc3xlbnwxfHx8fDE3NTg5MDM1OTl8MA&ixlib=rb-4.1.0&q=80&w=400",
      description: "Early sketches and concepts"
    },
    {
      title: "Work in Progress #2", 
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBza2V0Y2h8ZW58MXx8fHwxNzU4OTAzNTk5fDA&ixlib=rb-4.1.0&q=80&w=400",
      description: "Digital refinements"
    },
    {
      title: "Final Touches",
      image: "https://images.unsplash.com/photo-1634641292020-3e3dd25b6a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTg5MDM1OTl8MA&ixlib=rb-4.1.0&q=80&w=400",
      description: "Color adjustments and final details"
    }
  ],
  message: {
    from: "Alex Thompson",
    timestamp: "2 hours ago",
    content: "Hey there! Thanks for collecting my NFT. I'm thrilled to share this exclusive content with you. This piece represents a significant moment in my artistic journey, and I hope it brings you as much joy as it brought me to create. Feel free to reach out if you have any questions about the work or my process!",
    isPersonalized: true
  },
  perks: [
    {
      title: "VIP Event Access",
      description: "Exclusive invitation to my next gallery opening",
      claimed: false,
      claimBy: "December 31, 2024"
    },
    {
      title: "1:1 Video Call",
      description: "30-minute personal consultation about art and creativity",
      claimed: false,
      claimBy: "January 15, 2025"
    },
    {
      title: "Exclusive Merch",
      description: "Limited edition print of this NFT",
      claimed: true,
      claimedDate: "October 15, 2024"
    }
  ]
};

export function ExclusiveContentScreen() {
  const { selectedNFT, setCurrentScreen } = useApp();
  const [activeTab, setActiveTab] = useState<'video' | 'gallery' | 'message' | 'perks'>('video');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!selectedNFT) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Content not found</h2>
          <Button onClick={() => setCurrentScreen('dashboard')} variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const isUnlocked = selectedNFT.exclusiveContent?.unlocked;

  const handleClaimPerk = (perkIndex: number) => {
    // In a real app, this would trigger the claim process
    alert(`Perk "${mockExclusiveContent.perks[perkIndex].title}" claimed successfully!`);
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-4"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl p-8 text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-purple-300" />
            </div>
            
            <h2 className="text-2xl text-white mb-4">Content Locked</h2>
            <p className="text-purple-200 mb-6">
              This exclusive content is only available to owners of &ldquo;{selectedNFT.title}&rdquo;. 
              Purchase this NFT to unlock behind-the-scenes content, exclusive media, and special perks.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-purple-200">
                <Play className="w-4 h-4" />
                <span>Behind-the-scenes video</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-200">
                <ImageWithFallback className="w-4 h-4" />
                <span>Exclusive image gallery</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-200">
                <MessageSquare className="w-4 h-4" />
                <span>Personal message from creator</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-200">
                <Gift className="w-4 h-4" />
                <span>{selectedNFT.perks.length} exclusive perks</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={() => setCurrentScreen('nft-detail')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                View NFT Details
              </Button>
              <Button
                onClick={() => setCurrentScreen('marketplace')}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Browse Marketplace
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentScreen('dashboard')}
                className="text-white hover:bg-white/10 p-2"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedNFT.creator.avatar} />
                  <AvatarFallback>{selectedNFT.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg text-white">{selectedNFT.title}</h1>
                  <p className="text-purple-200 text-sm">by {selectedNFT.creator.name}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-500/20 text-green-300">
                <Unlock className="w-3 h-3 mr-1" />
                Unlocked
              </Badge>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['video', 'gallery', 'message', 'perks'] as const).map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant={activeTab === tab ? 'default' : 'outline'}
              className={
                activeTab === tab
                  ? 'bg-white text-purple-900'
                  : 'border-white/20 text-white hover:bg-white/10'
              }
            >
              {tab === 'video' && <Play className="w-4 h-4 mr-2" />}
              {tab === 'gallery' && <ImageWithFallback className="w-4 h-4 mr-2" />}
              {tab === 'message' && <MessageSquare className="w-4 h-4 mr-2" />}
              {tab === 'perks' && <Gift className="w-4 h-4 mr-2" />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'video' && (
            <UnlockAnimation isUnlocked={isUnlocked}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden">
                <div className="aspect-video relative bg-black">
                  <ImageWithFallback
                    src={mockExclusiveContent.video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full w-20 h-20"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/60 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {mockExclusiveContent.video.duration}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl mb-3">{mockExclusiveContent.video.title}</h3>
                  <p className="text-purple-200 mb-4">{mockExclusiveContent.video.description}</p>
                  <div className="flex space-x-3">
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            </UnlockAnimation>
          )}

          {activeTab === 'gallery' && (
            <UnlockAnimation isUnlocked={isUnlocked}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockExclusiveContent.gallery.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card 
                        className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/15 transition-all duration-300"
                        onClick={() => setSelectedImage(index)}
                      >
                        <div className="aspect-square relative">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-white mb-2">{item.title}</h4>
                          <p className="text-purple-200 text-sm">{item.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {/* Featured Image */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl overflow-hidden">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={mockExclusiveContent.gallery[selectedImage].image}
                      alt={mockExclusiveContent.gallery[selectedImage].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">{mockExclusiveContent.gallery[selectedImage].title}</h3>
                    <p className="text-purple-200 mb-4">{mockExclusiveContent.gallery[selectedImage].description}</p>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download High Resolution
                    </Button>
                  </div>
                </Card>
              </div>
            </UnlockAnimation>
          )}

          {activeTab === 'message' && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl p-8">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16 flex-shrink-0">
                  <AvatarImage src={selectedNFT.creator.avatar} />
                  <AvatarFallback>{selectedNFT.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-white text-lg">{mockExclusiveContent.message.from}</h3>
                    {mockExclusiveContent.message.isPersonalized && (
                      <Badge className="bg-purple-500/20 text-purple-300">
                        <Star className="w-3 h-3 mr-1" />
                        Personalized
                      </Badge>
                    )}
                    <span className="text-purple-200 text-sm">{mockExclusiveContent.message.timestamp}</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <p className="text-white leading-relaxed">{mockExclusiveContent.message.content}</p>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Reply
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Share2 className="w-3 h-3 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'perks' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl text-white mb-2">Your Exclusive Perks</h2>
                <p className="text-purple-200">These benefits are exclusively available to you as an NFT holder</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockExclusiveContent.perks.map((perk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className={`p-6 transition-all duration-300 ${
                      perk.claimed 
                        ? 'bg-green-500/10 border-green-500/20' 
                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          perk.claimed ? 'bg-green-500/20' : 'bg-purple-500/20'
                        }`}>
                          {perk.claimed ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : (
                            <Gift className="w-6 h-6 text-purple-400" />
                          )}
                        </div>
                        <Badge className={perk.claimed ? 'bg-green-500/20 text-green-300' : 'bg-purple-500/20 text-purple-300'}>
                          {perk.claimed ? 'Claimed' : 'Available'}
                        </Badge>
                      </div>
                      
                      <h3 className="text-white text-lg mb-2">{perk.title}</h3>
                      <p className="text-purple-200 text-sm mb-4">{perk.description}</p>
                      
                      {perk.claimed ? (
                        <div className="flex items-center text-green-300 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          Claimed on {perk.claimedDate}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex items-center text-purple-200 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            Claim by {perk.claimBy}
                          </div>
                          <Button
                            onClick={() => handleClaimPerk(index)}
                            size="sm"
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                          >
                            Claim Perk
                          </Button>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}