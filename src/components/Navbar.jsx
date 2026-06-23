import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex justify-between items-center shadow-sm">
      <Link
        to="/"
        className="text-2xl font-black text-slate-900 tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
      >
        Priscillia<span className="text-blue-700"> Brucker</span>
      </Link>

      <div className="flex items-center gap-8 text-base font-bold text-slate-700">
        <button
          onClick={() => handleScroll("accueil")}
          className="cursor-pointer hover:text-blue-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          À propos
        </button>
        <button
          onClick={() => handleScroll("projets")}
          className="cursor-pointer hover:text-blue-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          Projets
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="cursor-pointer hover:text-blue-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
