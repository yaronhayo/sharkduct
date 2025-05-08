
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const cleanSystemsImages = [
  {
    src: "/lovable-uploads/d6da2eee-7424-426b-ae61-4b23cb057984.png",
    alt: "Clean air duct system after professional cleaning"
  },
  {
    src: "/lovable-uploads/f2dd6582-918c-41e0-a92f-693ee4794c2b.png",
    alt: "Freshly cleaned HVAC components"
  }
];

const CleanSystemsGallery: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Professional Cleaning Results</h2>
        <p className="section-subtitle mb-10">
          See the difference our professional cleaning makes. These are examples of clean, healthy systems after our service.
        </p>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cleanSystemsImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16/9} className="bg-gray-100">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious className={`relative inset-0 translate-y-0 ${isMobile ? 'mr-4' : 'mr-8'}`} />
              <CarouselNext className={`relative inset-0 translate-y-0 ${isMobile ? 'ml-4' : 'ml-8'}`} />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Our professional cleaning methods remove all contaminants, leaving your system clean and your air fresh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleanSystemsGallery;
