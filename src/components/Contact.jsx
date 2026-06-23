function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full tracking-wide uppercase transition-colors">
          Contactez-moi
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
          Je suis ouverte aux opportunités et aux collaborations !
        </h1>
      </div>
    </div>
  );
}

export default Contact;