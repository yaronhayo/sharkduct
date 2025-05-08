
import React from 'react';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface BookingFormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  customIndex?: number;
}

const BookingFormField = ({ id, label, children, customIndex = 0 }: BookingFormFieldProps) => {
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
    <motion.div variants={formItemVariants} custom={customIndex} className="space-y-2">
      <Label htmlFor={id} className="text-shark-darkBlue font-medium">{label}</Label>
      {children}
    </motion.div>
  );
};

export default BookingFormField;
