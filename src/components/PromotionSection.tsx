
import React from 'react';
import { Button } from '@/components/ui/button';

const PromotionSection = () => {
  const promotions = [
    {
      title: "New Customer Special",
      discount: "$50 OFF",
      description: "First-time customers save $50 on any duct cleaning service.",
      code: "NEWCUST50",
      expires: "Valid until June 30, 2025",
      bgColor: "bg-gradient-to-r from-shark-blue to-shark-lightBlue"
    },
    {
      title: "Whole Home Package",
      discount: "$100 OFF",
      description: "Complete duct and dryer vent cleaning package.",
      code: "WHOLEHOME100",
      expires: "Valid until July 15, 2025",
      bgColor: "bg-gradient-to-r from-shark-darkBlue to-shark-blue"
    },
    {
      title: "Seasonal Special",
      discount: "20% OFF",
      description: "Spring cleaning special on all services.",
      code: "SPRING20",
      expires: "Valid until May 31, 2025",
      bgColor: "bg-gradient-to-r from-green-600 to-emerald-500"
    },
    {
      title: "Referral Reward",
      discount: "$25 OFF",
      description: "For you and the friend you refer to us.",
      code: "REFERRAL25",
      expires: "Never expires",
      bgColor: "bg-gradient-to-r from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="promotions" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Exclusive Promotions</h2>
        <p className="section-subtitle">
          Take advantage of these limited-time offers to save on our professional cleaning services.
          Simply mention the promo code when you call to schedule.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {promotions.map((promo, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`${promo.bgColor} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <div className="text-4xl font-bold mb-2">{promo.discount}</div>
                <p className="text-sm text-white/80 mb-4">{promo.description}</p>
              </div>
              
              <div className="bg-white p-6">
                <div className="bg-gray-100 rounded-md p-3 text-center mb-4">
                  <p className="text-sm text-gray-500">Promo Code:</p>
                  <p className="text-lg font-bold text-shark-darkBlue">{promo.code}</p>
                </div>
                <p className="text-xs text-gray-500 text-center mb-4">{promo.expires}</p>
                <Button className="w-full bg-shark-blue hover:bg-shark-darkBlue">
                  Claim Offer
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-shark-gray rounded-lg p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-shark-darkBlue mb-2">
                Free Duct Cleaning Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with our friendly experts today. We'll help you understand your options with no pressure.
              </p>
              <p className="text-sm text-gray-500">
                *Limited time offer.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" className="bg-shark-accent hover:bg-shark-blue text-white font-bold px-8">
                Get Free Advice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
