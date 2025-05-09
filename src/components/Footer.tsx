import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Use the uploaded logo image
const logoImage = "/uploads/afc828f1-634d-4a54-b802-cecb90b8885d.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <footer className="bg-shark-darkBlue text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Contact Information */}
        <motion.div 
          className="mb-6 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Shark Duct Cleaning" 
                className="h-16 md:h-20" 
              />
            </Link>
          </motion.div>
          <motion.div 
            className="flex justify-center items-center mb-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Phone className="h-5 w-5 text-shark-accent mr-2" />
            <a href="tel:8778888431" className="text-white hover:text-shark-accent transition-colors">
              (877) 888-8431
            </a>
          </motion.div>
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            Serving Austin & surrounding areas
          </motion.p>
        </motion.div>
        
        <Separator className="bg-gray-700 my-6" />
        
        {/* Legal Information and Disclaimers */}
        <div className="text-center">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#fff" }}
            >
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#fff" }}
            >
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-sm mb-4"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Shark Duct Cleaning. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="text-xs text-gray-500 max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
          
          {/* Made with heart by Gett Marketing */}
          <motion.div
            className="text-sm text-gray-400 flex items-center justify-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 inline" fill="currentColor" /> by{" "}
            <a 
              href="https://gettmarketing.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-shark-accent hover:text-white transition-colors ml-1"
            >
              Gett Marketing
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
