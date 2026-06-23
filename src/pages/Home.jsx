import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import TechStack from "../components/TechStack";
import ProjectsGallery from "../components/projects/ProjectsGallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <section id="accueil">
        <Introduction />
      </section>
      <section id="a-propos">
        <AboutMe />
      </section>
      <section id="parcours">
        <Timeline />
      </section>
      <section id="stack">
        <TechStack />
      </section>
      <section
        id="projets"
        className="bg-slate-50 dark:bg-slate-950 border-t border-b border-slate-100 dark:border-slate-800/50 transition-colors"
      >
        <ProjectsGallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
