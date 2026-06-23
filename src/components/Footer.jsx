function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm font-bold text-slate-800">
          &copy; {currentYear} Priscillia Brucker. Tous droits réservés.
        </p>
        <p className="text-xs text-slate-500 font-medium tracking-wide">
          Réalisé avec React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
