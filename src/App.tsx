import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AirQuality from '@/components/AirQuality';
import Benefits from '@/components/Benefits';
import WhyUs from '@/components/WhyUs';
import Promotions from '@/components/Promotions';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { initEmailJS } from './utils/emailService';

// Initialize EmailJS with your user ID
// Replace 'your_user_id' with your actual EmailJS user ID
initEmailJS('your_user_id');

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AirQuality />
      <Benefits />
      <WhyUs />
      <Promotions />
      <Reviews />
      <FAQ />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
