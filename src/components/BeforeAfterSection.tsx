
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BeforeAfterSection = () => {
  const projects = [
    {
      id: 1,
      title: "Air Duct Cleaning",
      description: "Removal of mold, dust, and debris from ventilation systems",
      beforeImage: "/lovable-uploads/5dc06ef1-b52b-4d1c-b35f-727b582b1191.png",
      beforeAlt: "Dirty air duct before cleaning",
      afterImage: "/lovable-uploads/5dc06ef1-b52b-4d1c-b35f-727b582b1191.png",
      afterAlt: "Clean air duct after professional cleaning"
    },
    {
      id: 2,
      title: "HVAC System Cleaning",
      description: "Professional cleaning of HVAC vents and components",
      beforeImage: "/lovable-uploads/d18f5eba-36f7-447e-a264-05bca3631008.png",
      beforeAlt: "Dust-covered HVAC vent before cleaning",
      afterImage: "/lovable-uploads/d18f5eba-36f7-447e-a264-05bca3631008.png",
      afterAlt: "Clean HVAC vent after professional service"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Real Results</h2>
        <p className="section-subtitle mb-12">
          See the dramatic difference our professional cleaning services make with these before and after comparisons.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover shadow-lg">
              <div className="p-6 bg-shark-blue text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-100">{project.description}</p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={project.beforeImage} 
                        alt={project.beforeAlt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={project.afterImage} 
                        alt={project.afterAlt}
                        className="object-cover w-full h-full" 
                      />
                    </AspectRatio>
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-700">
            Don't settle for dirty, contaminated air ducts. Our professional cleaning makes a visible difference.
          </p>
          <a 
            href="#contact" 
            className="gradient-btn inline-block"
          >
            Schedule Your Cleaning
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
