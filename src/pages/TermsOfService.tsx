
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MiniHero from '@/components/MiniHero';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <MiniHero 
        title="Terms of Service" 
        subtitle="Important information about using our services" 
      />
      
      <main className="flex-grow bg-white">
        <motion.div 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-shark-darkBlue mb-6">Terms of Service</h1>
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: May 5, 2025</p>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Acceptance of Terms</h2>
              <p className="mb-4">These Terms of Service ("Terms") govern your access to and use of the services provided by Shark Duct Cleaning ("we," "our," or "us"). Please read these Terms carefully before using our services.</p>
              <p className="mb-4">By accessing or using our services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, then you may not access or use our services.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Description of Services</h2>
              <p className="mb-4">Shark Duct Cleaning provides air duct cleaning, dryer vent cleaning, and related services for residential properties in Austin and surrounding areas. The specific services provided will be agreed upon between you and Shark Duct Cleaning prior to the commencement of any work.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Pricing and Payment</h2>
              <p className="mb-4">The prices for our services are as specified on our website or as provided in a written quote. Prices may vary depending on system size and complexity. All prices are in US dollars and do not include applicable taxes unless specifically stated.</p>
              <p className="mb-4">Payment is due upon completion of services unless otherwise agreed in writing. We accept major credit cards, cash, and checks as forms of payment.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Appointment Scheduling and Cancellation</h2>
              <p className="mb-4">Appointments can be scheduled through our website, by phone, or email. We require at least 24 hours' notice for any cancellation or rescheduling of appointments. Cancellations made with less than 24 hours' notice may incur a cancellation fee.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Service Guarantee</h2>
              <p className="mb-4">We strive to provide high-quality services and stand behind our work. If you are not satisfied with the services provided, please contact us within 7 days of service completion, and we will work to address your concerns.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Limitation of Liability</h2>
              <p className="mb-4">To the maximum extent permitted by applicable law, Shark Duct Cleaning shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use or inability to use our services;</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
                <li>Any interruption or cessation of transmission to or from our services;</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services.</li>
              </ul>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Indemnification</h2>
              <p className="mb-4">You agree to defend, indemnify, and hold harmless Shark Duct Cleaning and its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to our services.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Governing Law</h2>
              <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action or proceeding relating to these Terms shall be brought exclusively in the state or federal courts located in Texas.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Changes to Terms</h2>
              <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            </motion.section>
            
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h2 className="text-2xl font-semibold text-shark-darkBlue mb-4">Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at: (877) 888-8431</p>
            </motion.section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
