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
        className="bg-white border-t border-b border-slate-100"
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
