
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyChooseUs = () => {
  const isMobile = useIsMobile();
  
  const reasons = [
    {
      title: "Certified Professionals",
      description: "Our techs are NADCA certified and extensively trained in the latest duct cleaning techniques and EPA safety protocols.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Advanced Equipment",
      description: "We use state-of-the-art equipment that thoroughly cleans and sanitizes your entire duct system.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. We provide upfront pricing before any work begins.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Services",
      description: "We offer complete solutions for all your indoor air quality needs, from air ducts to dryer vents.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Family Owned, Locally Oriented",
      description: "We're committed to treating your home as if it was ours, with the care and attention every Central Texas family deserves.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "18+", label: "Years Experience" },
    { value: "A+", label: "BBB Rating" },
    { value: "4.9", label: "Service Rating" },
  ];

  const certifications = [
    { label: "Licensed", icon: "★" },
    { label: "Bonded", icon: "★" },
    { label: "Insured", icon: "★" },
    { label: "NADCA Certified", icon: "★" },
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-shark-blue to-shark-darkBlue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Why Choose Shark Duct Cleaning</h2>
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto text-center">
          With over 18 years of experience, we've built our reputation on quality service, expert technicians, and customer satisfaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-0 shadow-xl hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 flex justify-center">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">{reason.title}</h3>
                <p className="text-white/80 text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Track Record Speaks For Itself</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3">
                  <div className="text-3xl md:text-5xl font-bold text-shark-yellow mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white/10 rounded-full py-2 px-4 text-sm md:text-base mb-2"
                >
                  <span className="text-shark-yellow mr-2">{cert.icon}</span>
                  <span>{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
