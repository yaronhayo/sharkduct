
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, CalendarDays, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface BookingDialogProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const BookingDialog = ({ children, trigger = true }: BookingDialogProps) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: '',
    location: '',
    urgency: '',
    notes: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form animation variants
  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3
      }
    })
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form data
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        address: '',
        location: '',
        urgency: '',
        notes: ''
      });
    }, 3000);
  };

  return (
    <Dialog>
      {trigger ? <DialogTrigger asChild>{children}</DialogTrigger> : children}
      <DialogContent className="sm:max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold text-shark-darkBlue">
            {formSubmitted ? 'Thank You!' : 'Schedule Your Free Inspection'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {formSubmitted ? (
            <motion.div 
              className="flex flex-col items-center justify-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Booking Received!</h3>
              <p className="text-gray-600 text-center mb-6">
                We'll contact you shortly to confirm your free inspection.
              </p>
              <div className="w-full bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-shark-blue font-medium text-center">
                  Our team is excited to help improve your home's air quality!
                </p>
              </div>
            </motion.div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div variants={formItemVariants} custom={0} className="space-y-2">
                  <Label htmlFor="name" className="text-shark-darkBlue font-medium">Your Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                    required
                  />
                </motion.div>
                
                <motion.div variants={formItemVariants} custom={1} className="space-y-2">
                  <Label htmlFor="phone" className="text-shark-darkBlue font-medium">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="(555) 555-5555" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div variants={formItemVariants} custom={2} initial="hidden" animate="visible" className="space-y-2">
                <Label htmlFor="address" className="text-shark-darkBlue font-medium">Address</Label>
                <Input 
                  id="address"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Enter your street address" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.div variants={formItemVariants} custom={0} className="space-y-2">
                  <Label htmlFor="location" className="text-shark-darkBlue font-medium">Location</Label>
                  <select 
                    id="location"
                    name="location"
                    value={formState.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select your location</option>
                    <option value="austin">Austin</option>
                    <option value="sanmarcos">San Marcos</option>
                    <option value="surrounding">Other Surrounding Areas</option>
                  </select>
                </motion.div>
                
                <motion.div variants={formItemVariants} custom={1} className="space-y-2">
                  <Label htmlFor="urgency" className="text-shark-darkBlue font-medium">How Soon?</Label>
                  <select 
                    id="urgency"
                    name="urgency"
                    value={formState.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select urgency</option>
                    <option value="urgent">Urgent (24-48 hrs)</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning Ahead</option>
                  </select>
                </motion.div>
              </motion.div>
              
              <motion.div variants={formItemVariants} custom={5} initial="hidden" animate="visible" className="space-y-2">
                <Label htmlFor="notes" className="text-shark-darkBlue font-medium">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formState.notes}
                  onChange={handleChange}
                  placeholder="Any specific concerns or questions?"
                  rows={2}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                />
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-sky-50 p-4 rounded-md mb-4 border border-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="flex items-center text-shark-darkBlue">
                  <Shield className="w-6 h-6 text-shark-accent mr-3 flex-shrink-0" />
                  <span className="text-sm font-bold">Texas Values: <span className="text-shark-accent">10% OFF</span> for military, Veterans & seniors</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-shark-blue hover:bg-shark-darkBlue text-base py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Free Inspection
                </Button>
              </motion.div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
