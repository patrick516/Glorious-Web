type Project = {
  title: string;
  imageUrl: string;
  description: string;
};

type Props = {
  projects: Project[];
};

function ProjectGallery({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded shadow overflow-hidden hover:shadow-md transition"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-primary mb-2">
              {project.title}
            </h4>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGallery;
