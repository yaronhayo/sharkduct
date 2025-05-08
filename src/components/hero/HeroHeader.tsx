
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CalendarDays, Check, Shield } from 'lucide-react';
import BookingDialog from '../booking/BookingDialog';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-white">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hidden Dangers in Your Home's Air?
      </motion.h1>
      
      <motion.p 
        className="text-xl mb-6 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Breathe easier with professional duct cleaning. Protect your family's health today.
      </motion.p>
      
      <motion.div 
        className="space-y-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-start">
          <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
          <span>Eliminate allergens & improve air quality</span>
        </div>
        <div className="flex items-start">
          <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
          <span>Reduce energy costs with efficient airflow</span>
        </div>
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
          <span className="font-semibold">Over 10,000 Texas homes protected</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <BookingDialog>
          <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <CalendarDays className="mr-2 h-5 w-5" />
            Book Free Inspection
          </Button>
        </BookingDialog>
        <a href="tel:8778888431" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="bg-shark-blue/30 backdrop-blur-sm hover:bg-shark-darkBlue hover:text-white text-white text-base w-full border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <Phone className="mr-2 h-5 w-5" />
            <span>Call 877-888-8431</span>
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
      className="grid grid-cols-3 gap-2 md:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 py-2 md:px-3 md:py-2 hover:bg-white/20 transition-all duration-300">
        <span className="text-xs font-medium text-shark-accent">NADCA</span>
        <span className="text-xs md:text-sm font-bold text-white">Certified</span>
      </div>
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 py-2 md:px-3 md:py-2 hover:bg-white/20 transition-all duration-300">
        <span className="text-xs font-medium text-shark-accent">18+ Years</span>
        <span className="text-xs md:text-sm font-bold text-white">Experience</span>
      </div>
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 py-2 md:px-3 md:py-2 hover:bg-white/20 transition-all duration-300">
        <span className="text-xs font-medium text-shark-accent">4.9 Stars</span>
        <span className="text-xs md:text-sm font-bold text-white">2,600+ Reviews</span>
      </div>
    </motion.div>
  );
};
