export interface StaffMember {
  id: string;
  name: string;
  role: string;
  background: string;
  expertise: string[];
  photoPath: string;
}

export const staffData: StaffMember[] = [
  {
    id: "elias-kebede",
    name: "Dr. Elias Kebede",
    role: "Founder & Lead Agronomist",
    background:
      "With over 20 years in sustainable farming, Dr. Kebede leads innovation in agroecology.",
    expertise: ["Agronomy", "Research", "Community Outreach"],
    photoPath: "/images/Patricks.jpeg",
  },
  {
    id: "linda-makena",
    name: "Linda Makena",
    role: "Field Operations Manager",
    background:
      "Expert in coordinating large-scale farming projects across East Africa.",
    expertise: ["Project Management", "Farmer Training", "Logistics"],
    photoPath: "/images/Patricks.jpeg",
  },
  {
    id: "amos-kiptoo",
    name: "Amos Kiptoo",
    role: "Research Scientist",
    background: "Specializes in soil health and agroforestry systems.",
    expertise: ["Soil Science", "Data Analysis", "Sustainable Practices"],
    photoPath: "/images/Patricks.jpeg",
  },
];
