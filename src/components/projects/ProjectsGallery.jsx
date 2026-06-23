function ProjectsGallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-8">Mes projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/path/to/project-image.jpg"
            alt="Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Nom du projet</h3>
            <p className="text-gray-600 mb-4">Description courte du projet.</p>
            <a href="#" className="text-blue-500 hover:underline">
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
