function TechStack() {
  const stacks = ["React", "Tailwind CSS", "Java", "SQL", "Git", "Obsidian"];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Ma Stack Technique
          </h2>
          <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 rounded"></div>
        </div>
        <div className="flex flex-wrap gap-4">
          {stacks.map((tech) => (
            <span
              key={tech}
              className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-medium text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
