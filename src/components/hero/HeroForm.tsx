
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Shield, CalendarDays } from 'lucide-react';
import BookingDialog from '../booking/BookingDialog';

const HeroForm = () => {
  return (
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
  );
};

export default HeroForm;
