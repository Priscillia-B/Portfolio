function Timeline() {
  const steps = [
    {
      date: "2023 - 2026",
      title: "BUT Informatique",
      desc: "IUT Robert Schuman : cursus axé sur la conception logicielle et le développement agile.",
    },
    {
      date: "2025 (2 mois)",
      title: "Stage DGFIP",
      desc: "Immersion technique au sein de la DGFIP.",
    },
    {
      date: "2025 - 2027",
      title: "Alternance DGFIP",
      desc: "Développeuse d'applications : Java, SQL, automatisation et documentation via Obsidian.",
    },
    {
      date: "2026 - 2029",
      title: "Ingénieur (CNAM/CEA)",
      desc: "Formation ingénieur en partenariat avec la Collectivité Européenne d'Alsace.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Mon Parcours
        </h2>
        <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">
              {step.date}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
