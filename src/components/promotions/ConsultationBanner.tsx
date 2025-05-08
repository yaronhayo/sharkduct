
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const ConsultationBanner = () => {
  return (
    <motion.div 
      className="mt-12 bg-shark-gray rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-shark-darkBlue mb-2">
            Free Duct Cleaning Consultation
          </h3>
          <p className="text-gray-600 mb-4">
            Speak with our friendly experts today. We'll help you understand your options with no pressure.
          </p>
          <p className="text-sm text-gray-500">
            *Promotions valid for limited time. Cannot be combined with other offers.
          </p>
        </div>
        <div className="flex-shrink-0">
          {/* Updated to link to phone number */}
          <a href="tel:8778888431">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-shark-accent hover:bg-shark-blue text-white font-bold px-8"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Get Free Advice
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationBanner;
