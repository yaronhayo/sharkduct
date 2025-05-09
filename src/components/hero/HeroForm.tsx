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
              <input type="hidden" name="_next" value="https://www.sharkduct.com/thank-you" />
              
              {/* Custom HTML template */}
              <input type="hidden" name="_template" value="custom" />
              
              {/* HTML template definition */}
              <input type="hidden" name="_message" value="
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff; color: #333333; }
    .email-container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; padding: 20px 0; }
    .header img { max-width: 250px; height: auto; }
    .title { background-color: #1E73BE; color: white; padding: 15px; border-radius: 5px 5px 0 0; }
    .title h1 { margin: 0; font-size: 22px; }
    .content { background-color: #f9f9f9; padding: 20px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #0F3B60; margin-bottom: 5px; }
    .field-value { padding: 8px; background-color: white; border: 1px solid #e3e3e3; border-radius: 4px; }
    .meta { font-size: 12px; background-color: #f0f4f8; border-radius: 0 0 5px 5px; padding: 10px; border: 1px solid #ddd; border-top: none; }
    .meta p { margin: 5px 0; color: #666; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
    .cta { text-align: center; margin: 25px 0; }
    .cta-button { background-color: #3a9abc; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header'>
      <img src='https://www.sharkduct.com/uploads/afc828f1-634d-4a54-b802-cecb90b8885d.png' alt='Shark Duct Cleaning' />
    </div>
    
    <div class='title'>
      <h1>🔔 New Inspection Request</h1>
    </div>
    
    <div class='content'>
      <div class='field'>
        <div class='field-label'>Name:</div>
        <div class='field-value'>{{name}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Phone Number:</div>
        <div class='field-value'>{{phone}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Email Address:</div>
        <div class='field-value'>{{email}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Address:</div>
        <div class='field-value'>{{address}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Location:</div>
        <div class='field-value'>{{location}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Urgency:</div>
        <div class='field-value'>{{urgency}}</div>
      </div>
      
      <div class='field'>
        <div class='field-label'>Additional Message:</div>
        <div class='field-value'>{{message}}</div>
      </div>
      
      <div class='cta'>
        <a href='tel:8778888431' class='cta-button'>Call Customer Now</a>
      </div>
    </div>
    
    <div class='meta'>
      <p><strong>Form Location:</strong> {{form_location}}</p>
      <p><strong>Submission Date:</strong> {{submission_date}} (US Central Time)</p>
      <p><strong>IP Address:</strong> {{_ip}}</p>
      <p><strong>User Agent:</strong> {{_user_agent}}</p>
    </div>
    
    <div class='footer'>
      <p>© 2023 Shark Duct Cleaning | This is an automated notification</p>
    </div>
  </div>
</body>
</html>" />
              
              {/* Auto-response to the person who submitted the form */}
              <input type="hidden" name="_autoresponse" value="Thank you for requesting an inspection from Shark Duct Cleaning! We've received your request and will contact you shortly to confirm your appointment. For immediate assistance, please call us at (877) 888-8431." />
              
              {/* User info for form metadata */}
              <input type="hidden" name="form_location" value="Hero Section - Homepage" />
              <input type="hidden" name="submission_date" value={new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} />
              
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
