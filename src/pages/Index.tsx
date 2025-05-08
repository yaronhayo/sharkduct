
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AirQualitySection from '@/components/AirQualitySection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import ServiceBenefits from '@/components/ServiceBenefits';
import PromotionSection from '@/components/PromotionSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CleanSystemsGallery from '@/components/air-quality/CleanSystemsGallery';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="air-quality" className="scroll-mt-24">
        <AirQualitySection />
      </section>
      <section id="clean-systems" className="scroll-mt-24">
        <CleanSystemsGallery />
      </section>
      <section id="before-after" className="scroll-mt-24">
        <BeforeAfterSection />
      </section>
      <section id="benefits" className="scroll-mt-24">
        <ServiceBenefits />
      </section>
      <section id="why-us" className="scroll-mt-24">
        <WhyChooseUs />
      </section>
      <section id="promotions" className="scroll-mt-24">
        <PromotionSection />
      </section>
      <section id="reviews" className="scroll-mt-24">
        <ReviewsCarousel />
      </section>
      <section id="faq" className="scroll-mt-24">
        <FAQSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
