import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Corn Cultivation",
    slug: "corn-cultivation",
    imageUrl: "/images/corn.webp",
    description:
      "Our corn cultivation project focuses on sustainable farming techniques...",
    descriptionFile: "/descriptions/corn-cultivation.txt",
    videoUrl: "/videos/corn.mp4",
  },
  {
    title: "Greenhouse Farming",
    slug: "greenhouse-farming",
    imageUrl: "/images/greenhouse.webp",
    description: "Greenhouse farming allows us to grow crops year-round...",
    fullDescription: `Greenhouse farming enables consistent crop production regardless of climate.`,
    videoUrl: "/videos/greenhouse.mp4",
  },
  {
    title: "Soybean Production",
    slug: "soybean-production",
    imageUrl: "/images/soybean.webp",
    description:
      "This project supports the expansion of soybean farming as a versatile, protein-rich crop.",
    fullDescription: `Our soybean production initiative promotes the cultivation of this highly nutritious and economically valuable legume. We work with farmers to adopt best practices in crop rotation, pest control, and harvesting techniques. This project not only enhances soil health but also increases income for local growers by providing access to sustainable markets and training in value-added processing.`,
    videoUrl: "/videos/soybean.mp4",
  },
];
