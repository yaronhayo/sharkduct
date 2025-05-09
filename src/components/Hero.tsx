import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroForm from './hero/HeroForm';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue pt-24 pb-16 md:pt-32 md:pb-24">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <HeroHeader />
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
