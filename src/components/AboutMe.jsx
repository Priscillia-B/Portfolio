function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div className="md:col-span-7 space-y-8">
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-blue-800/50 cursor-default hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
          Future Ingénieure
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
          Développeuse d'applications <br />
          <span className="text-blue-700 dark:text-blue-400">
            BUT Informatique
          </span>
        </h1>

        <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-5 transition-colors">
          <p>
            Je suis en 3ᵉ année de BUT Informatique à l’IUT Robert Schuman et me
            spécialise dans la conception et le développement logiciel. J’aime
            comprendre comment les choses fonctionnent, construire des
            applications et apprendre en continu, ce qui m'amène aujourd'hui à
            continuer en école d'ingénieur.
          </p>
          <p>
            Le football m’accompagne depuis mes 6 ans. Ce sport m’a appris la
            cohésion, l’entraide et la persévérance. Ce sont des valeurs que je
            retrouve naturellement dans le développement et dans les projets de
            groupe. Pour moi, réussir un projet, c’est comme gagner un match, ça
            passe par la communication et l’effort collectif.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 pt-4">
          <button
            onClick={() =>
              document
                .getElementById("projets")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm tracking-wide"
          >
            Découvrir mes projets
          </button>

          <a
            href="/CV_Priscillia_Brucker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded border border-slate-300 dark:border-slate-700 hover:border-blue-700 dark:hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-sm tracking-wide shadow-sm"
          >
            Consulter mon CV
          </a>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 rounded-full bg-linear-to-br from-blue-700 via-blue-500 to-sky-300 opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium text-sm transition-colors">
              [ Emplacement Photo ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
