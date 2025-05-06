
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shark-darkBlue text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Contact Information */}
        <motion.div 
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img 
                src="https://sharkduct.com/wp-content/uploads/2023/10/shark-duct.png" 
                alt="Shark Duct Cleaning" 
                className="h-16 md:h-20" 
              />
            </Link>
          </motion.div>
          <motion.div 
            className="flex justify-center items-center mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Phone className="h-5 w-5 text-shark-accent mr-2" />
            <a href="tel:877-888-8431" className="text-white hover:text-shark-accent transition-colors">
              (877) 888-8431
            </a>
          </motion.div>
          <p className="text-gray-300">
            Serving Austin & surrounding areas
          </p>
        </motion.div>
        
        <Separator className="bg-gray-700 my-6" />
        
        {/* Legal Information and Disclaimers */}
        <div className="text-center">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            &copy; {currentYear} Shark Duct Cleaning. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="text-xs text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-2">
              Licensed, Bonded & Insured | NADCA Certified
            </p>
            <p>
              Disclaimer: Prices may vary depending on system size and complexity. 
              Offer valid for residential customers only. Cannot be combined with other offers.
              Please contact us for a detailed quote.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
