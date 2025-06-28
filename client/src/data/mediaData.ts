export interface MediaFeature {
  id: number;
  title: string;
  type: "video" | "article" | "interview";
  source: string;
  thumbnail?: string;
  description: string;
  category: string; // e.g., "sustainability", "staff", "awards"
}

export interface MediaFeature {
  id: number;
  title: string;
  type: "video" | "article" | "interview";
  source: string; // article link or local video path
  thumbnail?: string; // optional thumbnail for video or article
  description: string;
}
export interface Award {
  id: number;
  title: string;
  year: number;
  description: string;
  imagePath: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "Global Regenerative Farming Award",
    year: 2018,
    description: "Recognized for innovative and sustainable farming methods.",
    imagePath: "/images/Patrick.png",
  },
  {
    id: 2,
    title: "Clinton Global Recognition",
    year: 2023,
    description:
      "Honored for climate-resilient agriculture across East Africa.",
    imagePath: "/images/Patrick.png",
  },
];

export const mediaFeatures: MediaFeature[] = [
  {
    id: 1,
    title: "Sustainable Farming Demo",
    type: "video",
    source: "/src/assets/videos/Home-background.mp4",
    thumbnail: "/images/Patrick.png",
    description: "Drip irrigation and composting in action.",
    category: "sustainability",
  },
  {
    id: 2,
    title: "Meet Our Staff",
    type: "video",
    source: "/src/assets/videos/Home-background.mp4",
    thumbnail: "/images/Patrick.png",
    description: "Behind-the-scenes with our field team.",
    category: "staff",
  },
  {
    id: 3,
    title: "Award Interview",
    type: "video",
    source: "/src/assets/videos/Home-background.mp4",
    thumbnail: "/images/Patrick.png",
    description: "Founder reflects on winning the Regenerative Farming Award.",
    category: "awards",
  },
];
