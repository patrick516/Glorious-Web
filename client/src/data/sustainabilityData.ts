export interface SustainabilityTopic {
  id: number;
  title: string;
  description: string;
  imagePath: string; // path to placeholder or real image
}

export const sustainabilityData: SustainabilityTopic[] = [
  {
    id: 1,
    title: "Soil Management",
    description:
      "We implement practices like cover cropping, mulching, and crop rotation to preserve and enrich soil health.",
    imagePath: "/images/Patrick.png",
  },
  {
    id: 2,
    title: "Organic Fertilizers",
    description:
      "Our farmers use compost and bio-fertilizers to improve yields without harming ecosystems.",
    imagePath: "/images/Patrick.png",
  },
  {
    id: 3,
    title: "Climate-Smart Agriculture",
    description:
      "We promote CSA methods like drought-resistant crops and intercropping to boost resilience.",
    imagePath: "/images/Patrick.png",
  },
  {
    id: 4,
    title: "Renewable Practices",
    description:
      "From solar-powered irrigation to rainwater harvesting, our farms use clean, efficient systems.",
    imagePath: "/images/Patrick.png",
  },
];
