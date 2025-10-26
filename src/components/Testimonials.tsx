'use client'

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    handle: "@sarahcreates",
    avatar: "https://images.unsplash.com/photo-1549389042-81dc84ddf73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4OTAzNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Momint transformed how I connect with my audience. My NFT holders get exclusive behind-the-scenes content and I've made more in a month than six months of traditional sponsorships.",
    followers: "2.3M followers"
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    handle: "@alexfitness",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4OTAzNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The community aspect is incredible. My NFT holders have become my most engaged fans, and they love the exclusive workout sessions and nutrition guides I share.",
    followers: "1.8M followers"
  },
  {
    id: 3,
    name: "Maya Johnson",
    handle: "@mayastyle",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4OTAzNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Finally, a platform that values creators! The AI art generation is stunning, and my fans absolutely love owning a piece of my creative journey.",
    followers: "950K followers"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden seamless-section">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6">
            Trusted by Top Creators
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            See what influencers are saying about their experience with Momint
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <Card className="glass-card rounded-3xl p-8 md:p-12 mx-auto max-w-5xl card-hover">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-momint-purple/30 shadow-lg">
                    <ImageWithFallback
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl lg:text-2xl text-primary leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                  
                  <div className="space-y-2">
                    <h4 className="text-primary font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary">{testimonials[currentIndex].handle}</p>
                    <p className="text-tertiary">{testimonials[currentIndex].followers}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:bg-momint-purple/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Enhanced dots indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-momint-purple animate-pulse-glow' 
                      : 'bg-momint-purple/30 hover:bg-momint-purple/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:bg-momint-purple/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}