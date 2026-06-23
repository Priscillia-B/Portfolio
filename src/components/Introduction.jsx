import { useTypewriter } from "../hooks/useTypewriter";

function Introduction() {
  const typedText = useTypewriter([
    "Le développement d'Applications",
    "Le football",
  ]);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center min-h-[85vh]">
      <div className="md:col-span-7">
        <div className="inline-flex items-center px-3 py-1.5 bg-slate-50 dark:bg-slate-800/50 text-blue-950 dark:text-blue-300 text-[11px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700/50 border-l-4 border-l-blue-800 dark:border-l-blue-500 cursor-default shadow-sm transition-colors">
          Future Ingénieure
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
          Passionnée par <br />
          <span className="text-blue-700 dark:text-blue-500 inline-block min-h-[1.5em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium transition-colors">
          Bientôt diplômée en informatique, je conjugue rigueur technique et
          créativité. Actuellement en{" "}
          <strong className="text-slate-800 dark:text-slate-200 font-bold">
            alternance à la DGFIP
          </strong>
          , je façonne au quotidien des solutions logicielles durables avec une
          ambition claire : intégrer une école d'ingénieur pour pousser plus
          loin ma passion du code.
        </p>

        <div className="flex flex-wrap gap-5 pt-8">
          <button
            onClick={() =>
              document
                .getElementById("projets")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm tracking-wide"
          >
            Découvrir mes projets
          </button>
          <a
            href="/CV_Priscillia_Brucker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded border border-slate-300 dark:border-slate-700 hover:border-blue-700 dark:hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-sm tracking-wide shadow-sm"
          >
            Consulter mon CV
          </a>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 rounded-full bg-linear-to-br from-blue-700 via-blue-500 to-sky-300 opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"></div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-xl bg-slate-100 dark:bg-slate-800 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium text-sm transition-colors">
              [ Emplacement Photo ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
