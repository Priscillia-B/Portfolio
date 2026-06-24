import { useParams } from "react-router-dom";
import { useProjectDetail } from "../hooks/useProjectDetail";

function ProjectDetail() {
  const { id } = useParams();
  const {
    project,
    currentIndex,
    setCurrentIndex,
    prevSlide,
    nextSlide,
    handleGoBack,
    onTouchHandlers,
  } = useProjectDetail(id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Projet introuvable
        </h2>
        <a
          href="/"
          onClick={handleGoBack}
          className="mt-4 text-blue-600 hover:underline"
        >
          Retour à l'accueil
        </a>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <a
        href="/"
        onClick={handleGoBack}
        className="cursor-pointer group inline-flex items-center gap-2 text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors mb-8 w-fit"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour aux projets
      </a>

      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
        {project.title}
      </h1>

      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        {project.longDescription}
      </p>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold rounded-xl transition-colors text-sm shadow-sm"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
          Voir le code
        </a>
      )}

      <div className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Technologies utilisées
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.keyFeatures?.length > 0 && (
        <div className="mt-10 mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Points clés
          </h2>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Aperçu du projet
          </h2>

          <div
            className="w-full h-64 sm:h-120 md:h-140 m-auto relative group select-none flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-inner"
            {...onTouchHandlers}
          >
            <img
              src={project.gallery[currentIndex]}
              alt={`Capture ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain pointer-events-none transition-opacity duration-300"
            />

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  aria-label="Image précédente"
                  className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 rounded-full p-2 bg-slate-900/40 hover:bg-slate-900/60 text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Image suivante"
                  className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 rounded-full p-2 bg-slate-900/40 hover:bg-slate-900/60 text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/30 px-3 py-2 rounded-full backdrop-blur-sm">
                  {project.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Aller à l'image ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-6 bg-rose-500" : "w-2 bg-white/60 hover:bg-white"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          {project.gallery.length > 1 && (
            <p className="text-center text-sm text-slate-500 mt-4 sm:hidden">
              Glissez ou utilisez le clavier pour naviguer
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
