const skillCategories = [
  {
    label: "Back-end",
    skills: ["Java", "Spring Boot", "API REST", "SQL"],
  },
  {
    label: "Front-end",
    skills: ["VueJS", "HTML / CSS"],
  },
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
        <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 rounded"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col">
          <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            Développeuse à la DGFiP
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            Depuis ma 3ᵉ année de BUT Informatique, j'effectue mon alternance à
            la Direction Générale des Finances Publiques, au sein de
            l'Établissement de Services Informatiques de Strasbourg. J'y
            participe au développement d'
            <strong className="text-slate-800 dark:text-slate-200">
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
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            Cette alternance m'a permis de découvrir les méthodes de travail
            d'une équipe de développement professionnelle, et les exigences de
            qualité associées à un projet utilisé en contexte réel.
          </p>

          <div className="mt-8 space-y-4">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {cat.label}
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cat.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Vers mon projet professionnel
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            DataLibrarian m'a confrontée aux enjeux de maintenabilité et
            d'accessibilité d'un code existant. Níðhöggr m'a appris à coordonner
            une équipe de 6 personnes sur une architecture multiplateforme. Mais
            c'est la DGFiP qui a donné un sens concret à ces
            apprentissages&nbsp;: contraintes de production, travail en équipe
            pérenne, exigences de qualité sur le temps long.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Ce que ces expériences ont en commun, c'est qu'elles m'ont donné
            envie d'aller plus loin dans la{" "}
            <strong className="text-slate-800 dark:text-slate-200">
              conception
            </strong>{" "}
            plutôt que de me limiter à l'exécution&nbsp;: comprendre pourquoi
            une architecture tient, pas seulement la faire fonctionner. C'est
            cette envie qui motive ma poursuite d'études au CNAM, en cycle
            ingénieur.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            C'est aussi une question d'habitude&nbsp;: le football m'a appris
            tôt qu'un bon collectif vaut mieux qu'un bon joueur isolé. Je
            retrouve ce même réflexe dans le développement&nbsp;: discuter une
            architecture avant de coder, demander une relecture, accepter qu'une
            bonne idée vienne de quelqu'un d'autre.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSkills;
