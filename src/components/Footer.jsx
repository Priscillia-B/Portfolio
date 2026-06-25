function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 py-10 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center justify-center gap-3 text-center">
        <div className="h-px w-24 bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-4"></div>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-300 transition-colors">
          &copy; {currentYear} Priscillia Brucker. Tous droits réservés.
        </p>
        <p
          className="text-xs text-slate-500 font-medium tracking-widest uppercase transition-colors dark:text-slate-400
"
        >
          Réalisé avec React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
