import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BeforeAfterSection = () => {
  const projects = [
    {
      id: 1,
      title: "Before",
      description: "Dirty and clogged air ducts before our cleaning service.",
      image: "/uploads/5dc06ef1-b52b-4d1c-b35f-727b582b1191.png",
      alt: "Air duct cleaning before and after comparison"
    },
    {
      id: 2,
      title: "After",
      description: "Clean and efficient air ducts after our professional cleaning.",
      image: "/uploads/d18f5eba-36f7-447e-a264-05bca3631008.png",
      alt: "HVAC system before and after professional cleaning"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Real Results</h2>
        <p className="section-subtitle mb-12">
          See the dramatic difference our professional cleaning services make with these before and after comparisons.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover shadow-lg h-full">
              <div className="p-6 bg-shark-blue text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-100">{project.description}</p>
              </div>
              <CardContent className="p-6">
                <div className="relative">
                  <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
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
            className="gradient-btn inline-block bg-shark-accent hover:bg-shark-darkBlue text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Cleaning
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
