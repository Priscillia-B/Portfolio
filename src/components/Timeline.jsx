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
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32">
      <div className="space-y-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Mon Parcours
        </h2>

        <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full" />
      </div>

      <div className="overflow-x-auto xl:overflow-x-visible pb-8">
        <div className="flex items-start min-w-275 xl:min-w-full pt-36 relative">
          {timelineData.map((step, i) => {
            const isLast = i === timelineData.length - 1;

            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center relative"
              >
                <div className="relative w-full h-10 flex items-center justify-center">
                  {!isLast && (
                    <div className="absolute left-1/2 right-[-50%] h-1 bg-slate-200 dark:bg-slate-700/50" />
                  )}

                  <div
                    className={`
                      rounded-full shrink-0 z-10
                      ${
                        step.current
                          ? "w-10 h-10 border-4 ring-4 ring-rose-100 dark:ring-rose-900/30"
                          : "w-7 h-7 border-[3px]"
                      }
                      ${dotStyles[step.type]}
                    `}
                  />
                </div>

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 text-center w-56 xl:w-72">
                  <span
                    className={`
                      inline-block
                      text-xs xl:text-sm
                      font-bold
                      uppercase
                      tracking-wider
                      px-3 py-1
                      rounded-lg
                      mb-2
                      ${badgeStyles[step.type]}
                    `}
                  >
                    {step.label}
                  </span>

                  <span className="block text-sm xl:text-base font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {step.date}
                  </span>

                  {step.current && (
                    <span className="block mt-2 text-sm font-bold text-rose-600 dark:text-rose-400">
                      Aujourd'hui
                    </span>
                  )}
                </div>

                <div className="mt-10 text-center px-4 xl:px-6 rounded-xl">
                  <h3 className="text-lg xl:text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>

                  {step.overlap && (
                    <span className="block mt-3 text-sm font-medium italic text-blue-600 dark:text-blue-400">
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
