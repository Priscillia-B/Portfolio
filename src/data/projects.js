import strasEventLogo from "../assets/strasEvent/StrasEventLogo.png";
import web_map from "../assets/strasEvent/Web_map.png";
import web_teams from "../assets/strasEvent/Web_teams.png";
import web_add_equipments from "../assets/strasEvent/Web_add_equipments.png";
import web_timeline from "../assets/strasEvent/Web_timeline.png";
import web_pdf_project from "../assets/strasEvent/Web_pdf_project.png";
import web_pdf_planning from "../assets/strasEvent/Web_pdf_planning.png";
import web_list_project from "../assets/strasEvent/Web_list_project.png";
import mobile_map from "../assets/strasEvent/Mobile_map.png";
import mobile_route from "../assets/strasEvent/Mobile_route.png";
import mobile_import from "../assets/strasEvent/Mobile_import.png";
import mobile_add_point from "../assets/strasEvent/Mobile_add_point.png";
import mobile_planning from "../assets/strasEvent/Mobile_planning.png";
import lockScreen from "../assets/infodexInfinity/lock_screen.png";
import difficultiesScreen from "../assets/infodexInfinity/difficulties_screen.png";
import desktopScreen from "../assets/infodexInfinity/desktop.png";
import mailScreen from "../assets/infodexInfinity/mail.png";
import dataviewerScreen from "../assets/infodexInfinity/dataviewer.png";
import databaseScreen from "../assets/infodexInfinity/database.png";
import snakeLogo from "../assets/snake/snake.png";
import snake_one_obstacle from "../assets/snake/snake_one_obstacle.png";
import snake_with_keyboard from "../assets/snake/snake_with_keyboard.png";
import snake_end from "../assets/snake/end.png";
import labyrinthe_1 from "../assets/labyrinthe/labyrinthe_1.png";
import labyrinthe_2 from "../assets/labyrinthe/labyrinthe_2.png";
import labyrinthe_3 from "../assets/labyrinthe/labyrinthe_3.png";

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
    bannerImage: strasEventLogo,
    gallery: [
      web_map,
      web_list_project,
      web_teams,
      web_add_equipments,
      web_timeline,
      web_pdf_project,
      web_pdf_planning,
      mobile_map,
      mobile_route,
      mobile_import,
      mobile_add_point,
      mobile_planning
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
    bannerImage: desktopScreen,
    gallery: [
      lockScreen,
      difficultiesScreen,
      desktopScreen,
      mailScreen,
      dataviewerScreen,
      databaseScreen
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
    bannerImage: snakeLogo,
    gallery: [
      snakeLogo,
      snake_one_obstacle,
      snake_with_keyboard,
      snake_end
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
    title: "Labyrinthe",
    shortDescription: "Jeu de société axé sur l'algorithmie et la POO.",
    longDescription: "Réalisé en binôme, ce projet est une implémentation complète du jeu de plateau Labyrinthe en Java. L'application repose sur une architecture MVC (Modèle-Vue-Contrôleur) et une modélisation UML (PlantUML) intégrant divers patrons de conception (Design Patterns). Le jeu gère des parties à 4 joueurs, la génération du plateau, la distribution des objectifs, la validation des déplacements, et la mécanique de coulissement des rangées. L'interface graphique a été développée avec Java Swing.",
    technologies: [
      "Java",
      "Swing",
      "UML (PlantUML)",
    ],
    githubUrl: "https://github.com/Priscillia-B/labyrinthe",
    bannerImage: labyrinthe_1,
    gallery: [
      labyrinthe_1,
      labyrinthe_2,
      labyrinthe_3,
    ],
    keyFeatures: [
      "Architecture MVC couplée à une modélisation UML complète (PlantUML).",
      "Génération du plateau 7x7 avec placement aléatoire des tuiles et des 24 objectifs.",
      "Mécanique de coulissement des lignes/colonnes impaires avec gestion de la réapparition des joueurs éjectés.",
      "Interface graphique Java Swing interactive avec manipulation des tuiles (fusion d'images, rotation à 90°)."
    ]
  }
];