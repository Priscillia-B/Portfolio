import IUT from "../assets/aboutMe/IUT.jpg";
import DGFiP from "../assets/aboutMe/DGFIP.jpg";
import CNAM from "../assets/aboutMe/CNAM.png";
import CEA from "../assets/aboutMe/CEA.jpg";
import Football from "../assets/aboutMe/foot.webp";

function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
              À propos de moi
            </h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full"></div>
          </div>

          <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 transition-colors">
            <p>
              Je suis en 3ᵉ année de BUT Informatique à l’IUT Robert Schuman et
              en alternance à la Direction Générale des Finances Publiques. Je
              me spécialise dans la conception et le développement logiciel.
              J’aime comprendre comment les choses fonctionnent, construire des
              applications et apprendre en continu. C’est ce qui m’amène
              aujourd’hui à poursuivre en école d’ingénieur au CNAM à la
              rentrée, toujours en alternance.
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

        <div className="md:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
          <div className="h-28 sm:h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden relative group">
            <img
              src={IUT}
              alt="IUT Robert Schuman"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm">IUT</span>
            </div>
          </div>

          <div className="h-28 sm:h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden relative group">
            <img
              src={DGFiP}
              alt="DGFiP"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm">DGFiP</span>
            </div>
          </div>

          <div className="h-28 sm:h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden relative group">
            <img
              src={CNAM}
              alt="CNAM"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm">CNAM</span>
            </div>
          </div>

          <div className="h-28 sm:h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden relative group">
            <img
              src={CEA}
              alt="CEA"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm">CEA</span>
            </div>
          </div>

          <div className="col-span-2 flex justify-center">
            <div className="h-40 w-full max-w-47.5 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden relative group">
              <img
                src={Football}
                alt="Football"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-widest uppercase text-sm">
                  Football
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
