import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

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
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-5 flex justify-between items-center shadow-sm transition-colors duration-300">
      <Link
        to="/"
        className="text-2xl font-black text-slate-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
      >
        Priscillia<span className="text-blue-700 dark:text-blue-500"> Brucker</span>
      </Link>

      <div className="flex items-center gap-8 text-base font-bold text-slate-700 dark:text-slate-300">
        <button
          onClick={() => handleScroll("accueil")}
          className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          À propos
        </button>
        <button
          onClick={() => handleScroll("projets")}
          className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          Projets
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          Contact
        </button>

        {/* Bouton Toggle Dark Mode */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="cursor-pointer ml-4 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center shadow-inner"
          aria-label="Basculer le mode sombre"
        >
          {isDark ? (
            // Icône Soleil (pour repasser en mode clair)
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            // Icône Lune (pour passer en mode sombre)
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;