
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Check, Phone, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingDialog from './BookingDialog';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue pt-32 pb-16 md:py-32">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoMTJ2LTZoLTEyem0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Is Your Austin Home Hiding Dangerous Air Contaminants?
            </h1>
            
            <p className="text-lg mb-6 text-gray-100">
              Texas summers mean closed windows and recirculating air. Are your loved ones inhaling hidden contaminants from your neglected duct system?
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Breathe cleaner air free from harmful allergens</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Save on energy bills with efficient airflow</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-shark-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Same-day service for Austin, San Antonio & surrounding areas</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <BookingDialog>
                <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-base">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Free Inspection
                </Button>
              </BookingDialog>
              <a href="tel:8776524343">
                <Button size="lg" variant="outline" className="bg-shark-blue hover:bg-shark-darkBlue hover:text-white text-white text-base">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>877-652-4343</span>
                </Button>
              </a>
            </div>
            
            <div className="flex items-center mb-8">
              <Shield className="w-6 h-6 text-shark-accent mr-2" />
              <span className="font-semibold">Over 10,000 TX Homes Protected</span>
            </div>

            {/* Trust Badges - Moved below "Over 10,000 TX Homes Protected" */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xs font-medium text-shark-accent">NADCA</span>
                <span className="text-sm font-bold text-white">Certified</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xs font-medium text-shark-accent">18+ Years</span>
                <span className="text-sm font-bold text-white">Experience</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xs font-medium text-shark-accent">4.9 Stars</span>
                <span className="text-sm font-bold text-white">2,600+ Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-shark-darkBlue mb-4">Beat Central Texas Allergy Season Now</h3>
                
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
                  
                  <BookingDialog trigger={false}>
                    <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue text-base py-6">
                      <CalendarDays className="mr-2 h-5 w-5" />
                      Book Free Inspection
                    </Button>
                  </BookingDialog>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
