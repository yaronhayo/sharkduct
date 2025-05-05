
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
            <div className="text-2xl font-bold text-shark-darkBlue">
              <span className="text-shark-blue">Shark</span> Duct Cleaning
            </div>
          </a>
        </div>

        {/* Phone CTA - Kept in the navbar */}
        <div>
          <Button className="bg-shark-blue hover:bg-shark-darkBlue shadow-lg">
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Us Now</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
