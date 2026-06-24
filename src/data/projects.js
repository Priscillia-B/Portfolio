export const projectsData = [
  {
    id: "strasevent",
    title: "StrasEvent",
    shortDescription: "Écosystème complet (API, Web & Mobile) de supervision et de sécurisation de manifestations sportives.",
    longDescription:
      "Conception et développement d’une solution multiplateforme destinée à l’Eurométropole de Strasbourg pour piloter la logistique de sécurité et le déploiement d’équipements sur le terrain. L’écosystème comprend une API REST (Express/Prisma), une application de bureau pour la gestion complète des projets (React/Vite) et une application mobile terrain (React Native/Expo) pensée pour les agents, le tout entièrement fonctionnelle en mode hors‑ligne. Le projet a été réalisé en équipe de 6 personnes, en sprints de deux semaines, avec une évolution du cahier des charges à chaque fin de sprint.",
    technologies: [
      "React",
      "React Native",
      "Express.js",
      "Prisma ORM",
      "SQLite",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "MapLibre",
      "Jest",
      "Supertest",
      "Playwright",
      "GitLab CI/CD",
      "Swagger / OpenAPI"
    ],
    githubUrl: "https://github.com/Priscillia-B/Stras_Code",
    bannerImage: "/strasEvent/StrasEventLogo.png",
    gallery: [
      "/strasEvent/Web_map.png",
      "/strasEvent/Web_list_project.png",
      "/strasEvent/Web_teams.png",
      "/strasEvent/Web_add_equipments.png",
      "/strasEvent/Web_timeline.png",
      "/strasEvent/Web_pdf_project.png",
      "/strasEvent/Web_pdf_planning.png",
      "/strasEvent/Mobile_map.png",
      "/strasEvent/Mobile_route.png",
      "/strasEvent/Mobile_import.png",
      "/strasEvent/Mobile_add_point.png",
      "/strasEvent/Mobile_planning.png"
    ],
    keyFeatures: [
      "Gestion d'équipe en méthode Agile SCRUM (6 personnes) avec intégration continue GitLab CI/CD.",
      "Architecture API REST Express + Prisma avec base SQLite, documentée avec un Swagger.",
      "Application de bureau (React + Vite) avec une carte interactive (React-Leaflet, tuiles OSM et HERE Maps) pour placer les équipements (barrières, véhicules, parcours) à des heures précises associés à des équipes (gestion de personnels). Nous pouvons visualiser un planning d'un projet et des équipes et exporter toutes les données (Excel et PDF).",
      "Application Mobile terrain (React Native + Expo + TypeScript) dotée d'une cartographie hors-ligne (MapLibre) et géolocalisation GPS.ermet aux agents de prendre des photos des zones d’intervention, de suivre leur planning et d’être guidés vers les points à équiper.",
      "Système de synchronisation entre les applications via scan de QR codes.",
    ]
  },
  {
    id: "infodex-infinity",
    title: "Infodex-Infinity",
    shortDescription: "Jeu sérieux immersif simulant un système d'exploitation pour faire découvrir le métier de Data Librarian.",
    longDescription: "Développement d'un jeu sérieux plongeant le joueur dans la peau d'un gestionnaire de données à travers un OS fictif (DataLibrarian OS). Le joueur doit jongler entre plusieurs fausses applications (JaiMail, Miracle DB, DataViewer) pour traiter les demandes d'ajout de données des chercheurs. L'expérience intègre des mécaniques de gestion : maintenir la satisfaction en respectant les délais, refuser et justifier les erreurs pour faire monter les chercheurs en compétence et dispenser des formations stratégiques.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Electron"
    ],
    githubUrl: "https://github.com/Priscillia-B/Infodex-Infinity-group",
    bannerImage: "/infodex-infinity/desktop.png",
    gallery: [
      "/infodex-infinity/lock_screen.png",
      "/infodex-infinity/difficulties_screen.png",
      "/infodex-infinity/desktop.png",
      "/infodex-infinity/mail.png",
      "/infodex-infinity/dataviewer.png",
      "/infodex-infinity/database.png",
    ],
    keyFeatures: [
      "Création d'une interface immersive reproduisant un bureau Windows avec un écran de connexion gérant la difficulté.",
      "Développement de fausses applications intégrées (client mail JaiMail, gestionnaire Miracle DB, outil de correction DataViewer).",
      "Système de progression dynamique basé sur la satisfaction, les délais et le niveau de compétence des chercheurs virtuels.",
      "Objectif pédagogique : sensibiliser aux enjeux de l'intégrité des données et de la formation continue."
    ]
  },
  {
    id: "snake",
    title: "Snake",
    shortDescription: "Implémentation du jeu Snake en assembleur.",
    longDescription: "Réalisé en binôme, ce projet consistait à développer le jeu Snake en langage Assembleur MIPS32 sur l'émulateur MARS. Le développement a nécessité une gestion de la mémoire (via des tableaux statiques pour les coordonnées du serpent) et des périphériques d'entrée/sortie (clavier et affichage bitmap). Le jeu intègre une difficulté croissante avec l'apparition d'un nouvel obstacle à chaque fois que le serpent se nourrit, ainsi qu'une détection des collisions aux bords de la fenêtre ainsi qu'aux obstacles pour déclencher la fin de partie.",
    technologies: [
      "Assembleur MIPS32",
      "Émulateur MARS",
    ],
    githubUrl: "https://github.com/Priscillia-B/Snake",
    bannerImage: "/snake/snake.png",
    gallery: [
      "/snake/snake.png",
      "/snake/snake_one_obstacle.png",
      "/snake/snake_with_keyboard.png",
      "/snake/end.png"
    ],
    keyFeatures: [
      "Lecture directe des entrées directionnelles (Z, Q, S, D) via les interruptions clavier.",
      "Mise à jour en temps réel des coordonnées du serpent via des tableaux X et Y en mémoire.",
      "Logique de croissance du serpent et génération aléatoire de la nourriture et des obstacles.",
      "Détection des conditions de défaite (collisions avec les bordures, les obstacles ou son propre corps)."
    ]
  },
  {
    id: "labyrinthe",
    title: "Labyrinthe (Java)",
    shortDescription: "Jeu de société axé sur l'algorithmie et la POO.",
    longDescription: "Développement complet du jeu de société Labyrinthe. Le projet se concentre sur une forte architecture orientée objet et des algorithmes complexes pour le déplacement et la modification dynamique des tuiles du plateau.",
    technologies: ["Java", "Swing"],
    githubUrl: "https://github.com/Priscillia-B/labyrinthe",
    bannerImage: "/labyrinthe-banner.jpg",
    gallery: [
      "/labyrinthe-1.jpg",
      "/labyrinthe-2.jpg"
    ],
    keyFeatures: [
      "Modélisation rigoureuse en programmation orientée objet (POO)",
      "Interface graphique interactive conçue avec Java Swing",
      "Algorithme de calcul des chemins et de coulissement des rangées"
    ]
  }
];