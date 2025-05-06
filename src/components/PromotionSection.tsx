
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PhoneCall, Ticket, Check } from 'lucide-react';
import BookingDialog from './BookingDialog';

const PromotionSection = () => {
  const promotions = [
    {
      title: "Air Duct Cleaning Special",
      price: "$89",
      originalPrice: "$199",
      description: "Complete air duct cleaning service for healthier living spaces.",
      benefits: [
        "Improves indoor air quality",
        "Removes dust, allergens & contaminants",
        "Unlimited vents, limited time only!"
      ]
    },
    {
      title: "Dryer Vent Cleaning",
      price: "$85",
      originalPrice: "$150",
      description: "Professional dryer vent cleaning service for safety and efficiency.",
      benefits: [
        "Prevents potential fire hazards",
        "Improves dryer efficiency",
        "Extends appliance lifespan"
      ]
    },
    {
      title: "Full Chimney Inspection",
      price: "$49",
      originalPrice: "$99",
      description: "Comprehensive chimney inspection by certified professionals.",
      benefits: [
        "Identifies structural issues",
        "Prevents dangerous blockages",
        "Includes detailed safety report"
      ]
    }
  ];

  return (
    <section id="promotions" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-subtitle">
          Take advantage of these limited-time promotional offers on our professional cleaning services.
          Call today to schedule your appointment and mention these promotions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {promotions.map((promo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Redesigned Coupon Card */}
              <div className="bg-gradient-to-r from-shark-blue to-shark-darkBlue rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Sale ribbon */}
                <div className="absolute top-0 right-0">
                  <div className="bg-shark-accent text-white font-bold py-1 px-3 shadow-md transform rotate-0 origin-top-right">
                    <span className="text-xs uppercase tracking-wider">Limited Time</span>
                  </div>
                </div>

                {/* Ticket Icon */}
                <div className="absolute top-3 left-3">
                  <Ticket className="h-6 w-6 text-white/60" />
                </div>
                
                {/* Title Section */}
                <div className="pt-12 pb-4 px-6 text-center border-b border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                    {promo.title}
                  </h3>
                </div>
                
                {/* Price Section */}
                <div className="py-4 bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-white">{promo.price}</span>
                    <span className="text-lg line-through text-red-400">{promo.originalPrice}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="px-6 py-5 bg-gradient-to-b from-white/5 to-transparent">
                  {/* Description */}
                  <p className="text-sm mb-4 text-white/85 text-center">
                    {promo.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="mb-6 space-y-3">
                    {promo.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-shark-accent mr-2 flex-shrink-0" />
                        <span className="text-sm text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Dotted Border */}
                  <div className="border-t border-dashed border-white/30 my-4"></div>
                  
                  {/* CTA Button */}
                  <BookingDialog>
                    <Button 
                      className="w-full bg-white hover:bg-white/90 text-shark-darkBlue font-semibold"
                    >
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Claim Offer
                    </Button>
                  </BookingDialog>
                </div>
                
                {/* Bottom edge design */}
                <div className="bg-white/10 h-3 w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 bg-shark-gray rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
              <BookingDialog>
                <Button 
                  size="lg" 
                  className="bg-shark-accent hover:bg-shark-blue text-white font-bold px-8"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Get Free Advice
                </Button>
              </BookingDialog>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionSection;
