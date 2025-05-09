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

const dirtyDuctsImages = [
  {
    id: 1,
    src: "/uploads/b588b0a2-1c04-4402-b91d-f3829d27b3af.png",
    alt: "Extremely dirty air duct before cleaning",
  },
  {
    id: 2,
    src: "/uploads/e5b29d7b-91b5-4dde-be9f-8a49e3e7d832.png",
    alt: "Accumulated dust and debris in ventilation shaft",
  },
  {
    id: 3,
    src: "/uploads/bfb901ec-4c7b-425b-ad03-f804fc2bcd70.png",
    alt: "Mold growth visible inside an air duct",
  },
  {
    id: 4,
    src: "/uploads/bce836e1-2e33-4b4d-bce7-21e986dfc1c7.png",
    alt: "Clogged air vent with thick layer of dust",
  },
  {
    id: 5,
    src: "/uploads/f6932080-b501-46ee-9cfd-f19a047456e7.png",
    alt: "Close-up of contaminants in ductwork",
  },
];

const DirtyDuctsGallery: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {dirtyDuctsImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-0">
                      <AspectRatio ratio={1} className="bg-gray-100">
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
    </div>
  );
};

export default DirtyDuctsGallery;
