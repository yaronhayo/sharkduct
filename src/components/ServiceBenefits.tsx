
import React from 'react';
import { Button } from '@/components/ui/button';

const ServiceBenefits = () => {
  const ductCleaningBenefits = [
    {
      title: "Healthier Indoor Environment",
      description: "Removal of dust, allergens, and contaminants helps everyone breathe easier, especially allergy and asthma sufferers.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Enhanced System Efficiency",
      description: "Clean ducts allow your HVAC system to operate more efficiently, potentially reducing energy costs by up to 30%.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Extended Equipment Life",
      description: "Regular cleaning reduces strain on your HVAC system, potentially extending its operational lifespan.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const dryerVentBenefits = [
    {
      title: "Fire Prevention",
      description: "Lint buildup in dryer vents is a leading cause of household fires. Regular cleaning significantly reduces this risk.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      title: "Energy Efficiency",
      description: "Clean dryer vents allow your dryer to operate more efficiently, reducing energy consumption and saving you money.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Extended Appliance Life",
      description: "Regular cleaning helps your dryer last longer by reducing strain on its components and preventing overheating.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-shark-gray">
      <div className="container mx-auto">
        <h2 className="section-title">Benefits of Our Professional Cleaning Services</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Air Duct Cleaning Benefits */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-3xl font-bold text-shark-blue mb-6 pb-4 border-b border-gray-200">
                Air Duct Cleaning Benefits
              </h3>
              
              <div className="space-y-8">
                {ductCleaningBenefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-shark-darkBlue mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-shark-blue hover:bg-shark-darkBlue text-lg">
                  Schedule Duct Cleaning
                </Button>
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-md p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-blue-800">Did You Know?</h5>
                    <p className="text-sm text-blue-700 mt-1">
                      The EPA ranks indoor air pollution among the top five environmental health risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dryer Vent Cleaning Benefits */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-3xl font-bold text-shark-blue mb-6 pb-4 border-b border-gray-200">
                Dryer Vent Cleaning Benefits
              </h3>
              
              <div className="space-y-8">
                {dryerVentBenefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-shark-darkBlue mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-shark-blue hover:bg-shark-darkBlue text-lg">
                  Schedule Dryer Vent Cleaning
                </Button>
              </div>
              
              <div className="mt-6 bg-red-50 rounded-md p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-red-800">Safety Alert</h5>
                    <p className="text-sm text-red-700 mt-1">
                      Over 15,000 house fires each year are caused by clogged dryer vents according to the U.S. Fire Administration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-shark-darkBlue mb-6">
            Professional cleaning isn't just about comfort—it's about protecting your health, home, and finances.
          </p>
          <Button size="lg" className="bg-shark-yellow hover:bg-yellow-500 text-shark-darkBlue text-lg">
            Get Your FREE Inspection Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
