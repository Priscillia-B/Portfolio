import { projectsData } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsGallery() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Mes Projets
        </h2>
        <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGallery;
