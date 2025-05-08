
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const BeforeAfterGallery = () => {
  const beforeAfterImages = [
    {
      id: 1,
      src: "/uploads/9072da68-359b-42d6-8b0c-db430694023b.png",
      alt: "Before and after air duct cleaning showing dramatic removal of mold and dust buildup"
    },
    {
      id: 2, 
      src: "/uploads/dfba786c-257d-4baf-9902-9f4854922e10.png",
      alt: "Before and after HVAC system cleaning showing removal of dust accumulation"
    }
  ];
  
  // Add console logs to debug image loading
  console.log("Image paths:", beforeAfterImages.map(img => img.src));
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-shark-darkBlue"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Cleaning Results
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          See the dramatic difference our professional duct cleaning makes. These before and after images 
          show how we transform dirty, contaminated air ducts into clean, healthy systems.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Error loading image: ${image.src}`);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML += `<div class="p-4 text-red-500">Image failed to load</div>`;
                      }}
                      onLoad={() => console.log(`Image loaded successfully: ${image.src}`)}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold">Before & After</h3>
                      <p className="text-white/90 text-sm">The difference is clear</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Don't let your family breathe through dirty ducts. Schedule your cleaning today.
          </p>
          <a href="tel:8778888431" className="inline-block">
            <button className="bg-shark-accent hover:bg-shark-blue text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
              Call for Free Inspection
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
