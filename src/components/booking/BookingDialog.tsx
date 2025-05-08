
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import ThankYouMessage from './ThankYouMessage';
import BookingForm, { BookingFormData } from './BookingForm';

interface BookingDialogProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const BookingDialog = ({ children, trigger = true }: BookingDialogProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (formData: BookingFormData) => {
    // Here you would normally submit the form data
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
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
            <ThankYouMessage />
          ) : (
            <BookingForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
