const skillCategories = [
  { label: "Back-end", skills: ["Java", "Spring Boot", "API REST", "SQL"] },
  { label: "Front-end", skills: ["Vue.JS", "HTML / CSS"] },
  {
    label: "Outils & méthodes",
    skills: [
      "GitLab",
      "Jenkins",
      "Swagger",
      "SCRUM",
      "Eclipse",
      "Jira",
      "Confluence",
    ],
  },
];

const keyMissions = [
  "Évolutions back-end sur Opsidian (Java / Spring Boot)",
  "Conception et documentation d'API REST",
  "Développement d'interfaces avec Vue.JS et le DSFR (Système de Design de l'État)",
  "Participation à l'évolution du modèle de données",
];

function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Expérience
        </h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-rose-500 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl shadow-md p-8 flex flex-col border border-transparent dark:border-slate-700/50">
          <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            Développeuse à la DGFiP
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-500 leading-relaxed">
            Depuis ma 3ᵉ année de BUT Informatique, j’évolue au sein de la
            Direction Générale des Finances Publiques (DGFiP). J’y ai d’abord
            réalisé un stage en développement informatique avant de poursuivre
            en alternance. Cette continuité m’a permis de découvrir
            progressivement le fonctionnement d’un projet professionnel et de
            gagner en responsabilités au fil du temps.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-500 leading-relaxed">
            Je participe aujourd’hui au développement d’{" "}
            <strong className="text-slate-800 dark:text-slate-200 border-b border-rose-200 dark:border-rose-800">
              Opsidian
            </strong>{" "}
            , une application interne de cartographie des applications du cloud
            de l’État. Cette expérience me permet d’appliquer les connaissances
            acquises à l’IUT sur un projet avec des besoins utilisateurs réels,
            tout en découvrant les exigences de qualité, de maintenabilité et de
            collaboration propres aux projets utilisés en production.
          </p>

          <ul className="mt-6 space-y-3">
            {keyMissions.map((mission) => (
              <li
                key={mission}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-500"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
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
          <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            Vers mon projet professionnel
          </h3>

          <p className="mt-6 text-slate-600 dark:text-slate-500 leading-relaxed">
            Au fil de mes projets universitaires et de mes expériences en
            entreprise, j’ai découvert que ce qui me motive le plus est de
            participer à la construction d’applications utiles, tout en
            comprenant les choix techniques qui se cachent derrière leur
            conception.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-500 leading-relaxed">
            Les projets réalisés à l’IUT m’ont permis d’explorer différentes
            facettes du développement logiciel. Que ce soit avec DataLibrarian,
            un jeu sérieux conçu pour faire découvrir le métier de Data
            Librarian ou avec Níðhöggr, qui a constitué l'un des projets les
            plus complexe en cours, j’ai appris à transformer des idées en
            solutions concrètes, à collaborer avec d’autres développeurs
            étudiants et à m’adapter à des besoins.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-500 leading-relaxed">
            Mon expérience à la DGFiP a ensuite apporté une dimension plus
            professionnelle à ces apprentissages. J’y ai découvert le travail
            sur une application utilisée dans un environnement réel, avec des
            contraintes de qualité, de maintenance et de collaboration qui
            dépassent le cadre académique.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-500 leading-relaxed">
            Aujourd’hui, mon objectif est de poursuivre dans le domaine du
            développement logiciel tout en approfondissant mes compétences en
            conception et en architecture applicative. C’est cette volonté
            d’apprendre et d’évoluer qui m’a conduite à poursuivre mes études en
            école d’ingénieur au CNAM, en parallèle de ma future alternance.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-500 leading-relaxed">
            Cette nouvelle étape me permettra également de découvrir
            progressivement des missions plus orientées vers la gestion et le
            pilotage de projets. Au fil de mon alternance, je serai amenée à
            prendre davantage de responsabilités, avec une dimension de cheffe
            de projet qui se développera progressivement. C’est un défi qui me
            sort de ma zone de confort, mais qui représente aussi une excellente
            opportunité de progresser, aussi bien sur le plan technique que dans
            la coordination d’équipes et la communication autour d’un projet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
