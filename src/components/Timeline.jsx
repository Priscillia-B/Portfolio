import { timelineData } from "../data/timeline";

const badgeStyles = {
  formation: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  stage: "bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300",
  alternance:
    "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

const dotStyles = {
  formation: "bg-blue-500 border-white dark:border-slate-900",
  stage: "bg-teal-500 border-white dark:border-slate-900",
  alternance: "bg-rose-500 border-white dark:border-slate-900",
};

function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
      <div className="space-y-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Mon Parcours
        </h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full" />
      </div>

      <div className="overflow-x-auto pb-8">
        <div className="flex items-start min-w-200 pt-32 relative">
          {timelineData.map((step, i) => {
            const isLast = i === timelineData.length - 1;

            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center relative"
              >
                {!isLast && (
                  <div className="absolute top-2 left-1/2 right-[-50%] h-1 bg-slate-200 dark:bg-slate-700/50" />
                )}

                <div className="absolute -top-28 left-1/2 -translate-x-1/2 text-center w-56">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg mb-2 ${badgeStyles[step.type]}`}
                  >
                    {step.label}
                  </span>
                  <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {step.date}
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-4 shrink-0 z-10 ${dotStyles[step.type]}`}
                />

                <div className="mt-8 text-center px-4 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
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
