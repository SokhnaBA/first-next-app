// Fonction pour récupérer les films depuis l’API distante
async function getMovies() {
  try {
    const response = await fetch('https://reactnative.dev/movies.json', {
      next: { revalidate: 3600 }, 
    });
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.movies || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des films :', error);
    return [];
  }
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Mes Films Favoris</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de films recommandés
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6"></div>
        </div>

        {movies.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">🎬</span>
            </div>
            <h3 className="text-2xl text-white mb-2">Aucun film disponible</h3>
            <p className="text-gray-400">Veuillez réessayer plus tard</p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-white text-2xl font-semibold mb-2">Films Disponibles</h2>
              <p className="text-gray-400">
                {movies.length} film{movies.length > 1 ? 's' : ''} à découvrir
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {movies.map((movie, index) => (
                <div
                  key={movie.id || index}
                  className="bg-gray-800 rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Poster placeholder */}
                  <div className="h-64 bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 relative overflow-hidden">
                    {/* Badge année */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                        {movie.releaseYear}
                      </span>
                    </div>

                    {/* Play button hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {movie.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                      {movie.description || 'Pas de description disponible.'}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 text-sm font-medium">
                        {(Math.random() * 2 + 3).toFixed(1)}/5
                      </span>
                      <span className="text-gray-500 text-xs">
                        {Math.floor(Math.random() * 60 + 90)} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
