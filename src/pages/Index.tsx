
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AirQualitySection from '@/components/AirQualitySection';
import ServiceBenefits from '@/components/ServiceBenefits';
import PromotionSection from '@/components/PromotionSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AirQualitySection />
      <div id="benefits">
        <ServiceBenefits />
      </div>
      <div id="promotions">
        <PromotionSection />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <ReviewsCarousel />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
