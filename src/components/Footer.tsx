
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shark-darkBlue text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Contact Information */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
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
            <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
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
