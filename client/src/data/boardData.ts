export interface BoardMember {
  id: number;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  contribution: string;
  photoPath: string;
  quote?: string;
  expertiseAreas?: string[];
  organization?: string;
  linkedin?: string;
}

export const boardData: BoardMember[] = [
  {
    id: 1,
    name: "Dr. Amina Yusuf",
    role: "Board Chair",
    credentials: "PhD in Agricultural Sciences, 20+ years experience",
    bio: "Dr. Yusuf is a renowned expert in regenerative agriculture and rural development. Her leadership has shaped agricultural policy across East Africa.",
    contribution:
      "Leads strategic planning and governance, ensuring sustainable growth.",
    photoPath: "/images/Patrick.png",
    quote: "We don’t just feed people — we empower them.",
    expertiseAreas: ["Strategy", "Agriculture Policy"],
    organization: "East African Agri Council",
    linkedin: "https://linkedin.com/in/aminayusuf",
  },
  {
    id: 2,
    name: "Mr. John Mwangi",
    role: "Advisor",
    credentials: "MBA, former CEO of AgriTech Corp.",
    bio: "Mr. Mwangi brings three decades of experience in agricultural technology innovation and private sector partnerships.",
    contribution: "Provides expert advice on innovation and market expansion.",
    photoPath: "/images/Patrick.png",
    expertiseAreas: ["Innovation", "Technology", "Private Sector"],
    organization: "AgriTech Innovations",
    linkedin: "https://linkedin.com/in/johnmwangi",
  },
  {
    id: 3,
    name: "Ms. Fatima Abdullahi",
    role: "Advisor",
    credentials: "Environmental Policy Specialist",
    bio: "Fatima has led climate resilience initiatives across Sub-Saharan Africa. Her work bridges policy and grassroots implementation.",
    contribution: "Guides sustainability and environmental impact strategies.",
    photoPath: "/images/Patrick.png",
    quote: "True sustainability is rooted in local wisdom.",
    expertiseAreas: ["Climate Policy", "Sustainability"],
    organization: "GreenAfrica Network",
  },
];
