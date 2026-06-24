import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const visibleTechs = project.technologies.slice(0, 3);
  const remaining = project.technologies.length - visibleTechs.length;

  return (
    <Link
      to={`/project/${project.id}`}
      className="bg-white dark:bg-slate-800/80 shadow-md dark:shadow-none rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-rose-500 dark:hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer"
    >
      <div className="w-full h-48 bg-slate-100 dark:bg-slate-700 relative overflow-hidden">
        {project.bannerImage ? (
          <img
            src={project.bannerImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-semibold px-4 text-center">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-6 grow flex flex-col justify-between bg-white dark:bg-slate-800">
        <div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">
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
        <span className="text-blue-600 dark:text-blue-400 group-hover:text-rose-500 dark:group-hover:text-rose-400 font-bold transition-colors inline-flex items-center gap-1.5 mt-auto w-fit">
          Voir le projet
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
