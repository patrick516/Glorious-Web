export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface HistoryData {
  founding: {
    year: number;
    founder: string;
    reason: string;
    quote: string;
  };
  milestones: Milestone[];
  evolution: string[];
  images: {
    description: string;
    path?: string; // optional for now
  }[];
}

export const historyData: HistoryData = {
  founding: {
    year: 2011,
    founder: "Dr. Elias Kebede",
    reason:
      "In response to devastating soil degradation and unsustainable farming practices in East Africa.",
    quote:
      "We were tired of seeing our farmers working harder but producing less. We knew we had to change the system, not just the tools.",
  },
  milestones: [
    {
      year: 2012,
      title: "First Community Training",
      description: "Training in agroecological methods in Oromia, Ethiopia.",
    },
    {
      year: 2014,
      title: "ICRAF Partnership",
      description: "Partnered with International Agroforestry Centre.",
    },
    {
      year: 2015,
      title: "Tree Program Launched",
      description: "Over 50,000 saplings planted.",
    },
    {
      year: 2018,
      title: "Global Farming Award",
      description: "Won the Global Regenerative Farming Award.",
    },
    {
      year: 2020,
      title: "Million Farm Transformation",
      description: "Flagship initiative launched for large-scale impact.",
    },
    {
      year: 2023,
      title: "Clinton Global Recognition",
      description: "Recognized for climate-resilient agriculture efforts.",
    },
  ],
  evolution: [
    "Started with soil regeneration via composting and crop rotation.",
    "Introduced integrated agroforestry systems in 2016.",
    "Expanded to include biochar enrichment and peer learning hubs.",
    "Now operates a holistic model combining ecology and economics.",
  ],
  images: [
    { description: "Founding team in 2011 beside barren land" },
    { description: "The same land in 2023, now lush and productive" },
    { description: "Timeline graphic from 2011 to 2023 with icons" },
    { description: "Community celebration during Million Farm kickoff" },
    { description: "Women-led cooperative composting training, 2014" },
  ],
};
