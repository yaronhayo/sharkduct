import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Shield, CalendarDays } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    location: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string, type: 'success' | 'error' | '' }>({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id.replace('hero-', '')]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });

    try {
      // Get the form element and submit it programmatically
      // This will trigger the native form submission to FormSubmit.co
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // FormSubmit.co handles the form data automatically
      form.submit();
      
      // Note: We won't get here if the form submission redirects
      // which is FormSubmit.co's default behavior
      setSubmitStatus({ message: 'Form submitted! You will be redirected...', type: 'success' });
      
    } catch (error) {
      if (error instanceof Error) {
        setSubmitStatus({ message: error.message, type: 'error' });
      } else {
        setSubmitStatus({ message: 'An unknown error occurred. Please try again.', type: 'error' });
      }
      setIsSubmitting(false);
    }
  };

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
            {/* Update form to use FormSubmit.co */}
            <form 
              action="https://formsubmit.co/sharkduct@gmail.com" 
              method="POST" 
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              {/* FormSubmit.co configuration options */}
              <input type="hidden" name="_subject" value="New Inspection Request from SharkDuct.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_cc" value="yaron@gettmarketing.com,sandrahmarketing@gmail.com" />
              {/* If you want to redirect after submission, uncomment and customize: */}
              {/* <input type="hidden" name="_next" value="https://www.sharkduct.com/thank-you" /> */}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-name" className="text-shark-darkBlue font-medium text-sm">Your Name</Label>
                  <Input 
                    id="hero-name"
                    name="name"
                    type="text" 
                    placeholder="Enter full name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-phone" className="text-shark-darkBlue font-medium text-sm">Phone Number</Label>
                  <Input 
                    id="hero-phone"
                    name="phone"
                    type="tel" 
                    placeholder="(555) 555-5555" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hero-email" className="text-shark-darkBlue font-medium text-sm">Email Address</Label>
                <Input 
                  id="hero-email"
                  name="email"
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hero-address" className="text-shark-darkBlue font-medium text-sm">Address</Label>
                <Input 
                  id="hero-address"
                  name="address"
                  type="text" 
                  placeholder="Enter your address" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-location" className="text-shark-darkBlue font-medium text-sm">Location</Label>
                  <select 
                    id="hero-location"
                    name="location"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                    value={formData.location}
                    onChange={handleChange}
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
                    name="urgency"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="">Select urgency</option>
                    <option value="urgent">Urgent (24-48 hrs)</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning Ahead</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hero-message" className="text-shark-darkBlue font-medium text-sm">Additional Details (Optional)</Label>
                <Textarea
                  id="hero-message"
                  name="message"
                  placeholder="Any other details you'd like to add?"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-3 rounded-md border border-blue-100">
                <div className="flex items-center text-shark-darkBlue">
                  <Shield className="w-5 h-5 text-shark-accent mr-2" />
                  <span className="text-sm font-medium">10% OFF for military, Veterans & seniors</span>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-shark-accent hover:bg-shark-darkBlue text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
                disabled={isSubmitting}
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Submitting Request...' : 'Book Free Inspection'}
              </Button>
              {submitStatus.message && (
                <p className={`mt-2 text-sm ${submitStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HeroForm;
