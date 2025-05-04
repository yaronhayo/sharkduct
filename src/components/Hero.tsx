
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-shark-darkBlue to-shark-blue min-h-screen flex items-center">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoMTJ2LTZoLTEyem0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Breathe Cleaner Air with <span className="text-shark-yellow">Professional</span> Duct Cleaning
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Improve your indoor air quality and protect your family's health with Shark Duct Cleaning's professional services.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-shark-yellow hover:bg-yellow-500 text-shark-darkBlue text-lg">
                Get FREE Inspection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
                View Services
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-shark-yellow mr-2" />
                <span className="font-semibold">100% Satisfaction Guarantee</span>
              </div>
              <div className="h-5 border-l border-white/30 mx-4"></div>
              <span>Trusted by 10,000+ Customers</span>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="absolute -top-8 -left-8 w-full h-full bg-shark-yellow rounded-lg transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-2xl">
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="text-2xl font-bold text-shark-darkBlue mb-2">FREE Duct Cleaning Inspection</h3>
                <p className="text-gray-600 mb-4">Limited time offer. Schedule now!</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>No obligation inspection</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Expert recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Same-day service available</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shark-blue"
                />
                <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue text-lg py-6">
                  Schedule Free Inspection
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and conditions. *Terms apply.
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
