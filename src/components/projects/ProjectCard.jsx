import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-slate-800/50 shadow-md dark:shadow-none dark:border dark:border-slate-700/50 rounded-lg overflow-hidden hover:shadow-lg dark:hover:border-slate-600 transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 font-bold">
        [Image: {project.title}]
      </div>
      <div className="p-4 grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 mb-4 transition-colors line-clamp-3">
            {project.shortDescription}
          </p>
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
