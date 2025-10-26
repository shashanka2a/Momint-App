import { Separator } from "./ui/separator";
import { Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-momint-secondary py-16 px-4 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-800/20 animate-gradient-shift" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#a855f7', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="15" fill="url(#footerLogoGradient)"/>
                  <g transform="translate(16, 16)">
                    <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="white" opacity="0.9"/>
                    <circle cx="5" cy="-5" r="1" fill="white" opacity="0.7"/>
                    <circle cx="-5" cy="5" r="1" fill="white" opacity="0.7"/>
                  </g>
                </svg>
              </div>
              <span className="text-2xl text-primary font-bold">Momint</span>
            </div>
            <p className="text-secondary leading-relaxed text-lg">
              The NFT marketplace where social moments become valuable digital assets with exclusive perks.
            </p>
          </div>

          {/* Marketplace */}
          <div className="space-y-4">
            <h4 className="text-primary font-bold text-lg">Marketplace</h4>
            <ul className="space-y-3 text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Explore NFTs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Top Creators</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">New Drops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Collections</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-primary font-bold text-lg">Company</h4>
            <ul className="space-y-3 text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-primary font-bold text-lg">Support</h4>
            <ul className="space-y-3 text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Creator Tools</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Gas-Free Trading</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-momint-purple/20 mb-8" />

        {/* Enhanced Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 text-secondary">
            <p className="text-lg">&copy; 2025 Momint. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-primary transition-colors duration-200 font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-200 font-medium">Terms of Service</a>
            </div>
          </div>

          {/* Enhanced Social icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-momint-purple/20 transition-all duration-300 transform hover:scale-110 group"
            >
              <Twitter className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-momint-purple/20 transition-all duration-300 transform hover:scale-110 group"
            >
              <Instagram className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-momint-purple/20 transition-all duration-300 transform hover:scale-110 group"
            >
              <Youtube className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}