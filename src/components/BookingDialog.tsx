
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

interface BookingDialogProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const BookingDialog = ({ children, trigger = true }: BookingDialogProps) => {
  return (
    <Dialog>
      {trigger ? <DialogTrigger asChild>{children}</DialogTrigger> : children}
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-center font-bold text-shark-darkBlue">Book Your Free Duct Inspection</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
              />
            </div>
            
            <input 
              type="text" 
              placeholder="Address" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
              >
                <option value="">Location</option>
                <option value="austin">Austin</option>
                <option value="sanantonio">San Antonio</option>
                <option value="sanmarcos">San Marcos</option>
                <option value="surrounding">Other Surrounding Areas</option>
              </select>
              <select 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
              >
                <option value="">Urgency</option>
                <option value="urgent">Urgent (24-48 hrs)</option>
                <option value="soon">This Week</option>
                <option value="planning">Planning Ahead</option>
              </select>
            </div>
            
            <textarea
              placeholder="Notes (Optional)"
              rows={2}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
            ></textarea>
            
            <div className="bg-gray-100 p-3 rounded-md mb-4">
              <div className="flex items-center text-shark-darkBlue">
                <Shield className="w-5 h-5 text-shark-accent mr-2" />
                <span className="text-sm font-medium">Texas Values: 10% OFF for military, Veterans & seniors</span>
              </div>
            </div>
            
            <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue text-base py-6">
              <CalendarDays className="mr-2 h-5 w-5" />
              Book Free Inspection
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
