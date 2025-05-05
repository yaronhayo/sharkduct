
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shark-darkBlue text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Contact Information */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-4">
            <svg 
              width="180" 
              height="60" 
              viewBox="0 0 180 60" 
              className="fill-current text-white"
            >
              <path d="M20.5,30c0-5.1,4.2-9.3,9.3-9.3s9.3,4.2,9.3,9.3s-4.2,9.3-9.3,9.3S20.5,35.1,20.5,30z M29.8,42.8c7.1,0,12.8-5.7,12.8-12.8 s-5.7-12.8-12.8-12.8S17,22.9,17,30S22.7,42.8,29.8,42.8z" />
              <path d="M48.5,18h3.5v18.7c0,3.4,2.8,6.1,6.1,6.1h10.9v-3.5H58.1c-1.4,0-2.6-1.2-2.6-2.6V18h3.5v-3.5h-3.5v-5.2h-3.5v5.2h-3.5V18z" />
              <path d="M72.5,42.8h3.5V24.1c0-3.4-2.8-6.1-6.1-6.1H59v3.5h10.9c1.4,0,2.6,1.2,2.6,2.6v18.7z" />
              <path d="M80.5,30c0-5.1,4.2-9.3,9.3-9.3s9.3,4.2,9.3,9.3s-4.2,9.3-9.3,9.3S80.5,35.1,80.5,30z M89.8,42.8c7.1,0,12.8-5.7,12.8-12.8 s-5.7-12.8-12.8-12.8S77,22.9,77,30S82.7,42.8,89.8,42.8z" />
              <path d="M123.2,18h-13.9c-3.4,0-6.1,2.8-6.1,6.1v18.7h3.5V24.1c0-1.4,1.2-2.6,2.6-2.6h13.9c1.4,0,2.6,1.2,2.6,2.6v18.7h3.5V24.1 C129.3,20.8,126.6,18,123.2,18z" />
              <path d="M143.5,18h-11.8c-1.4,0-2.6,1.2-2.6,2.6v22.2h3.5V28.7h4.3v14.1h3.5V28.7h4.3v14.1h3.5V20.6C148.2,19.2,147,18,143.5,18z M132.6,25.2v-4.3c0-0.2,0.2-0.4,0.4-0.4h10.1c0.2,0,0.4,0.2,0.4,0.4v4.3H132.6z" />
              <path d="M151.7,18h3.5v3.5h-3.5V18z M151.7,24.1h3.5v18.7h-3.5V24.1z" />
              <path d="M159.7,24.1h3.5v12.2c0,1.4,1.2,2.6,2.6,2.6h10.9v3.9h-17V24.1z M162.3,20.6c0-1.4,1.2-2.6,2.6-2.6h13.9v3.5h-13.9 c-0.1,0-0.1,0-0.1,0l-2.4-2.4V20.6z M176.7,35.4h-10.9c-0.2,0-0.4-0.2-0.4-0.4V27h11.3V35.4z" />
            </svg>
          </div>
          <div className="flex justify-center items-center mb-3">
            <Phone className="h-5 w-5 text-shark-accent mr-2" />
            <a href="tel:877-652-4343" className="text-white hover:text-shark-accent transition-colors">
              (877) 652-4343
            </a>
          </div>
          <p className="text-gray-300">
            Serving Austin, San Antonio & surrounding areas
          </p>
        </div>
        
        <Separator className="bg-gray-700 my-6" />
        
        {/* Legal Information and Disclaimers */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            &copy; {currentYear} Shark Duct Cleaning. All rights reserved.
          </p>
          
          <div className="text-xs text-gray-500 max-w-2xl mx-auto">
            <p className="mb-2">
              Licensed, Bonded & Insured | NADCA Certified
            </p>
            <p>
              Disclaimer: Prices may vary depending on system size and complexity. 
              Offer valid for residential customers only. Cannot be combined with other offers.
              Please contact us for a detailed quote.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
