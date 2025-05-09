import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CalendarDays, Check, Shield, Star } from 'lucide-react';
import BookingDialog from '../booking/BookingDialog';
import { useIsMobile } from '@/hooks/use-mobile';

// Floating particles animation
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/5"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Golden stars component
const GoldenStars = () => {
  return (
    <motion.div 
      className="flex justify-center mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {[1, 2, 3, 4, 5].map((_, index) => (
        <motion.div 
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
          className="mx-1"
        >
          <Star 
            className="h-6 w-6 fill-yellow-400 text-yellow-500" 
            strokeWidth={1.5} 
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const HeroHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-white relative">
      <FloatingParticles />
      
      <GoldenStars />
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="block">Austin &</span>
        <span className="block">Surrounding Areas: <span className="text-shark-accent">Stop</span></span>
        <span className="block"><span className="text-shark-accent">Breathing</span></span>
        <span className="block">Contaminated Air</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl mb-6 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Texas summers mean closed windows and recirculating air. Are your loved ones inhaling hidden contaminants from your neglected duct system?
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <BookingDialog>
          <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <CalendarDays className="mr-2 h-5 w-5" />
            Free Home Air Assessment
          </Button>
        </BookingDialog>
        <a href="tel:8778888431" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="bg-shark-blue/30 backdrop-blur-sm hover:bg-shark-darkBlue hover:text-white text-white text-base w-full border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <Phone className="mr-2 h-5 w-5" />
            <span>Local Experts: Call Now</span>
          </Button>
        </a>
      </motion.div>

      <HeroTrustBadges />
    </div>
  );
};

export default HeroHeader;

const HeroTrustBadges = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex items-center">
        <Shield className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0" />
        <span className="font-semibold">Austin's #1 Rated Service</span>
      </div>
      <div className="flex items-center">
        <Shield className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0" />
        <span className="font-semibold">Over 10,000 TX Homes Protected</span>
      </div>
    </motion.div>
  );
};
