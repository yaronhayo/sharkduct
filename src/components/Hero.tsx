
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Check, Phone, CalendarDays } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue min-h-screen flex items-center">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoMTJ2LTZoLTEyem0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        {/* Trust Badges - Added from Navbar */}
        <div className="flex justify-center mb-6 md:mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Austin & Surrounding: <span className="text-shark-accent">Stop Breathing</span> Contaminated Air
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Texas summers mean closed windows and recirculating air. Are your loved ones inhaling hidden contaminants from your neglected duct system?
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-lg">
                <CalendarDays className="mr-2 h-5 w-5" />
                Call To Inquire About A Free HVAC Duct & Vent Inspection
              </Button>
              <Button size="lg" variant="outline" className="bg-shark-blue hover:bg-shark-darkBlue hover:text-white text-white text-lg">
                <Phone className="mr-2 h-5 w-5" />
                <span>877-652-4343</span>
              </Button>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center">
              <div className="flex items-center mb-3 sm:mb-0">
                <Shield className="w-6 h-6 text-shark-accent mr-2" />
                <span className="font-semibold">Central Texas's #1 Rated Service</span>
              </div>
              <div className="hidden sm:block h-5 border-l border-white/30 mx-4"></div>
              <span>Over 10,000 TX Homes Protected</span>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="absolute -top-8 -left-8 w-full h-full bg-shark-accent rounded-lg transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-2xl">
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="text-2xl font-bold text-shark-darkBlue mb-2">Beat Central Texas Allergy Season Now</h3>
                <p className="text-gray-600 mb-4">Local experts ready to help today!</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cedar fever & pollen defense systems</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Same-day service for Central Texas</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Texas-sized protection guarantee</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
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
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
                <div className="flex flex-col sm:flex-row gap-4">
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
                  rows={3}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                ></textarea>
                <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue text-lg py-6">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Free Inspection Now
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Limited slots this week for Texas hill country residents. Secure yours now.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
