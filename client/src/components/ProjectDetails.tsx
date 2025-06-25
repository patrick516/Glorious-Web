import ProjectCard from "./projects/ProjectCard";
import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Corn Cultivation",
    slug: "corn-cultivation",
    imageUrl: "/images/corn.webp",
    description:
      "Our corn cultivation project focuses on sustainable farming techniques to produce high-yield, high-quality maize. Through improved seed varieties, soil fertility management, and modern irrigation, we aim to enhance food security and farmer income.",
    fullDescription:
      "Our corn cultivation project focuses on sustainable farming techniques to produce high-yield, high-quality maize. Through improved seed varieties, soil fertility management, and modern irrigation, we aim to enhance food security and farmer income.\n\nWe work closely with local farmers to implement best practices in:\n• Seed selection and planting techniques\n• Soil preparation and fertilization\n• Pest and disease management\n• Harvesting and post-harvest handling\n\nThis comprehensive approach has resulted in increased yields and improved farmer livelihoods across the region.",
  },
  {
    title: "Greenhouse Farming",
    slug: "greenhouse-farming",
    imageUrl: "/images/greenhouse.webp",
    description:
      "Greenhouse farming allows us to grow crops year-round while protecting them from harsh weather and pests. This project empowers farmers with climate-controlled systems that boost productivity, conserve water, and reduce chemical usage.",
    fullDescription:
      "Greenhouse farming allows us to grow crops year-round while protecting them from harsh weather and pests. This project empowers farmers with climate-controlled systems that boost productivity, conserve water, and reduce chemical usage.\n\nOur greenhouse initiative includes:\n• Installation of modern greenhouse structures\n• Training on climate control systems\n• Water-efficient irrigation methods\n• Integrated pest management\n• Market linkage support\n\nFarmers participating in this program have seen up to 300% increase in productivity while using 60% less water than traditional farming methods.",
  },
  {
    title: "Soybean Production",
    slug: "soybean-production",
    imageUrl: "/images/soybean.webp",
    description:
      "This project supports the expansion of soybean farming as a versatile, protein-rich crop. We implement best practices in crop rotation, disease management, and mechanized harvesting to improve yields and market access for local farmers.",
    fullDescription:
      "This project supports the expansion of soybean farming as a versatile, protein-rich crop. We implement best practices in crop rotation, disease management, and mechanized harvesting to improve yields and market access for local farmers.\n\nKey components of our soybean program:\n• High-yielding variety selection\n• Proper crop rotation schedules\n• Disease and pest monitoring\n• Mechanized farming techniques\n• Value chain development\n• Market access facilitation\n\nThe project has helped farmers diversify their income sources while improving soil health through nitrogen fixation.",
  },
];

function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5] text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#143C2F] mb-2">
          Our Projects
        </h2>
        <div className="h-1 w-16 bg-[#143C2F] mx-auto mb-8 rounded"></div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
