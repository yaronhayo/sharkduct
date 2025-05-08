
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './promotions/SectionHeader';
import { ArrowLeftRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const BeforeAfterSection = () => {
  const beforeAfterItems = [
    {
      beforeImg: '/lovable-uploads/265a47d2-078e-4630-8b12-43b75f9c4a31.png',
      afterImg: '/lovable-uploads/39ec087b-09f1-4c32-b45d-0bc3c59cca19.png',
      title: 'Duct System Transformations',
      description: 'Our professional cleaning removes years of dust, mold, and debris buildup from your duct system.'
    },
    {
      beforeImg: '/lovable-uploads/265a47d2-078e-4630-8b12-43b75f9c4a31.png',
      afterImg: '/lovable-uploads/39ec087b-09f1-4c32-b45d-0bc3c59cca19.png',
      title: 'Air System Cleaning',
      description: 'See the dramatic difference in your ventilation system before and after our thorough cleaning process.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="See the Difference"
          subtitle="Dramatic before and after results from our professional duct cleaning service"
        />

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {beforeAfterItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 md:pl-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="relative">
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={item.beforeImg} 
                              alt="Before cleaning" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute top-2 left-2 bg-shark-darkBlue/90 text-white text-xs font-semibold py-1 px-2 rounded-md">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={item.afterImg} 
                              alt="After cleaning" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute top-2 right-2 bg-shark-accent/90 text-white text-xs font-semibold py-1 px-2 rounded-md">
                            AFTER
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                        <ArrowLeftRight className="h-5 w-5 text-shark-blue" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-shark-darkBlue mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium text-shark-darkBlue mb-8">
            Don't let dirty ducts affect your indoor air quality. Our professional service makes a visible difference!
          </p>
          <a href="#booking" className="inline-block bg-shark-accent hover:bg-shark-blue text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Transform Your Air Quality Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
