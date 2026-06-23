import { useTypewriter } from "../hooks/useTypewriter";

function Introduction() {
  const typedText = useTypewriter("le développement d'applications", 70);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center min-h-[80vh]">
      <div className="md:col-span-7">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Future ingénieure
        </div>
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Passionnée par
          <br />
          <span
            className="text-blue-700 dark:text-blue-500 inline-block min-h-[1.2em]"
            style={{ minWidth: "14ch" }}
          >
            {typedText}
            <span className="animate-pulse text-blue-700 dark:text-blue-500">
              |
            </span>
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
          Bientôt diplômée en informatique, je conjugue rigueur technique et
          créativité. Actuellement en{" "}
          <strong className="text-slate-800 dark:text-slate-200">
            alternance à la DGFiP
          </strong>
          , je participe au développement de solutions logicielles durables avec
          une ambition claire : intégrer une école d'ingénieur afin de
          poursuivre mon évolution dans le domaine du développement logiciel.
        </p>
        <div className="flex flex-wrap gap-4 pt-8">
          <button
            onClick={() =>
              document
                .getElementById("projets")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors duration-200 text-sm"
          >
            Découvrir mes projets
          </button>

          <a
            href="/CV_Priscillia_Brucker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors duration-200 text-sm"
          >
            Consulter mon CV
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/10"></div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-xl bg-slate-100 dark:bg-slate-800">
            <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium text-sm">
              <img
                src="/priscillia.jpg"
                alt="Priscillia Brucker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;