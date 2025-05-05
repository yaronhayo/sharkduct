
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Certified Professionals",
      description: "Our local Austin and San Antonio technicians don't just meet industry standards—they exceed them. With rigorous training and full certification, they'll treat your home with the same care they would their own family's.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Advanced Equipment",
      description: "In Texas's challenging climate, ordinary equipment just doesn't cut it. Our commercial-grade technology removes what others leave behind—from Austin's notorious cedar pollen to San Antonio's dust and allergens.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "Not just satisfied—thrilled. That's our promise to every Central Texas homeowner. We don't consider the job complete until you're absolutely delighted with the results, or we'll make it right at zero cost to you.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "No surprises, ever. While other Austin and San Antonio companies lure you in with low quotes then hit you with hidden fees, we provide crystal-clear pricing upfront. What we quote is exactly what you'll pay—guaranteed.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Services",
      description: "From downtown Austin high-rises to historic San Antonio homes, we've designed specialized solutions for every property type. One call tackles it all—from air ducts to dryer vents—saving you time and headaches.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Locally Owned & Operated",
      description: "We're your neighbors, not a faceless corporation. Born and built in Central Texas, we understand the unique challenges of local homes—from Hill Country humidity to seasonal allergens that outsiders simply don't get.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  const stats = [
    { value: "10,000+", label: "Austin & San Antonio Families Protected" },
    { value: "15+", label: "Years Serving Central Texas" },
    { value: "A+", label: "BBB Rating Since 2010" },
    { value: "5-Star", label: "Rated #1 in Texas" },
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-shark-blue to-shark-darkBlue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Why Austin & San Antonio Homeowners Choose Shark Duct Cleaning</h2>
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto text-center">
          While other companies cut corners, we've spent 15+ years perfecting our craft in Central Texas homes just like yours. Our reputation isn't built on empty promises—it's built on delivering cleaner air, healthier families, and unmatched service to every customer.
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
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">What Central Texas Customers Are Saying</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-shark-yellow mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center mt-8 gap-4">
              <div className="flex items-center bg-white/10 rounded-full py-2 px-4">
                <svg className="h-5 w-5 text-shark-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Licensed</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full py-2 px-4">
                <svg className="h-5 w-5 text-shark-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Bonded</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full py-2 px-4">
                <svg className="h-5 w-5 text-shark-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Insured</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full py-2 px-4">
                <svg className="h-5 w-5 text-shark-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>NADCA Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
