'use client'

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AnimatedTabs, AnimatedTabsList, AnimatedTabsTrigger, AnimatedTabsContent } from "../ui/animated-tabs";
import { useApp } from "../../contexts/AppContext";
import { 
  Plus, 
  Grid3X3, 
  MessageSquare, 
  Bell, 
  TrendingUp, 
  Eye, 
  Heart,
  DollarSign,
  Users,
  Activity,
  Calendar,
  Star
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const mockOwnedNFTs = [
  {
    id: '1',
    title: 'Sunset Vibes',
    creator: 'Alex Thompson',
    image: 'https://images.unsplash.com/photo-1635237755468-5fba69c13f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwbmZ0fGVufDF8fHx8MTc1ODgxODU0Nnwx&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.8 ETH',
    unlocked: true
  },
  {
    id: '2',
    title: 'Digital Dreams',
    creator: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzU4ODk3OTc1fDA&ixlib=rb-4.1.0&q=80&w=400',
    price: '0.5 ETH',
    unlocked: false
  }
];

const mockCreatedNFTs = [
  {
    id: '3',
    title: 'Behind the Scenes',
    views: 2840,
    likes: 156,
    price: '0.3 ETH',
    sold: true,
    image: 'https://images.unsplash.com/photo-1546380841-bf3afc314a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc1ODkwMzU5OXww&ixlib=rb-4.1.0&q=80&w=400'
  }
];

const mockActivity = [
  { type: 'purchase', nft: 'Sunset Vibes', time: '2 hours ago', amount: '0.8 ETH' },
  { type: 'like', nft: 'Digital Dreams', time: '5 hours ago' },
  { type: 'comment', nft: 'Creative Flow', time: '1 day ago' }
];

export function DashboardScreen() {
  const { user, setCurrentScreen } = useApp();
  const isInfluencer = user?.type === 'influencer';

  const stats = isInfluencer ? [
    { label: 'Total Earnings', value: '$12,480', icon: DollarSign, change: '+12%' },
    { label: 'NFTs Sold', value: '23', icon: TrendingUp, change: '+5' },
    { label: 'Followers', value: '15.6K', icon: Users, change: '+2.3K' },
    { label: 'This Month', value: '$3,240', icon: Calendar, change: '+24%' }
  ] : [
    { label: 'NFTs Owned', value: '12', icon: Grid3X3, change: '+3' },
    { label: 'Total Spent', value: '$8,940', icon: DollarSign, change: '$450' },
    { label: 'Exclusive Content', value: '8', icon: Star, change: '+2' },
    { label: 'Activity', value: '156', icon: Activity, change: '+23' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* App Navigation */}
      <nav className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl text-white">Momint</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentScreen('marketplace')}
                className="text-white hover:bg-white/10"
              >
                Marketplace
              </Button>
              <div className="relative">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Bell className="w-5 h-5" />
                </Button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="text-xl">{user?.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl text-white">Welcome back, {user?.name}!</h1>
              <p className="text-purple-200">
                {isInfluencer ? 'Ready to mint your next masterpiece?' : 'Discover exclusive content from your favorite creators'}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-purple-300" />
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatedTabs defaultValue={isInfluencer ? "created" : "owned"} className="space-y-6">
          <AnimatedTabsList className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-1">
            {isInfluencer ? (
              <>
                <AnimatedTabsTrigger 
                  value="created" 
                  className="rounded-xl data-[state=active]:text-purple-900 text-white"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  My NFTs
                </AnimatedTabsTrigger>
                <AnimatedTabsTrigger 
                  value="analytics"
                  className="rounded-xl data-[state=active]:text-purple-900 text-white"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics
                </AnimatedTabsTrigger>
              </>
            ) : (
              <>
                <AnimatedTabsTrigger 
                  value="owned"
                  className="rounded-xl data-[state=active]:text-purple-900 text-white"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  My NFTs
                </AnimatedTabsTrigger>
                <AnimatedTabsTrigger 
                  value="activity"
                  className="rounded-xl data-[state=active]:text-purple-900 text-white"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Activity
                </AnimatedTabsTrigger>
              </>
            )}
            <AnimatedTabsTrigger 
              value="messages"
              className="rounded-xl data-[state=active]:text-purple-900 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </AnimatedTabsTrigger>
          </AnimatedTabsList>

          {/* Influencer Content */}
          {isInfluencer && (
            <>
              <AnimatedTabsContent value="created" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-white">My Created NFTs</h2>
                  <Button
                    onClick={() => setCurrentScreen('minting')}
                    variant="gradient"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Mint NFT
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockCreatedNFTs.map((nft) => (
                    <Card key={nft.id} className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden">
                      <div className="aspect-square relative">
                        <ImageWithFallback
                          src={nft.image}
                          alt={nft.title}
                          className="w-full h-full object-cover"
                        />
                        {nft.sold && (
                          <Badge className="absolute top-4 left-4 bg-green-500/80 text-white">
                            Sold
                          </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-white mb-2">{nft.title}</h3>
                        <div className="flex justify-between items-center text-sm text-purple-200 mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{nft.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{nft.likes}</span>
                            </div>
                          </div>
                          <span className="text-white">{nft.price}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </AnimatedTabsContent>

              <AnimatedTabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl text-white">Analytics Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                    <h3 className="text-white mb-4">Revenue This Month</h3>
                    <div className="text-3xl text-white mb-2">$3,240</div>
                    <div className="text-green-300">+24% from last month</div>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                    <h3 className="text-white mb-4">Top Performing NFT</h3>
                    <div className="text-xl text-white mb-2">Behind the Scenes</div>
                    <div className="text-purple-200">2,840 views • 156 likes</div>
                  </Card>
                </div>
              </AnimatedTabsContent>
            </>
          )}

          {/* Fan Content */}
          {!isInfluencer && (
            <>
              <AnimatedTabsContent value="owned" className="space-y-6">
                <h2 className="text-2xl text-white">My NFT Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockOwnedNFTs.map((nft) => (
                    <Card 
                      key={nft.id} 
                      className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/15 transition-all duration-300"
                      onClick={() => {
                        // In a real app, set selectedNFT and navigate to detail
                        setCurrentScreen('exclusive-content');
                      }}
                    >
                      <div className="aspect-square relative">
                        <ImageWithFallback
                          src={nft.image}
                          alt={nft.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge 
                          className={`absolute top-4 right-4 ${
                            nft.unlocked 
                              ? 'bg-green-500/80 text-white' 
                              : 'bg-gray-500/80 text-white'
                          }`}
                        >
                          {nft.unlocked ? 'Unlocked' : 'Locked'}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white mb-1">{nft.title}</h3>
                        <p className="text-purple-200 text-sm mb-2">by {nft.creator}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-white">{nft.price}</span>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            {nft.unlocked ? 'View Content' : 'Unlock'}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </AnimatedTabsContent>

              <AnimatedTabsContent value="activity" className="space-y-6">
                <h2 className="text-2xl text-white">Recent Activity</h2>
                <div className="space-y-4">
                  {mockActivity.map((activity, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                            {activity.type === 'purchase' && <DollarSign className="w-5 h-5 text-purple-300" />}
                            {activity.type === 'like' && <Heart className="w-5 h-5 text-purple-300" />}
                            {activity.type === 'comment' && <MessageSquare className="w-5 h-5 text-purple-300" />}
                          </div>
                          <div>
                            <p className="text-white">
                              {activity.type === 'purchase' && `Purchased ${activity.nft}`}
                              {activity.type === 'like' && `Liked ${activity.nft}`}
                              {activity.type === 'comment' && `Commented on ${activity.nft}`}
                            </p>
                            <p className="text-purple-200 text-sm">{activity.time}</p>
                          </div>
                        </div>
                        {activity.amount && (
                          <span className="text-white">{activity.amount}</span>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </AnimatedTabsContent>
            </>
          )}

          {/* Messages Tab (Common) */}
          <AnimatedTabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl text-white">Messages</h2>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
              <MessageSquare className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-white mb-2">No messages yet</h3>
              <p className="text-purple-200">
                {isInfluencer 
                  ? 'Fans who own your NFTs can send you messages here'
                  : 'Connect with creators through exclusive NFT ownership'
                }
              </p>
            </Card>
          </AnimatedTabsContent>
        </AnimatedTabs>
      </div>
    </div>
  );
}