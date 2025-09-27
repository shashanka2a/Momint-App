'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { EnhancedProgress } from "../ui/enhanced-progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { useApp } from "../../contexts/AppContext";
import { 
  ArrowLeft, 
  ArrowRight,
  Upload, 
  Sparkles, 
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MintingStep {
  id: number;
  title: string;
  description: string;
}

const steps: MintingStep[] = [
  { id: 1, title: "Upload", description: "Upload your content" },
  { id: 2, title: "Preview", description: "AI enhancement preview" },
  { id: 3, title: "Details", description: "Add title & description" },
  { id: 4, title: "Perks", description: "Set exclusive perks" },
  { id: 5, title: "Pricing", description: "Set price & auction" },
  { id: 6, title: "Mint", description: "Finalize and mint" }
];

const perkOptions = [
  "Behind-the-scenes content",
  "1:1 video call",
  "Exclusive Discord access",
  "Early drop notifications",
  "Physical merchandise",
  "Workshop access",
  "Collaboration opportunity",
  "Custom content creation"
];

export function MintingScreen() {
  const { setCurrentScreen } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    file: null as File | null,
    preview: '',
    title: '',
    description: '',
    category: '',
    perks: [] as string[],
    price: '',
    isAuction: false,
    auctionDuration: '7',
    royalty: '10'
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, preview: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePerkToggle = (perk: string) => {
    setFormData(prev => ({
      ...prev,
      perks: prev.perks.includes(perk)
        ? prev.perks.filter(p => p !== perk)
        : [...prev.perks, perk]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    
    // Simulate minting process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsMinting(false);
    setMintSuccess(true);
    
    // Navigate after success animation
    setTimeout(() => {
      setCurrentScreen('dashboard');
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Upload
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">Upload Your Content</h2>
              <p className="text-purple-200">Choose an image, video, or audio file to mint as an NFT</p>
            </div>

            <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 text-center">
              {formData.preview ? (
                <div className="space-y-4">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={formData.preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white">{formData.file?.name}</p>
                  <Button
                    onClick={() => document.getElementById('file-upload')?.click()}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Change File
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="w-16 h-16 text-purple-300 mx-auto" />
                  <div>
                    <p className="text-white mb-2">Drag and drop or click to upload</p>
                    <p className="text-purple-200 text-sm">Support JPG, PNG, GIF, MP4, MP3 (Max 100MB)</p>
                  </div>
                  <Button
                    onClick={() => document.getElementById('file-upload')?.click()}
                    variant="gradient"
                  >
                    Choose File
                  </Button>
                </div>
              )}
              
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*,audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        );

      case 2: // AI Preview
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">AI Enhancement Preview</h2>
              <p className="text-purple-200">Our AI has analyzed your content and suggests these enhancements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white mb-3">Original</h3>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={formData.preview}
                    alt="Original"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-white mb-3">AI Enhanced</h3>
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-purple-400">
                  <ImageWithFallback
                    src={formData.preview}
                    alt="Enhanced"
                    className="w-full h-full object-cover filter brightness-110 contrast-110 saturate-110"
                  />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 mt-2">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Enhanced
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="use-enhancement" />
              <Label htmlFor="use-enhancement" className="text-white">
                Use AI enhancement (Recommended)
              </Label>
            </div>
          </div>
        );

      case 3: // Details
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">Add Details</h2>
              <p className="text-purple-200">Give your NFT a compelling title and description</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-white">Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter NFT title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your NFT and what makes it special"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-white">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-900 border-white/20">
                    <SelectItem value="photography" className="text-white">Photography</SelectItem>
                    <SelectItem value="digital-art" className="text-white">Digital Art</SelectItem>
                    <SelectItem value="music" className="text-white">Music</SelectItem>
                    <SelectItem value="video" className="text-white">Video</SelectItem>
                    <SelectItem value="abstract" className="text-white">Abstract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4: // Perks
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">Exclusive Perks</h2>
              <p className="text-purple-200">What exclusive benefits will NFT holders receive?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perkOptions.map((perk) => (
                <div
                  key={perk}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.perks.includes(perk)
                      ? 'border-purple-400 bg-purple-500/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => handlePerkToggle(perk)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.perks.includes(perk)
                        ? 'border-purple-400 bg-purple-400'
                        : 'border-white/20'
                    }`}>
                      {formData.perks.includes(perk) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-white">{perk}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-purple-300" />
                <span className="text-white">Selected Perks: {formData.perks.length}</span>
              </div>
              <p className="text-purple-200 text-sm">
                More perks typically lead to higher NFT values and stronger community engagement.
              </p>
            </div>
          </div>
        );

      case 5: // Pricing
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">Set Pricing</h2>
              <p className="text-purple-200">Choose between fixed price or auction</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  !formData.isAuction
                    ? 'bg-purple-500/20 border-purple-400'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, isAuction: false }))}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <DollarSign className="w-6 h-6 text-purple-300" />
                  <h3 className="text-white text-lg">Fixed Price</h3>
                </div>
                <p className="text-purple-200 text-sm">Sell at a fixed price immediately</p>
              </Card>

              <Card
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  formData.isAuction
                    ? 'bg-purple-500/20 border-purple-400'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, isAuction: true }))}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-purple-300" />
                  <h3 className="text-white text-lg">Timed Auction</h3>
                </div>
                <p className="text-purple-200 text-sm">Let buyers compete with bids</p>
              </Card>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="price" className="text-white">
                  {formData.isAuction ? 'Starting Price (ETH)' : 'Price (ETH)'} *
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="0.1"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                />
              </div>

              {formData.isAuction && (
                <div>
                  <Label htmlFor="duration" className="text-white">Auction Duration</Label>
                  <Select value={formData.auctionDuration} onValueChange={(value) => setFormData(prev => ({ ...prev, auctionDuration: value }))}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-white/20">
                      <SelectItem value="1" className="text-white">1 day</SelectItem>
                      <SelectItem value="3" className="text-white">3 days</SelectItem>
                      <SelectItem value="7" className="text-white">7 days</SelectItem>
                      <SelectItem value="14" className="text-white">14 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="royalty" className="text-white">Creator Royalty (%)</Label>
                <Input
                  id="royalty"
                  type="number"
                  min="0"
                  max="20"
                  value={formData.royalty}
                  onChange={(e) => setFormData(prev => ({ ...prev, royalty: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                />
                <p className="text-purple-200 text-sm mt-1">
                  You&apos;ll earn {formData.royalty}% on all future sales
                </p>
              </div>
            </div>
          </div>
        );

      case 6: // Mint
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl text-white mb-2">Ready to Mint</h2>
              <p className="text-purple-200">Review your NFT details and mint to the blockchain</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={formData.preview}
                    alt={formData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white text-xl mb-2">{formData.title}</h3>
                    <p className="text-purple-200">{formData.description}</p>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Category</p>
                    <p className="text-white capitalize">{formData.category}</p>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Price</p>
                    <p className="text-white text-2xl">{formData.price} ETH</p>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Perks ({formData.perks.length})</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.perks.slice(0, 3).map((perk, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-white/20 text-purple-100">
                          {perk}
                        </Badge>
                      ))}
                      {formData.perks.length > 3 && (
                        <Badge variant="outline" className="text-xs border-white/20 text-purple-100">
                          +{formData.perks.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400">Gas Fee Estimate</span>
              </div>
              <p className="text-yellow-200 text-sm">
                Estimated gas fee: ~0.005 ETH ($8.00)
              </p>
            </div>

            <Button
              onClick={handleMint}
              size="lg"
              loading={isMinting}
              loadingText="Minting..."
              variant="gradient"
              className="w-full h-14"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Mint NFT
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentScreen('dashboard')}
                className="text-white hover:bg-white/10 p-2"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="text-xl text-white">Mint New NFT</h1>
              <p className="text-purple-200 text-sm">Step {currentStep} of {steps.length}</p>
            </div>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  step.id <= currentStep ? 'text-white' : 'text-purple-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${
                    step.id <= currentStep
                      ? 'border-purple-400 bg-purple-400 text-white'
                      : 'border-white/20 text-purple-300'
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <span className="text-xs text-center">{step.title}</span>
              </div>
            ))}
          </div>
          <EnhancedProgress 
            value={(currentStep / steps.length) * 100} 
            className="h-3"
            animated={true}
            showPercentage={false}
            color="purple"
            size="lg"
          />
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl p-8">
            {renderStepContent()}
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !formData.file) ||
                (currentStep === 3 && (!formData.title || !formData.description || !formData.category)) ||
                (currentStep === 5 && !formData.price)
              }
              variant="gradient"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <div /> // Spacer for alignment
          )}
        </div>
      </div>
    </div>
  );
}