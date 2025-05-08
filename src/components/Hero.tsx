
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroForm from './hero/HeroForm';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue pt-32 pb-16 md:py-32">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <HeroHeader />
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
