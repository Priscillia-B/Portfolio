import AboutMe from "../components/AboutMe";
import ProjectsGallery from "../components/projects/ProjectsGallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <section id="accueil">
        <AboutMe />
      </section>

      <section
        id="projets"
        className="bg-white dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-300"
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
