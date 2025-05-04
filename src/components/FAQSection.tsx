
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How often should I have my air ducts cleaned?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3 to 5 years. However, if you have pets, allergies, recent home renovations, or notice visible dust coming from vents, you may benefit from more frequent cleanings. Our free inspection can help determine if your ducts need cleaning."
    },
    {
      question: "How long does a professional duct cleaning take?",
      answer: "A thorough professional duct cleaning typically takes between 3 to 5 hours for an average-sized home. The exact time depends on the size of your home, the number of vents, the system's complexity, and the level of contamination. Our technicians will provide you with a time estimate before beginning the service."
    },
    {
      question: "Is duct cleaning worth the cost?",
      answer: "Yes, professional duct cleaning offers several valuable benefits: improved indoor air quality, potential energy savings, longer HVAC system life, reduced allergens and irritants, and elimination of musty odors. For those with respiratory issues, allergies, or asthma, the health benefits alone make it worthwhile."
    },
    {
      question: "How often should dryer vents be cleaned?",
      answer: "Dryer vents should be cleaned at least once per year to prevent fire hazards and maintain efficient operation. Homes with large families, pets, or high dryer usage may require more frequent cleanings. Warning signs that indicate immediate cleaning include longer drying times, clothes feeling unusually hot, burning smells, or visible lint accumulation."
    },
    {
      question: "What's included in your free inspection?",
      answer: "Our comprehensive free inspection includes a visual examination of your ductwork, testing for airflow at vents, checking for dust and debris accumulation, inspecting for mold or moisture issues, and evaluating your system's overall efficiency. Our technician will document any issues found with photos and provide you with honest recommendations and a detailed quote if cleaning is needed."
    },
    {
      question: "Do you offer any guarantees on your services?",
      answer: "Yes, we stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return to address any concerns at no additional cost. We also provide before and after photos of our work to demonstrate the effectiveness of our cleaning process."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-shark-gray">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Get answers to our most commonly asked questions. Still have questions? Feel free to contact us!
        </p>
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-shark-darkBlue hover:text-shark-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-shark-darkBlue mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Our team is ready to answer any questions you might have about our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:123-456-7890" className="bg-shark-blue hover:bg-shark-darkBlue text-white py-2 px-6 rounded-md inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a href="#contact" className="bg-white border-2 border-shark-blue hover:bg-shark-blue hover:text-white text-shark-blue py-2 px-6 rounded-md transition-colors inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
