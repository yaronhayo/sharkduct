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
    city: '',
    state: '',
    zipCode: '',
    urgency: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string, type: 'success' | 'error' | '' }>({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const fieldId = e.target.id.replace('hero-', '');
    const value = e.target.value;
    
    setFormData({
      ...formData,
      [fieldId]: value
    });
    
    // Clear validation error when user starts typing
    if (formErrors[fieldId]) {
      setFormErrors({
        ...formErrors,
        [fieldId]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but validate format if provided)
    if (formData.phone && !/^[\d\s()+-]{10,15}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    // Zip code validation
    if (formData.zipCode && !/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      errors.zipCode = 'Please enter a valid ZIP code';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });

    try {
      // Get the form element and submit it programmatically
      // This will trigger the native form submission to FormSubmit.co
      const form = e.currentTarget;
      
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

  // Format date for Central Time (US)
  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleString('en-US', { 
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).replace(/,/g, '');
  };

  return (
    <div className="block w-full">
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
              <input type="hidden" name="_subject" value="🔔 New Inspection Request - SharkDuct.com" />
              <input type="hidden" name="_cc" value="yaron@gettmarketing.com,sandrahmarketing@gmail.com" />
              
              {/* Spam prevention - honeypot field */}
              <input type="text" name="_honey" style={{display: 'none'}} />
              
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Redirect after submission */}
              <input type="hidden" name="_next" value="https://sharkduct.com/thank-you.html" />
              
              {/* Remove FormSubmit.co branding, use custom domain */}
              <input type="hidden" name="_sender" value="no-reply@sharkduct.com" />
              <input type="hidden" name="_replyto" value="info@sharkduct.com" />
              <input type="hidden" name="_from_domain" value="SharkDuct.com Air Duct Cleaning" />
              
              {/* Custom HTML template */}
              <input type="hidden" name="_template" value="box" />
              
              {/* HTML template definition - using different approach */}
              <input type="hidden" name="_email-template" value="table" />
              <input type="hidden" name="_email-style" value="background-color: #ffffff; font-family: Arial, sans-serif; color: #333333; padding: 20px; border-radius: 10px;" />
              <input type="hidden" name="_email-header-image" value="https://sharkduct.com/uploads/afc828f1-634d-4a54-b802-cecb90b8885d.png" />
              <input type="hidden" name="_email-header-style" value="padding: 20px; background-color: #1E73BE; text-align: center;" />
              <input type="hidden" name="_email-title-style" value="color: #0F3B60; font-size: 24px; font-weight: bold; margin-top: 20px;" />
              <input type="hidden" name="_email-intro-style" value="font-size: 16px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;" />
              <input type="hidden" name="_email-table-style" value="width: 100%; border-collapse: collapse;" />
              <input type="hidden" name="_email-table-header-style" value="background-color: #3a9abc; color: white; text-align: left; padding: 10px; font-weight: bold;" />
              <input type="hidden" name="_email-table-cell-style" value="border: 1px solid #eee; padding: 12px;" />
              <input type="hidden" name="_email-button-style" value="background-color: #3a9abc; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin-top: 20px;" />
              <input type="hidden" name="_email-signature-style" value="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; font-size: 14px; color: #777;" />
              
              {/* Custom title and intro message */}
              <input type="hidden" name="_email-title" value="🔔 New Inspection Request" />
              <input type="hidden" name="_email-intro" value="A new inspection request has been submitted through the SharkDuct.com website. Please review these details and contact the customer promptly:" />
              <input type="hidden" name="_email-button" value="Call Customer: (877) 888-8431" />
              <input type="hidden" name="_email-button-url" value="tel:8778888431" />
              <input type="hidden" name="_email-signature" value="© 2023 Shark Duct Cleaning | This is an automated notification | www.sharkduct.com" />
              
              {/* Add metadata as extra form fields to display in the email */}
              <input type="hidden" name="meta_form_source" value="SharkDuct Website - Hero Form" />
              <input type="hidden" name="meta_submission_time" value={getFormattedDate()} />
              
              {/* Auto-response to the person who submitted the form */}
              <input type="hidden" name="_autoresponse" value="Thank you for requesting an inspection from Shark Duct Cleaning! We've received your request and will contact you shortly to confirm your appointment. For immediate assistance, please call us at (877) 888-8431." />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-name" className="text-shark-darkBlue font-medium text-sm">Your Name<span className="text-red-500">*</span></Label>
                  <Input 
                    id="hero-name"
                    name="name"
                    type="text" 
                    placeholder="Enter full name" 
                    className={`w-full px-4 py-3 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-phone" className="text-shark-darkBlue font-medium text-sm">Phone Number</Label>
                  <Input 
                    id="hero-phone"
                    name="phone"
                    type="tel" 
                    placeholder="(555) 555-5555" 
                    className={`w-full px-4 py-3 rounded-md border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hero-email" className="text-shark-darkBlue font-medium text-sm">Email Address<span className="text-red-500">*</span></Label>
                <Input 
                  id="hero-email"
                  name="email"
                  type="email" 
                  placeholder="you@example.com" 
                  className={`w-full px-4 py-3 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200`}
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
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
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="hero-city" className="text-shark-darkBlue font-medium text-sm">City</Label>
                  <Input 
                    id="hero-city"
                    name="city"
                    type="text" 
                    placeholder="City" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-state" className="text-shark-darkBlue font-medium text-sm">State</Label>
                  <select 
                    id="hero-state"
                    name="state"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200 bg-white"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">State</option>
                    <option value="TX">TX</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-zipCode" className="text-shark-darkBlue font-medium text-sm">ZIP</Label>
                  <Input 
                    id="hero-zipCode"
                    name="zipCode"
                    type="text" 
                    placeholder="ZIP Code" 
                    className={`w-full px-4 py-3 rounded-md border ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-transparent transition-all duration-200`}
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                  {formErrors.zipCode && <p className="text-red-500 text-xs mt-1">{formErrors.zipCode}</p>}
                </div>
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
