
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: "Jennifer L.",
    location: "Seattle, WA",
    rating: 5,
    text: "Shark Duct Cleaning did an amazing job! The technicians were professional, thorough, and explained everything they were doing. I noticed an immediate improvement in my home's air quality. Highly recommend!",
    date: "April 12, 2025"
  },
  {
    name: "Michael T.",
    location: "Bellevue, WA",
    rating: 5,
    text: "After Shark cleaned our dryer vent, our clothes dry so much faster! The technician showed me how much lint was built up (it was shocking). Great service and fair pricing.",
    date: "March 25, 2025"
  },
  {
    name: "Sarah K.",
    location: "Tacoma, WA",
    rating: 5,
    text: "I've used Shark Duct Cleaning twice now and both times have been excellent experiences. My family has noticed fewer allergy symptoms since having our ducts professionally cleaned. Worth every penny!",
    date: "March 3, 2025"
  },
  {
    name: "David R.",
    location: "Everett, WA",
    rating: 4,
    text: "Very thorough service. The free inspection revealed some issues with our system I had no idea about. They fixed everything and now our HVAC system runs much more efficiently. Will use again.",
    date: "February 18, 2025"
  },
  {
    name: "Lisa M.",
    location: "Renton, WA",
    rating: 5,
    text: "Outstanding service from start to finish. The scheduling was easy, technicians arrived on time, and they were extremely thorough. Our home feels fresher and cleaner. Thank you Shark Duct!",
    date: "January 30, 2025"
  }
];

const ReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

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
    if (isMobile) {
      setVisibleReviews([reviews[activeIndex]]);
    } else {
      const startIndex = activeIndex;
      const endIndex = (activeIndex + 2) % reviews.length;
      
      if (startIndex <= endIndex) {
        setVisibleReviews(reviews.slice(startIndex, endIndex + 1));
      } else {
        setVisibleReviews([...reviews.slice(startIndex), ...reviews.slice(0, endIndex + 1)]);
      }
    }
  }, [activeIndex, isMobile]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const renderStars = (rating) => {
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
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out gap-6">
              {visibleReviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] border border-gray-200 shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-6">"{review.text}"</p>
                    <div className="flex items-center">
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
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-shark-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-shark-blue text-shark-blue"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              onClick={nextSlide}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-shark-blue text-shark-blue"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center mb-6">
            <div className="text-4xl font-bold text-shark-blue mr-2">4.9</div>
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
          <p className="text-gray-600 mb-6">Based on 350+ verified customer reviews</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img 
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                alt="Google Reviews" 
                className="h-12 mx-auto mb-2"
              />
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm">4.9 (180+ reviews)</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://1000logos.net/wp-content/uploads/2021/11/Yelp-Logo.png" 
                alt="Yelp Reviews" 
                className="h-12 mx-auto mb-2"
              />
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm">4.8 (90+ reviews)</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/BBB.svg/1200px-BBB.svg.png" 
                alt="BBB Rating" 
                className="h-12 mx-auto mb-2"
              />
              <div className="flex justify-center">
                <div className="bg-blue-700 text-white px-2 font-bold">A+</div>
              </div>
              <p className="text-sm">Accredited Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
