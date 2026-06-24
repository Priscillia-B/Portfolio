import { useTypewriter } from "../hooks/useTypewriter";
import CV from "../assets/CV_Priscillia_Brucker.pdf";
import ProfileImage from "../assets/introduction/priscillia.jpg";

function Introduction() {
  const typedText = useTypewriter("le développement d'applications", 70);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center min-h-[80vh]">
      <div className="md:col-span-7">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 shadow-sm">
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
            <span className="animate-pulse text-rose-500">|</span>
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
          Étudiante en fin de BUT Informatique, je me passionne pour le
          développement logiciel. Mon{" "}
          <strong className="text-slate-800 dark:text-slate-200 border-b-2 border-rose-200 dark:border-rose-900">
            alternance à la DGFiP
          </strong>{" "}
          a confirmé mon envie de poursuivre dans cette voie et j’intègre une
          école d’ingénieur pour continuer à progresser et renforcer mes
          compétences.
        </p>
        <div className="flex flex-wrap gap-4 pt-8">
          <button
            onClick={() =>
              document
                .getElementById("projets")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer px-8 py-3.5 bg-slate-900 dark:bg-blue-600 hover:bg-rose-500 dark:hover:bg-rose-500 text-white font-bold rounded-xl transition-colors duration-300 text-sm"
          >
            Découvrir mes projets
          </button>

          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-500 transition-colors duration-300 text-sm"
          >
            Consulter mon CV
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-400 to-rose-300 opacity-20 blur-3xl"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
            <img
              src={ProfileImage}
              alt="Priscillia Brucker"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
