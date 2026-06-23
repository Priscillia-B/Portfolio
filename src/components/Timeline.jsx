import { timelineData } from "../data/timeline";

const badgeStyles = {
  formation: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  stage: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  alternance:
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
};

const dotStyles = {
  formation: "bg-blue-600 border-white dark:border-slate-900",
  stage: "bg-green-600 border-white dark:border-slate-900",
  alternance: "bg-amber-500 border-white dark:border-slate-900",
};

function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
      <div className="space-y-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Mon Parcours
        </h2>

        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 rounded" />
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex items-start min-w-250 pt-32 relative">
          {timelineData.map((step, i) => {
            const isLast = i === timelineData.length - 1;

            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center relative"
              >
                {!isLast && (
                  <div className="absolute top-0 left-1/2 right-[-50%] h-0.5 bg-slate-300 dark:bg-slate-700" />
                )}

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 text-center w-56">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-2 ${badgeStyles[step.type]}`}
                  >
                    {step.label}
                  </span>

                  <span className="block text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {step.date}
                  </span>

                  {step.current && (
                    <span className="block mt-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                      Aujourd'hui
                    </span>
                  )}
                </div>

                <div
                  className={`
                    rounded-full shrink-0 z-10 transition-all
                    border-4
                    ${
                      step.current
                        ? "w-8 h-8  shadow-xl shadow-amber-400/60 ring-4 ring-amber-200 dark:ring-amber-900"
                        : "w-5 h-5"
                    }
                    ${dotStyles[step.type]}
                  `}
                />

                <div
                  className={`
                    mt-6 text-center px-4 rounded-xl transition-all
                    ${
                      step.current
                        ? "bg-amber-100 border border-amber-300 dark:bg-amber-950/30 dark:border-amber-800 py-5 shadow-md"
                        : ""
                    }
                  `}
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>

                  {step.overlap && (
                    <span className="text-sm text-blue-600 dark:text-blue-400 italic mt-2 block">
                      {step.overlap}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
