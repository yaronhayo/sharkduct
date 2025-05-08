
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Ticket, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Promotion {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  benefits: string[];
}

interface PromotionCardProps {
  promotion: Promotion;
  index: number;
}

const PromotionCard = ({ promotion, index }: PromotionCardProps) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Redesigned Coupon Card */}
      <motion.div 
        className="bg-gradient-to-r from-shark-blue to-shark-darkBlue rounded-lg overflow-hidden shadow-lg"
        whileHover={{ 
          y: -10, 
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)",
          transition: { type: "spring", stiffness: 300, damping: 10 }
        }}
      >
        {/* Sale ribbon */}
        <motion.div 
          className="absolute top-0 right-0"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="bg-shark-accent text-white font-bold py-1 px-3 shadow-md transform rotate-0 origin-top-right">
            <span className="text-xs uppercase tracking-wider">Limited Time</span>
          </div>
        </motion.div>

        {/* Ticket Icon */}
        <div className="absolute top-3 left-3">
          <Ticket className="h-6 w-6 text-white/60" />
        </div>
        
        {/* Title Section */}
        <div className="pt-12 pb-4 px-6 text-center border-b border-white/20">
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
            {promotion.title}
          </h3>
        </div>
        
        {/* Price Section */}
        <motion.div 
          className="py-4 bg-white/10 backdrop-blur-sm"
          whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <div className="flex items-center justify-center gap-3">
            <motion.span 
              className="text-3xl font-bold text-white"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.5, 
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
            >
              {promotion.price}
            </motion.span>
            <span className="text-lg line-through text-red-400">{promotion.originalPrice}</span>
          </div>
        </motion.div>
        
        {/* Content Section */}
        <div className="px-6 py-5 bg-gradient-to-b from-white/5 to-transparent">
          {/* Description */}
          <p className="text-sm mb-4 text-white/85 text-center">
            {promotion.description}
          </p>
          
          {/* Benefits */}
          <ul className="mb-6 space-y-3">
            {promotion.benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Check className="h-5 w-5 text-shark-accent mr-2 flex-shrink-0" />
                <span className="text-sm text-white/90">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Dotted Border */}
          <div className="border-t border-dashed border-white/30 my-4"></div>
          
          {/* CTA Button - Updated to link to phone */}
          <a href="tel:8778888431">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="w-full bg-white hover:bg-white/90 text-shark-darkBlue font-semibold"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Claim Offer
              </Button>
            </motion.div>
          </a>
        </div>
        
        {/* Bottom edge design */}
        <div className="bg-white/10 h-3 w-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default PromotionCard;
