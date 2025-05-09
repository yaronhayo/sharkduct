import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-4 py-16">
      <motion.div 
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="bg-gradient-to-r from-shark-blue to-shark-darkBlue h-3"></div>
        <div className="p-8 md:p-12">
          <motion.div
            className="flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-green-50 p-4 rounded-full inline-block">
                <CheckCircle2 className="h-20 w-20 text-green-500" />
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-shark-darkBlue mb-4">
              Thank You!
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-2">
              Your inspection request has been successfully submitted.
            </motion.p>
            
            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-100 rounded-lg p-6 my-6 w-full max-w-xl">
              <h2 className="font-semibold text-shark-blue text-lg mb-3">What happens next?</h2>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="text-shark-accent font-bold mr-2">1.</span>
                  <span>Our team will review your request within 1 business hour.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shark-accent font-bold mr-2">2.</span>
                  <span>We'll call you to confirm the details and schedule your free inspection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shark-accent font-bold mr-2">3.</span>
                  <span>You'll receive a confirmation email with your appointment details.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center mt-2 mb-6">
              <p className="text-gray-500">
                Have questions? Call us directly at <a href="tel:8778888431" className="font-semibold text-shark-blue hover:underline">(877) 888-8431</a>
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/">
                <Button className="bg-shark-accent hover:bg-shark-darkBlue text-white px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                  Return to Homepage
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Logo at bottom */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img 
          src="/uploads/afc828f1-634d-4a54-b802-cecb90b8885d.png" 
          alt="Shark Duct Cleaning" 
          className="h-16 opacity-80" 
        />
      </motion.div>
    </div>
  );
};

export default ThankYouPage; 