
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';
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
    <section id="promotions" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-subtitle">
          Take advantage of these limited-time promotional offers on our professional cleaning services.
          Call today to schedule your appointment and mention these promotions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {promotions.map((promo, index) => (
            <div key={index} className="relative overflow-hidden">
              {/* Coupon design inspired by the provided image */}
              <div className="flex rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* Left side - PROMO tag */}
                <div className="bg-shark-darkBlue text-white w-16 flex flex-col items-center justify-center relative">
                  <span className="font-bold text-xs tracking-wider uppercase rotate-[-90deg] whitespace-nowrap">PROMO</span>
                  {/* Dotted line */}
                  <div className="absolute right-0 top-0 bottom-0 border-r border-dashed border-white h-full"></div>
                  {/* Circular cutouts */}
                  <div className="absolute w-6 h-6 bg-white rounded-full -right-3 -top-3"></div>
                  <div className="absolute w-6 h-6 bg-white rounded-full -right-3 -bottom-3"></div>
                </div>
                
                {/* Center - Main content */}
                <div className="flex-1 flex flex-col bg-shark-darkBlue text-white px-4 py-6">
                  {/* Price banner with original and sale price */}
                  <div className="bg-black py-2 px-4 mb-4 -mx-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-3">SALE {promo.price}</span>
                      <span className="text-xl line-through text-red-500">{promo.originalPrice}</span>
                    </div>
                  </div>
                  
                  {/* Service name */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase text-center">
                    {promo.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm mb-4 text-white/90 text-center">
                    {promo.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="mb-4 text-sm">
                    {promo.benefits.map((benefit, i) => (
                      <li key={i} className="mb-2 flex items-start">
                        <span className="mr-2 text-white">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <BookingDialog>
                    <Button 
                      className="mt-auto w-full bg-shark-blue hover:bg-shark-accent"
                    >
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Claim Offer
                    </Button>
                  </BookingDialog>
                </div>
                
                {/* Right side - Vertical text */}
                <div className="bg-white w-16 flex flex-col items-center justify-center relative">
                  <div className="absolute w-6 h-6 bg-white rounded-full -left-3 -top-3"></div>
                  <div className="absolute w-6 h-6 bg-white rounded-full -left-3 -bottom-3"></div>
                  <span className="font-bold text-sm tracking-wider uppercase rotate-90 whitespace-nowrap text-shark-darkBlue">
                    {promo.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-shark-gray rounded-lg p-6 shadow-md">
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
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
