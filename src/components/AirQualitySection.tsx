
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AirQualitySection = () => {
  const facts = [
    {
      stat: '90%',
      description: 'of our time is spent indoors on average'
    },
    {
      stat: '5x',
      description: 'Indoor air can be five times more polluted than outdoor air'
    },
    {
      stat: '50%',
      description: 'reduction in allergens after proper duct cleaning'
    },
    {
      stat: '20-40%',
      description: 'of energy used in homes goes to heating and cooling'
    }
  ];

  return (
    <section id="air-quality" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">The Importance of Indoor Air Quality</h2>
        <p className="section-subtitle">
          Did you know that the air inside your home can be more polluted than the air outside? 
          Maintaining clean air ducts is crucial for your family's health and wellbeing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10">
          <div className="bg-shark-gray rounded-lg p-6 shadow-md animate-float card-hover">
            <h3 className="text-2xl font-bold text-shark-blue mb-4">Health Impacts of Poor Air Quality</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Increased respiratory issues and allergies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Worsened symptoms for asthma sufferers</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Headaches, fatigue, and irritation of eyes, nose and throat</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>Long-term exposure to contaminants can lead to serious health conditions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-shark-gray rounded-lg p-6 shadow-md animate-float card-hover">
            <h3 className="text-2xl font-bold text-shark-blue mb-4">What Lurks in Your Air Ducts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-shark-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Dust, dirt, and pollen that accumulate over time</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-shark-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Mold and mildew that can cause allergic reactions and illness</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-shark-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Pet dander, hair and other allergens</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-shark-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Bacteria and viruses that can contribute to illness</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden border-0 card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-shark-blue mb-2">{fact.stat}</div>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-shark-darkBlue">
            Don't compromise on your family's health. Regular duct cleaning is essential for maintaining clean indoor air.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AirQualitySection;
