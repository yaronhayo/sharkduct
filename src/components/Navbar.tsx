
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
            {/* Logo Text */}
            <span className={`font-bold text-xl md:text-2xl transition-colors ${
              isScrolled ? 'text-shark-darkBlue' : 'text-white'
            }`}>
              Shark Duct Cleaning
            </span>
          </a>
        </div>

        {/* Phone CTA - Kept in the navbar */}
        <div>
          <Button className={`${isScrolled ? 'bg-shark-blue' : 'bg-white text-shark-blue'} hover:bg-shark-darkBlue hover:text-white shadow-lg transition-colors`}>
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Us Now</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
