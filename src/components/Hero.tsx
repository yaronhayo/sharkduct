
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Check, Phone, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingDialog from './BookingDialog';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue pt-32 pb-16 md:py-32">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoMTJ2LTZoLTEyem0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hidden Dangers in Your Home's Air?
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-6 text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Breathe easier with professional duct cleaning. Protect your family's health today.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start">
                <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Eliminate allergens & improve air quality</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Reduce energy costs with efficient airflow</span>
              </div>
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Over 10,000 Texas homes protected</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <BookingDialog>
                <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Free Inspection
                </Button>
              </BookingDialog>
              <a href="tel:8778888431" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="bg-shark-blue/30 backdrop-blur-sm hover:bg-shark-darkBlue hover:text-white text-white text-base w-full border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Call 877-888-8431</span>
                </Button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="grid grid-cols-3 gap-3 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-all duration-300">
                <span className="text-xs font-medium text-shark-accent">NADCA</span>
                <span className="text-sm font-bold text-white">Certified</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-all duration-300">
                <span className="text-xs font-medium text-shark-accent">18+ Years</span>
                <span className="text-sm font-bold text-white">Experience</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-all duration-300">
                <span className="text-xs font-medium text-shark-accent">4.9 Stars</span>
                <span className="text-sm font-bold text-white">2,600+ Reviews</span>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-shark-blue/20 to-shark-accent/20 rounded-xl blur-xl"></div>
              <Card className="bg-white shadow-2xl border-none rounded-xl overflow-hidden relative z-10">
                <div className="bg-gradient-to-r from-shark-blue to-shark-darkBlue px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Schedule Your Free Inspection</h3>
                  <p className="text-white/80 text-sm">No obligation, no pressure - just cleaner air</p>
                </div>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hero-name" className="text-shark-darkBlue font-medium text-sm">Your Name</Label>
                        <Input 
                          id="hero-name"
                          type="text" 
                          placeholder="Enter full name" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-phone" className="text-shark-darkBlue font-medium text-sm">Phone Number</Label>
                        <Input 
                          id="hero-phone"
                          type="tel" 
                          placeholder="(555) 555-5555" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hero-address" className="text-shark-darkBlue font-medium text-sm">Address</Label>
                      <Input 
                        id="hero-address"
                        type="text" 
                        placeholder="Enter your address" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hero-location" className="text-shark-darkBlue font-medium text-sm">Location</Label>
                        <select 
                          id="hero-location"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                        >
                          <option value="">Select location</option>
                          <option value="austin">Austin</option>
                          <option value="sanmarcos">San Marcos</option>
                          <option value="surrounding">Other Areas</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-urgency" className="text-shark-darkBlue font-medium text-sm">How Soon?</Label>
                        <select 
                          id="hero-urgency"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                        >
                          <option value="">Select urgency</option>
                          <option value="urgent">Urgent (24-48 hrs)</option>
                          <option value="soon">This Week</option>
                          <option value="planning">Planning Ahead</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-3 rounded-md border border-blue-100">
                      <div className="flex items-center text-shark-darkBlue">
                        <Shield className="w-5 h-5 text-shark-accent mr-2" />
                        <span className="text-sm font-medium">10% OFF for military, Veterans & seniors</span>
                      </div>
                    </div>
                    
                    <BookingDialog trigger={false}>
                      <Button className="w-full bg-shark-accent hover:bg-shark-darkBlue text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md">
                        <CalendarDays className="mr-2 h-5 w-5" />
                        Book Free Inspection
                      </Button>
                    </BookingDialog>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
