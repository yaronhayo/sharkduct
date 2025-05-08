
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
