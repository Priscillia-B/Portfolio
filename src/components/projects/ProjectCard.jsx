function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        <a
          href={`/project/${project.id}`}
          className="text-blue-500 hover:underline"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
