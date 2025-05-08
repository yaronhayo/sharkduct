
import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface TexasValuesBadgeProps {
  className?: string;
}

const TexasValuesBadge = ({ className = "" }: TexasValuesBadgeProps) => {
  return (
    <motion.div 
      className={`bg-gradient-to-r from-blue-50 to-sky-50 p-4 rounded-md border border-blue-100 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <div className="flex items-center text-shark-darkBlue">
        <Shield className="w-6 h-6 text-shark-accent mr-3 flex-shrink-0" />
        <span className="text-sm font-bold">Texas Values: <span className="text-shark-accent">10% OFF</span> for military, Veterans & seniors</span>
      </div>
    </motion.div>
  );
};

export default TexasValuesBadge;
