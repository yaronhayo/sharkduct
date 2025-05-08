
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import ReviewCard from './reviews/ReviewCard';
import ReviewDots from './reviews/ReviewDots';
import RatingOverview from './reviews/RatingOverview';
import { reviews } from './reviews/types';

const ReviewsCarousel = () => {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-rotate carousel
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying && api) {
      interval = window.setInterval(() => {
        api.scrollNext();
      }, 2000); // 2 seconds pause between rotations
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, api]);

  // Pause auto-rotation when user interacts with carousel
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
    handleUserInteraction();
  };

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. See what our satisfied customers have to say about our services.
        </p>

        <div className="relative mt-12">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => handleUserInteraction()}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={() => handleUserInteraction()}
            onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 5000)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-6">
              <CarouselPrevious 
                onClick={() => handleUserInteraction()}
                className="relative inset-auto translate-y-0 mr-2 bg-shark-blue text-white hover:bg-shark-darkBlue hover:text-white" 
              />
              <CarouselNext 
                onClick={() => handleUserInteraction()}
                className="relative inset-auto translate-y-0 ml-2 bg-shark-blue text-white hover:bg-shark-darkBlue hover:text-white" 
              />
            </div>
          </Carousel>
          
          <ReviewDots 
            total={reviews.length} 
            current={currentIndex} 
            onSelect={handleDotClick} 
          />
        </div>
        
        <div className="mt-12">
          <RatingOverview rating="5.0" reviewCount="2,600+" />
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
