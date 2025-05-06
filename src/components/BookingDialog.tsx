
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingDialogProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const BookingDialog = ({ children, trigger = true }: BookingDialogProps) => {
  // Animation variants for form elements
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

  return (
    <Dialog>
      {trigger ? <DialogTrigger asChild>{children}</DialogTrigger> : children}
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-center font-bold text-shark-darkBlue">Book Your Free Duct Inspection</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <form className="space-y-4">
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
              <motion.div variants={formItemVariants} custom={0}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
              </motion.div>
              <motion.div variants={formItemVariants} custom={1}>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
              </motion.div>
            </motion.div>
            
            <motion.div variants={formItemVariants} custom={2} initial="hidden" animate="visible">
              <input 
                type="text" 
                placeholder="Address" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
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
              <motion.div variants={formItemVariants} custom={0}>
                <select 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                >
                  <option value="">Location</option>
                  <option value="austin">Austin</option>
                  <option value="sanmarcos">San Marcos</option>
                  <option value="surrounding">Other Surrounding Areas</option>
                </select>
              </motion.div>
              <motion.div variants={formItemVariants} custom={1}>
                <select 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                >
                  <option value="">Urgency</option>
                  <option value="urgent">Urgent (24-48 hrs)</option>
                  <option value="soon">This Week</option>
                  <option value="planning">Planning Ahead</option>
                </select>
              </motion.div>
            </motion.div>
            
            <motion.div variants={formItemVariants} custom={5} initial="hidden" animate="visible">
              <textarea
                placeholder="Notes (Optional)"
                rows={2}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
              ></textarea>
            </motion.div>
            
            <motion.div 
              className="bg-gray-100 p-3 rounded-md mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="flex items-center text-shark-darkBlue">
                <Shield className="w-5 h-5 text-shark-accent mr-2" />
                <span className="text-sm font-medium">Texas Values: 10% OFF for military, Veterans & seniors</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue text-base py-6">
                <CalendarDays className="mr-2 h-5 w-5" />
                Book Free Inspection
              </Button>
            </motion.div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
