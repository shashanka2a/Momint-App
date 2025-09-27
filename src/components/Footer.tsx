import { Separator } from "./ui/separator";
import { Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-purple-900 to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-2xl text-white">Momint</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              The NFT marketplace where social moments become valuable digital assets with exclusive perks.
            </p>
          </div>

          {/* Marketplace */}
          <div className="space-y-4">
            <h4 className="text-white">Marketplace</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Explore NFTs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Top Creators</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">New Drops</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Collections</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white">Company</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-white">Support</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Creator Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Gas-Free Trading</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-purple-200">
            <p>&copy; 2025 Momint. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}