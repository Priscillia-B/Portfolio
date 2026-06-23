function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
              À propos de moi
            </h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full"></div>
          </div>

          <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 transition-colors">
            <p>
              Je suis en 3ᵉ année de BUT Informatique à l’IUT Robert Schuman et
              me spécialise dans la conception et le développement logiciel.
              J’aime comprendre comment les choses fonctionnent, construire des
              applications et apprendre en continu, ce qui m'amène aujourd'hui à
              continuer en école d'ingénieur.
            </p>
            <p>
              Le football m’accompagne depuis mes 6 ans. Ce sport m’a appris la
              cohésion, l’entraide et la persévérance. Ce sont des valeurs que
              je retrouve naturellement dans le développement et dans les
              projets de groupe. Pour moi, réussir un projet, c’est comme gagner
              un match, ça passe par la communication et l’effort collectif.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 gap-4">
          <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 shadow-md">
            [Image 1]
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 h-40 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 shadow-md">
              [Image 2]
            </div>
            <div className="w-1/2 h-40 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 shadow-md">
              [Image 3]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
