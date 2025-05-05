
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            {/* Logo */}
            <img 
              src="https://sharkduct.com/wp-content/uploads/2023/10/shark-duct.png" 
              alt="Shark Duct Cleaning" 
              className="h-16 md:h-20 mr-3" 
            />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col items-center bg-white/10 rounded-lg px-3 py-1">
            <span className="text-xs font-medium text-shark-blue">NADCA</span>
            <span className="text-sm font-bold">Certified</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-lg px-3 py-1">
            <span className="text-xs font-medium text-shark-blue">18+ Years</span>
            <span className="text-sm font-bold">Experience</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-lg px-3 py-1">
            <span className="text-xs font-medium text-shark-blue">4.9 Stars</span>
            <span className="text-sm font-bold">2,600+ Reviews</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center space-x-2">
          <Button className={`hidden md:flex ${isScrolled ? 'bg-shark-accent text-white' : 'bg-white text-shark-blue'} hover:bg-shark-darkBlue hover:text-white shadow-lg transition-colors`}>
            Book Free Inspection
          </Button>
          <Button className={`${isScrolled ? 'bg-shark-blue' : 'bg-white text-shark-blue'} hover:bg-shark-darkBlue hover:text-white shadow-lg transition-colors`}>
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">877-652-4343</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
