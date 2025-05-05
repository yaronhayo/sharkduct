
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-to-r from-shark-blue to-shark-darkBlue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoMTJ2LTZoLTEyem0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Breathing Your Family's Health Away</h2>
          <p className="text-xl text-white/80 mb-8">
            Every day, Austin and San Antonio families breathe in invisible contaminants hiding in their ductwork. Don't wait until allergies worsen or energy bills skyrocket—our local experts are just one call away.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-shark-accent mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Quick Call</h3>
              <p className="text-white/80">5 minutes with our friendly Texas team</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-shark-accent mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Free Assessment</h3>
              <p className="text-white/80">Honest advice with zero sales pressure</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-shark-accent mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Breathe Easier</h3>
              <p className="text-white/80">Enjoy clean air in your Central Texas home</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6 text-left">
              <h3 className="text-2xl font-bold mb-2">Austin & San Antonio Special</h3>
              <p className="text-white/80 mb-4">
                Call today and save <span className="text-shark-accent font-bold">$75 instantly</span> on our complete home duct cleaning package.
              </p>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-shark-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">Limited slots available this month</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white text-lg">
                Claim Free Inspection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
                Call (512) 555-7890
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-white/60">
              *Offer valid for residential properties in Austin, San Antonio and surrounding areas. 
              $75 discount applies to services booked within 7 days of your free consultation. Act now—offer expires soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
