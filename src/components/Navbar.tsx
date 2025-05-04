
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors">
            Services
          </a>
          <a href="#benefits" className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors">
            Benefits
          </a>
          <a href="#promotions" className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors">
            Promotions
          </a>
          <a href="#why-us" className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors">
            Why Choose Us
          </a>
          <a href="#faq" className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors">
            FAQ
          </a>
        </div>

        {/* Phone CTA */}
        <div className="hidden lg:flex">
          <Button className="bg-shark-blue hover:bg-shark-darkBlue shadow-lg">
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Us Now</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-shark-darkBlue focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#benefits" 
              className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#promotions" 
              className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Promotions
            </a>
            <a 
              href="#why-us" 
              className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#faq" 
              className="font-medium text-shark-darkBlue hover:text-shark-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-shark-blue hover:bg-shark-darkBlue w-full">
              <Phone className="mr-2 h-4 w-4" />
              <span>Call Us Now</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
