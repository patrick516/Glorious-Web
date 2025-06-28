export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: "Farm Mechanization",
    description:
      "We provide modern equipment like tractors, planters, and harvesters to streamline farming tasks and boost productivity.",
    image: "/images/farm-services.webp",
  },
  {
    title: "Soil Testing & Analysis",
    description:
      "Comprehensive soil testing to evaluate nutrient levels, pH, and fertility—helping farmers make smarter, sustainable decisions.",
    image: "/images/samples.webp",
  },
  {
    title: "Irrigation Solutions",
    description:
      "Custom irrigation systems including drip and sprinkler setups to improve water use efficiency and ensure consistent crop hydration.",
    image: "/images/irrigation.webp",
  },
  {
    title: "Livestock Management",
    description:
      "Holistic animal care services covering feeding, breeding, health monitoring, and record-keeping to optimize livestock productivity.",
    image: "/images/livestock.webp",
  },
  {
    title: "Agri Consultancy Services",
    description:
      "Professional guidance on crop planning, agribusiness, market access, and risk management to maximize farm profitability.",
    image: "/images/consultancy.webp",
  },
];
