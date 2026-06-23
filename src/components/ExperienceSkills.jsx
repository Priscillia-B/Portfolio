const skillCategories = [
  { label: "Back-end", skills: ["Java", "Spring Boot", "API REST", "SQL"] },
  { label: "Front-end", skills: ["VueJS", "HTML / CSS"] },
  {
    label: "Outils & méthodes",
    skills: ["GitLab", "Docker", "Swagger", "SCRUM", "Eclipse"],
  },
];

const keyMissions = [
  "Évolutions back-end sur Opsidian (Java / Spring Boot)",
  "Conception et documentation d'API REST",
  "Développement d'interfaces avec VueJS et le DSFR",
  "Participation à l'évolution du modèle de données",
];

function ExperienceSkills() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Expérience & compétences
        </h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl shadow-md p-8 flex flex-col border border-transparent dark:border-slate-700/50">
          <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            Développeuse à la DGFiP
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            Depuis ma 3ᵉ année de BUT Informatique, j'effectue mon alternance à
            la Direction Générale des Finances Publiques. J'y participe au
            développement d'
            <strong className="text-slate-800 dark:text-slate-200 border-b border-rose-200 dark:border-rose-800">
              Opsidian
            </strong>
            , une application interne de cartographie des applications du cloud
            de l'État.
          </p>

          <ul className="mt-6 space-y-3">
            {keyMissions.map((mission) => (
              <li
                key={mission}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {cat.label}
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cat.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/80 rounded-2xl shadow-md p-8 flex flex-col border border-transparent dark:border-slate-700/50">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Vers mon projet professionnel
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            DataLibrarian m'a confrontée aux enjeux de maintenabilité. Níðhöggr
            m'a appris à coordonner une équipe de 6 personnes. Mais c'est la
            DGFiP qui a donné un sens concret à ces apprentissages : contraintes
            de production, travail en équipe pérenne, exigences de qualité sur
            le temps long.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Ce que ces expériences ont en commun, c'est qu'elles m'ont donné
            envie d'aller plus loin dans la{" "}
            <strong className="text-slate-800 dark:text-slate-200">
              conception
            </strong>{" "}
            plutôt que de me limiter à l'exécution : comprendre pourquoi une
            architecture tient, pas seulement la faire fonctionner.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            C'est aussi une question d'habitude : le football m'a appris tôt
            qu'un bon collectif vaut mieux qu'un bon joueur isolé. Je retrouve
            ce même réflexe dans le développement : discuter une architecture
            avant de coder, demander une relecture, accepter qu'une bonne idée
            vienne de quelqu'un d'autre.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSkills;
