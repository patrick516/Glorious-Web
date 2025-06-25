export type Project = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string; // short summary
  descriptionFile?: string; // optional file path
  fullDescription?: string; // optional full text
  videoUrl?: string; // optional video path
};
