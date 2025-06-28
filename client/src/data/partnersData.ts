export interface Partner {
  id: number;
  name: string;
  logoPath: string;
  type: "Funding" | "Training" | "Research" | "Outreach" | "Technical Support";
  description: string; // success story or impact
  website?: string;
}

export const partnersData: Partner[] = [
  {
    id: 1,
    name: "GreenEarth NGO",
    logoPath: "/images/Patrick.png", // placeholder
    type: "Training",
    description:
      "With GreenEarth, we trained over 500 farmers in soil conservation techniques across Oromia.",
    website: "https://greenearth.org",
  },
  {
    id: 2,
    name: "AgriTech Research Institute",
    logoPath: "/images/Patrick.png",
    type: "Research",
    description:
      "Collaborated on climate-resilient crop trials that increased yield by 30%.",
    website: "https://agritechresearch.org",
  },
  {
    id: 3,
    name: "Global Seeds Cooperative",
    logoPath: "/images/Patrick.png",
    type: "Outreach",
    description:
      "Distributed improved seed varieties to 1,200 smallholder farmers.",
    website: "https://globalseeds.org",
  },
];
