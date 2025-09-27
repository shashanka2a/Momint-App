'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useApp, NFT } from "../../contexts/AppContext";
import { 
  Search, 
  Grid3X3, 
  List, 
  Filter,
  ArrowLeft,
  Eye,
  Heart,
  ShoppingCart,
  TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { NFTCard } from "../ui/nft-card";

const mockNFTs: NFT[] = [
  {
    id: '1',
    title: 'Sunset Vibes',
    description: 'A breathtaking sunset moment captured in digital art',
    image: 'https://images.unsplash.com/photo-1635237755468-5fba69c13f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwbmZ0fGVufDF8fHx8MTc1ODgxODU0Nnwx&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.8 ETH',
    priceUSD: '$1,280',
    creator: {
      id: '1',
      name: 'Alex Thompson',
      handle: '@alexvibes',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Photography',
    perks: ['VIP Event Access', 'Exclusive Merch', '1:1 Call'],
    views: 2840,
    likes: 156,
    edition: '1 of 1',
    isLocked: false
  },
  {
    id: '2',
    title: 'Digital Dreams',
    description: 'Exploring the intersection of reality and digital art',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzU4ODk3OTc1fDA&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.5 ETH',
    priceUSD: '$800',
    creator: {
      id: '2',
      name: 'Sarah Chen',
      handle: '@sarahcreates',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b4ac?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Digital Art',
    perks: ['Behind Scenes', 'Discord Role', 'Early Drops'],
    views: 1920,
    likes: 89,
    edition: '5 of 10',
    isLocked: false
  },
  {
    id: '3',
    title: 'Creative Flow',
    description: 'An abstract representation of the creative process',
    image: 'https://images.unsplash.com/photo-1546380841-bf3afc314a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.3 ETH',
    priceUSD: '$480',
    creator: {
      id: '3',
      name: 'Maya Johnson',
      handle: '@mayastyle',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Abstract',
    perks: ['Tutorial Access', '15% Store Discount'],
    views: 3200,
    likes: 203,
    edition: '3 of 5',
    isLocked: false
  },
  {
    id: '4',
    title: 'Urban Rhythm',
    description: 'The pulse of city life captured in motion',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFydCUyMG5mdHxlbnwxfHx8fDE3NTg5MDM1OTl8MA&ixlib=rb-4.1.0&q=80&w=400',
    price: '1.2 ETH',
    priceUSD: '$1,920',
    creator: {
      id: '4',
      name: 'Marcus Rivera',
      handle: '@marcusart',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Photography',
    perks: ['Private Workshop', 'Signed Print', 'Meet & Greet'],
    views: 4150,
    likes: 298,
    edition: '1 of 3',
    isLocked: false
  },
  {
    id: '5',
    title: 'Neon Nights',
    description: 'Cyberpunk aesthetics meet modern art',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwYXJ0fGVufDF8fHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.6 ETH',
    priceUSD: '$960',
    creator: {
      id: '5',
      name: 'Elena Vasquez',
      handle: '@elenadigital',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Digital Art',
    perks: ['Design Files', 'Commercial License', 'Collaboration'],
    views: 2760,
    likes: 187,
    edition: '2 of 7',
    isLocked: false
  },
  {
    id: '6',
    title: 'Nature\'s Symphony',
    description: 'The harmony between nature and technology',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBhcnR8ZW58MXx8fHwxNzU4OTAzNTk5fDA&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.4 ETH',
    priceUSD: '$640',
    creator: {
      id: '6',
      name: 'David Kim',
      handle: '@davidnature',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    category: 'Nature',
    perks: ['Photo Workshop', 'Location Guide', 'Equipment Tips'],
    views: 1890,
    likes: 134,
    edition: '4 of 8',
    isLocked: false
  }
];

const categories = ['All', 'Photography', 'Digital Art', 'Abstract', 'Nature', 'Music', 'Sports'];
const sortOptions = ['Recent', 'Price: Low to High', 'Price: High to Low', 'Most Popular', 'Most Liked'];

export function MarketplaceScreen() {
  const { setCurrentScreen, setSelectedNFT } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');

  const filteredNFTs = mockNFTs.filter(nft => {
    const matchesSearch = nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         nft.creator.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = parseFloat(nft.price) < 0.5;
    else if (priceRange === 'mid') matchesPrice = parseFloat(nft.price) >= 0.5 && parseFloat(nft.price) < 1.0;
    else if (priceRange === 'high') matchesPrice = parseFloat(nft.price) >= 1.0;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleNFTClick = (nft: NFT) => {
    setSelectedNFT(nft);
    setCurrentScreen('nft-detail');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl text-white">Marketplace</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-4 h-4" />
                <Input
                  placeholder="Search NFTs, creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'white' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'white' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-purple-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Price Filter */}
            <Select value={priceRange} onValueChange={(value: any) => setPriceRange(value)}>
              <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-purple-900 border-white/20">
                <SelectItem value="all" className="text-white">All Prices</SelectItem>
                <SelectItem value="low" className="text-white">Under 0.5 ETH</SelectItem>
                <SelectItem value="mid" className="text-white">0.5 - 1.0 ETH</SelectItem>
                <SelectItem value="high" className="text-white">Over 1.0 ETH</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-purple-900 border-white/20">
                {sortOptions.map(option => (
                  <SelectItem key={option} value={option} className="text-white">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-purple-200">
            Showing {filteredNFTs.length} of {mockNFTs.length} NFTs
          </p>
          <div className="flex items-center space-x-2 text-purple-200">
            <TrendingUp className="w-4 h-4" />
            <span>Market is up 12% today</span>
          </div>
        </div>

        {/* NFT Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={
            viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {viewMode === 'grid' ? (
                <NFTCard
                  nft={nft}
                  onClick={() => handleNFTClick(nft)}
                  onBuy={(e) => {
                    e.stopPropagation();
                    // Handle buy action
                  }}
                  onView={(e) => {
                    e.stopPropagation();
                    // Handle view action
                  }}
                />
              ) : (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-4 transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={nft.image}
                        alt={nft.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white text-lg mb-1">{nft.title}</h3>
                          <p className="text-purple-200 text-sm mb-2">by {nft.creator.name}</p>
                          <div className="flex items-center space-x-4 text-sm text-purple-300">
                            <span>{nft.category}</span>
                            <span>{nft.edition}</span>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{nft.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{nft.likes}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-lg">{nft.price}</p>
                          <p className="text-purple-200 text-sm mb-3">{nft.priceUSD}</p>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-white/20 text-white hover:bg-white/10"
                            >
                              View
                            </Button>
                            <Button 
                              size="sm" 
                              variant="gradient"
                            >
                              Buy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {filteredNFTs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              Load More NFTs
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}