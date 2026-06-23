import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
          Projet introuvable
        </h2>
        <Link
          to="/"
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          Retour aux projets
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4 transition-colors">
          {project.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          {project.longDescription}
        </p>

        {project.githubUrl && (
          <div className="mt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
              Voir le code
              <span className="sr-only">(ouvre dans un nouvel onglet)</span>
            </a>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.keyFeatures?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Points clés
            </h2>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
