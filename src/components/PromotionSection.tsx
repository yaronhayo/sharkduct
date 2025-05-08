
import React from 'react';
import { motion } from 'framer-motion';
import PromotionCard from './promotions/PromotionCard';
import ConsultationBanner from './promotions/ConsultationBanner';
import SectionHeader from './promotions/SectionHeader';
import { promotionData } from './promotions/PromotionData';

const PromotionSection = () => {
  return (
    <section id="promotions" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <SectionHeader 
          title="Special Offers"
          subtitle="Take advantage of these limited-time promotional offers on our professional cleaning services.
          Call today to schedule your appointment and mention these promotions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {promotionData.map((promo, index) => (
            <PromotionCard key={index} promotion={promo} index={index} />
          ))}
        </div>
        
        <ConsultationBanner />
      </div>
    </section>
  );
};

export default PromotionSection;
