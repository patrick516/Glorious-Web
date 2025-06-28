import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projectData";
import type { Project } from "../types/project";

function ProjectDetails() {
  const { slug } = useParams();
  const project: Project | undefined = projects.find(
    (p: Project) => p.slug === slug
  );
  const [fileContent, setFileContent] = useState<string | null>(null);

  useEffect(() => {
    if (project?.descriptionFile) {
      fetch(project.descriptionFile)
        .then((res) => res.text())
        .then((text) => setFileContent(text))
        .catch(() => setFileContent("Failed to load project document."));
    }
  }, [project]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-4xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>

      {project.videoUrl && (
        <video
          className="w-full mb-6 rounded-lg"
          controls
          src={project.videoUrl}
        />
      )}
      {fileContent ? (
        <p className="text-left whitespace-pre-line">{fileContent}</p>
      ) : project.fullDescription ? (
        <p className="text-left whitespace-pre-line">
          {project.fullDescription}
        </p>
      ) : (
        <p className="italic text-gray-500">
          No detailed description available.
        </p>
      )}
    </div>
  );
}

export default ProjectDetails;
