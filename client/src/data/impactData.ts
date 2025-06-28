export interface ImpactStat {
  id: number;
  stat: string; // e.g. "10,000+ farmers trained"
  description: string; // short explanation
}

export interface TransformationStory {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  story: string;
}

export interface Testimonial {
  id: number;
  farmerName: string;
  quote: string;
  photo: string;
}

export const impactStats: ImpactStat[] = [
  { id: 1, stat: "10,000+", description: "Farmers trained" },
  { id: 2, stat: "500", description: "Villages reached" },
  { id: 3, stat: "75%", description: "Increase in crop yields" },
];

export const transformationStories: TransformationStory[] = [
  {
    id: 1,
    title: "Oromia Region Soil Revival",
    beforeImage: "/images/before-soil.jpg",
    afterImage: "/images/after-soil.jpg",
    story:
      "Restored degraded soil using organic compost, boosting yields by 60%.",
  },
  // Add more stories here
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    farmerName: "Amina Tesfaye",
    quote:
      "Thanks to the training, my farm is thriving and my family is food secure.",
    photo: "/images/farmer.webp",
  },
  {
    id: 2,
    farmerName: "John Okello",
    quote: "The new irrigation techniques changed everything for us!",
    photo: "/images/farmer.webp",
  },
  // Add more testimonials here
];
