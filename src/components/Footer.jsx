function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/50 py-8 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm font-bold text-slate-800 dark:text-slate-300 transition-colors">
          &copy; {currentYear} Priscillia Brucker. Tous droits réservés.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wide transition-colors">
          Réalisé avec React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
