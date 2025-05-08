
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BookingFormField from './BookingFormField';
import TexasValuesBadge from './TexasValuesBadge';

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
}

export interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  location: string;
  urgency: string;
  notes: string;
}

const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const [formState, setFormState] = useState<BookingFormData>({
    name: '',
    phone: '',
    address: '',
    location: '',
    urgency: '',
    notes: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
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
        <BookingFormField id="name" label="Your Name" customIndex={0}>
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
        </BookingFormField>
        
        <BookingFormField id="phone" label="Phone Number" customIndex={1}>
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
        </BookingFormField>
      </motion.div>
      
      <BookingFormField id="address" label="Address" customIndex={2}>
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
      </BookingFormField>
      
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
        <BookingFormField id="location" label="Location" customIndex={0}>
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
        </BookingFormField>
        
        <BookingFormField id="urgency" label="How Soon?" customIndex={1}>
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
        </BookingFormField>
      </motion.div>
      
      <BookingFormField id="notes" label="Notes (Optional)" customIndex={5}>
        <Textarea
          id="notes"
          name="notes"
          value={formState.notes}
          onChange={handleChange}
          placeholder="Any specific concerns or questions?"
          rows={2}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
        />
      </BookingFormField>
      
      <TexasValuesBadge className="mb-4" />
      
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
  );
};

export default BookingForm;
