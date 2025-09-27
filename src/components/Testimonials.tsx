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
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Trusted by Top Creators
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            See what influencers are saying about their experience with Momint
          </p>
        </motion.div>

        <div className="relative">
          {/* Main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl p-8 md:p-12 mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
                    <ImageWithFallback
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                  
                  <div className="space-y-1">
                    <h4 className="text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-purple-300">{testimonials[currentIndex].handle}</p>
                    <p className="text-purple-200">{testimonials[currentIndex].followers}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}