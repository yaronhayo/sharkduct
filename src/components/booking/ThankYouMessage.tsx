
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYouMessage = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Booking Received!</h3>
      <p className="text-gray-600 text-center mb-6">
        We'll contact you shortly to confirm your free inspection.
      </p>
      <div className="w-full bg-blue-50 rounded-lg p-4 border border-blue-100">
        <p className="text-shark-blue font-medium text-center">
          Our team is excited to help improve your home's air quality!
        </p>
      </div>
    </motion.div>
  );
};

export default ThankYouMessage;
