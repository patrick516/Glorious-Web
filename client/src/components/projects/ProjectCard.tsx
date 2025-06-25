import type { Project } from "@/types/project";
import { Link } from "react-router-dom";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg">
      {project.videoUrl ? (
        <video
          src={project.videoUrl}
          controls
          className="object-cover w-full h-48"
        />
      ) : (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-48"
        />
      )}
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-[#143C2F]">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{project.description}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#143C2F] hover:bg-[#0f3026] rounded"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
