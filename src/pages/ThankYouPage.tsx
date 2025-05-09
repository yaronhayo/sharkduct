import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Home, ArrowRight } from 'lucide-react';
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-shark-blue/5 to-shark-blue/10 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-shark-darkBlue to-shark-blue py-4 text-white">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/uploads/afc828f1-634d-4a54-b802-cecb90b8885d.png" 
              alt="Shark Duct Cleaning" 
              className="h-12 md:h-16" 
            />
          </Link>
          <div className="hidden md:flex items-center">
            <Phone className="h-5 w-5 mr-2 text-shark-accent" />
            <a href="tel:8778888431" className="text-white hover:text-shark-accent transition-colors">
              (877) 888-8431
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-12 md:py-16">
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top colored bar */}
          <div className="h-3 bg-gradient-to-r from-shark-blue to-shark-accent"></div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              {/* Success icon */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-shark-darkBlue mb-4 text-center"
              >
                Thank You for Your Request!
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                variants={itemVariants} 
                className="text-xl text-gray-600 mb-8 text-center max-w-2xl"
              >
                Your duct cleaning inspection request has been received. A member of our team will contact you shortly to confirm your appointment.
              </motion.p>
              
              {/* Steps */}
              <motion.div 
                variants={itemVariants}
                className="w-full bg-shark-blue/5 rounded-xl p-6 mb-8"
              >
                <h2 className="text-xl font-bold text-shark-blue mb-4">What happens next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-shark-accent flex items-center justify-center text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-shark-darkBlue">We'll verify your information</p>
                      <p className="text-gray-600 text-sm">Our team reviews your request within 1 business hour.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-shark-accent flex items-center justify-center text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-shark-darkBlue">We'll call to confirm your appointment</p>
                      <p className="text-gray-600 text-sm">Our scheduling team will contact you to find the best time for your inspection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-shark-accent flex items-center justify-center text-white font-bold mr-3">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-shark-darkBlue">We'll provide your free inspection</p>
                      <p className="text-gray-600 text-sm">Our certified technician will assess your duct system and provide recommendations.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                <a 
                  href="tel:8778888431" 
                  className="flex-1 bg-shark-accent hover:bg-shark-darkBlue text-white py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Call Now</span>
                </a>
                
                <Link 
                  to="/"
                  className="flex-1 bg-white border-2 border-shark-blue text-shark-blue hover:bg-shark-blue hover:text-white py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="mr-2 h-5 w-5" />
                  <span>Return Home</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6 border-l-4 border-shark-accent"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-shark-darkBlue mb-2">Need immediate assistance?</h3>
              <p className="text-gray-600">
                Call us at <a href="tel:8778888431" className="text-shark-accent font-bold hover:underline">(877) 888-8431</a> for priority scheduling or questions about your appointment.
              </p>
            </div>
            <a 
              href="tel:8778888431"
              className="flex-shrink-0 bg-shark-accent hover:bg-shark-darkBlue text-white py-3 px-6 rounded-md shadow transition-all duration-300 flex items-center gap-2"
            >
              Call Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="w-full bg-shark-darkBlue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Shark Duct Cleaning. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="text-white/70 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/70 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage; 