export const projectsData = [
  {
    id: "strasevent",
    title: "StrasEvent",
    shortDescription: "Écosystème complet (API, Web & Mobile) de supervision et de sécurisation de manifestations sportives.",
    longDescription: "Conception et développement d'une solution multiplateforme destinée à l'Eurométropole de Strasbourg pour piloter la logistique de sécurité et le déploiement d'équipements sur le terrain. L'écosystème comprend une API REST (Express/Prisma), une application de bureau pour gérer tous les projets et leurs détails (React/Vite) et une application mobile terrain (React Native/Expo) pour les agents, le tout en mode hors-ligne. Ce projet a été réalisé en équipe de 6 personnes sous forme de sprint de 2 semaines, où à chaque fin de sprint, nous avions la suite du cahier des charges.",
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
      "Application de bureau (React + Vite) avec une carte interactive (React-Leaflet, tuiles OSM et HERE Maps) pour placer les équipements (barrières, véhicule) à des heures précises associés à des équipes (gestion de personnels). Nous pouvons visualiser un planning d'un projet et des équipes et exporter toutes les données (Excel et PDF).",
      "Application Mobile terrain (React Native + Expo + TypeScript) dotée d'une cartographie 100% hors-ligne (MapLibre) et géolocalisation GPS. Utile pour les agents afin de prendre en photo les rues où devront être les équipements, de suivre leur planning et d'être guider aux points.",
      "Système de synchronisation entre les applications via scan de QR codes.",
    ]
  },
  {
    id: "datalibrarian",
    title: "T3 - DataLibrarian",
    shortDescription: "Site Web et audit agile orienté maintenabilité et refactoring.",
    longDescription: "Développement en sprints courts avec un focus prononcé sur l'audit de maintenabilité, l'accessibilité et le refactoring de la dette technique sur une reprise de code tiers, tout en simulant des interactions directes avec des clients.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Priscillia-B/datalibrarian", // Ajoute ton vrai lien
    bannerImage: "/datalibrarian-banner.jpg",
    gallery: [
      "/datalibrarian-1.jpg",
      "/datalibrarian-2.jpg"
    ],
    keyFeatures: [
      "Audit complet d'accessibilité (RGAA)",
      "Réduction drastique de la dette technique",
      "Présentations et revues de sprints avec clients"
    ]
  },
  {
    id: "snake",
    title: "Assembleur : Snake",
    shortDescription: "Jeu mythique développé au plus près du matériel.",
    longDescription: "Implémentation complète du jeu Snake en langage Assembleur. Ce projet a permis de comprendre en profondeur la gestion des registres, de la mémoire vidéo et des interruptions système.",
    technologies: ["Assembleur", "YAML", "Qualité logicielle"],
    githubUrl: "",
    bannerImage: "/snake-banner.jpg",
    gallery: [
      "/snake-1.jpg",
      "/snake-2.jpg"
    ],
    keyFeatures: [
      "Optimisation de l'utilisation de la mémoire et des registres",
      "Gestion directe des entrées clavier et du rafraîchissement écran",
      "Mise en place de tests de validation bas niveau"
    ]
  },
  {
    id: "labyrinthe",
    title: "Labyrinthe (Java)",
    shortDescription: "Jeu de société axé sur l'algorithmie et la POO.",
    longDescription: "Développement complet du jeu de société Labyrinthe. Le projet se concentre sur une forte architecture orientée objet et des algorithmes complexes pour le déplacement et la modification dynamique des tuiles du plateau.",
    technologies: ["Java", "Swing"],
    githubUrl: "https://github.com/Priscillia-B/labyrinthe", // Ajoute ton vrai lien
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