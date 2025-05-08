
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
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="air-quality" className="scroll-mt-20">
        <AirQualitySection />
      </section>
      <section id="benefits" className="scroll-mt-20">
        <ServiceBenefits />
      </section>
      <section id="why-us" className="scroll-mt-20">
        <WhyChooseUs />
      </section>
      <section id="promotions" className="scroll-mt-20">
        <PromotionSection />
      </section>
      <section id="reviews" className="scroll-mt-20">
        <ReviewsCarousel />
      </section>
      <section id="faq" className="scroll-mt-20">
        <FAQSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
