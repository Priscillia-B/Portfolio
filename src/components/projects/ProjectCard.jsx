import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const visibleTechs = project.technologies.slice(0, 3);
  const remaining = project.technologies.length - visibleTechs.length;

  return (
    <div className="bg-white dark:bg-slate-800/50 shadow-md dark:shadow-none dark:border dark:border-slate-700/50 rounded-lg overflow-hidden hover:shadow-lg dark:hover:border-slate-600 transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 font-semibold px-4 text-center">
        {project.title}
      </div>

      <div className="p-5 grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 mb-4 transition-colors line-clamp-3">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {visibleTechs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-400 dark:text-slate-500">
                +{remaining}
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="text-blue-500 dark:text-blue-400 hover:underline font-medium transition-colors inline-block mt-auto"
        >
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
