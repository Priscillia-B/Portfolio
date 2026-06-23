import { projectsData } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsGallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white transition-colors duration-300">
        Mes projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGallery;
