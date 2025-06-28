export interface MissionPillar {
  icon: string; // or you can store icon name/type if you want
  title: string;
  description: string;
}

export interface MissionVisionData {
  mission: string;
  vision: string;
  founderQuote: string;
  pillars: MissionPillar[];
  images: { description: string; path: string }[];
}

export const missionVisionData: MissionVisionData = {
  mission:
    "To empower African farmers through innovation, education, and sustainable practices.",
  vision:
    "A future of food-secure, self-reliant farming communities across Africa.",
  founderQuote:
    "Innovation is only meaningful when it’s rooted in local knowledge. – Dr. Elias Kebede",
  pillars: [
    {
      icon: "FaChalkboardTeacher",
      title: "Education",
      description: "Farmer training & peer learning hubs",
    },
    {
      icon: "FaLightbulb",
      title: "Innovation",
      description: "Tech-based tools for resilient farming",
    },
    {
      icon: "FaLeaf",
      title: "Sustainability",
      description: "Agroecology & long-term land health",
    },
  ],
  images: [
    {
      description: "Sustainability concept image",
      path: "/images/consultancy.webp",
    },
    {
      description: "Farmers using technology",
      path: "/images/consultancy.webp",
    },
  ],
};
