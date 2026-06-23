import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";

// Début juste pour tester
function ProjectDetail() {
  const { id } = useParams();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Projet introuvable
        </h2>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto animate-fade-in">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        ← Retour aux projets
      </Link>

      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
          {project.category}
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {project.longDescription}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;
