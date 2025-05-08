
interface Promotion {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  benefits: string[];
}

export const promotionData: Promotion[] = [
  {
    title: "Air Duct Cleaning",
    price: "$89",
    originalPrice: "$199",
    description: "Removes allergens, dust & debris. Thorough cleaning to improve air quality.",
    benefits: [
      "Improves indoor air quality",
      "Removes dust and allergens",
      "Reduces contaminants"
    ]
  },
  {
    title: "Dryer Vent Cleaning",
    price: "$85",
    originalPrice: "$150",
    description: "Prevent fires, improve efficiency, save money, and extend dryer life.",
    benefits: [
      "Prevents potential fire hazards",
      "Improves dryer efficiency",
      "Extends appliance lifespan"
    ]
  },
  {
    title: "Air Duct Combo",
    price: "$149",
    originalPrice: "$249",
    description: "Expert cleaning to maintain the efficiency of your HVAC Air duct & Dryer systems.",
    benefits: [
      "Complete system maintenance",
      "Enhanced HVAC performance",
      "Improved air quality"
    ]
  },
  {
    title: "Duct & Vent Inspection",
    price: "$49",
    originalPrice: "$99",
    description: "The fee is waived when you schedule a repair or cleaning service.",
    benefits: [
      "Comprehensive evaluation",
      "Identify potential issues",
      "Professional recommendations"
    ]
  }
];
