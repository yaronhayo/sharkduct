
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const reviews = [
  {
    name: "Jennifer L.",
    location: "Austin, TX",
    rating: 5,
    text: "Shark Duct Cleaning transformed my home's air quality! After they cleaned our air ducts, I noticed my son's allergies improved dramatically. Their technicians were professional and explained everything. Worth every penny for a healthier home!",
    date: "April 12, 2025"
  },
  {
    name: "Michael T.",
    location: "San Marcos, TX",
    rating: 5,
    text: "We had our dryer vent cleaned after noticing clothes were taking longer to dry. The technician showed me how much lint was built up - it was shocking! Now our dryer is efficient again and I feel safer knowing we've reduced our fire risk.",
    date: "March 25, 2025"
  },
  {
    name: "Sarah K.",
    location: "San Antonio, TX",
    rating: 5,
    text: "After Shark cleaned our air ducts, the difference in air quality was immediate. We didn't realize how much dust and allergens were circulating until they were gone! The cedar fever season was much more bearable this year.",
    date: "March 3, 2025"
  },
  {
    name: "David R.",
    location: "Round Rock, TX",
    rating: 5,
    text: "Had both our chimney and ducts cleaned by Shark. The chimney service was exceptional - they were thorough and made sure everything was operating safely. Now we can enjoy our fireplace without worry!",
    date: "February 18, 2025"
  },
  {
    name: "Lisa M.",
    location: "New Braunfels, TX",
    rating: 5,
    text: "Outstanding service cleaning our dryer vent. The technician was on time, professional, and explained the importance of regular maintenance. I'm amazed at how much lint they removed - no wonder our clothes weren't drying properly!",
    date: "January 30, 2025"
  }
];

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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
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
                  <Card className="border border-gray-200 shadow-lg h-full transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 mb-6">"{review.text}"</p>
                      <div className="flex items-center mt-auto">
                        <div className="bg-shark-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
          
          <div className="flex justify-center mt-6 md:mt-0 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  handleUserInteraction();
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-shark-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center mb-6">
            <div className="text-4xl font-bold text-shark-blue mr-2">5.0</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <svg 
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-6">Based on 2,600+ verified customer reviews</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
