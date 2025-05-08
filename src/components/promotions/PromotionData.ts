
interface Promotion {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  benefits: string[];
}

export const promotionData: Promotion[] = [
  {
    title: "Air Duct Cleaning Special",
    price: "$89",
    originalPrice: "$199",
    description: "Complete air duct cleaning service for healthier living spaces.",
    benefits: [
      "Improves indoor air quality",
      "Removes dust, allergens & contaminants",
      "Unlimited vents, limited time only!"
    ]
  },
  {
    title: "Dryer Vent Cleaning",
    price: "$85",
    originalPrice: "$150",
    description: "Professional dryer vent cleaning service for safety and efficiency.",
    benefits: [
      "Prevents potential fire hazards",
      "Improves dryer efficiency",
      "Extends appliance lifespan"
    ]
  }
];
