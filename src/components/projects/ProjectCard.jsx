import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const visibleTechs = project.technologies.slice(0, 3);
  const remaining = project.technologies.length - visibleTechs.length;

  return (
    <div className="bg-white dark:bg-slate-800/80 shadow-md dark:shadow-none rounded-lg overflow-hidden dark:border dark:border-slate-700/50 hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-colors duration-300 flex flex-col h-full">
      <div className="w-full h-48 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 font-semibold px-4 text-center">
        {project.title}
      </div>

      <div className="p-6 grow flex flex-col justify-between bg-white dark:bg-slate-800">
        <div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white hover:text-rose-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {visibleTechs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 text-xs font-medium text-slate-400">
                +{remaining}
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="text-blue-600 dark:text-blue-400 hover:text-rose-500 dark:hover:text-rose-400 font-bold transition-colors inline-block mt-auto w-fit"
        >
          Voir le projet 
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
