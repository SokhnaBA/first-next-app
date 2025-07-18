import Link from 'next/link';

// Fonction pour récupérer les articles (API interne)
async function getArticles() {
  try {
    const response = await fetch('http://localhost:3000/api/articles');
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Erreur articles:', error);
    return [];
  }
}

// Fonction pour récupérer les films (API distante)
async function getMovies() {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const data = await response.json();
    return data.movies || [];
  } catch (error) {
    console.error('Erreur films:', error);
    return [];
  }
}

export default async function DashboardPage() {
  // Récupérer les deux APIs en parallèle
  const [articles, movies] = await Promise.all([getArticles(), getMovies()]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Aperçu de mon contenu et recommandations</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Articles</p>
                <p className="text-3xl font-bold text-gray-800">{articles.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Films Disponibles</p>
                <p className="text-3xl font-bold text-gray-800">{movies.length}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Contenu</p>
                <p className="text-3xl font-bold text-gray-800">{articles.length + movies.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Articles */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Derniers Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                Voir tout
              </Link>
            </div>

            {articles.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucun article disponible</p>
            ) : (
              <div className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <div className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800 hover:text-blue-600">{article.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">{article.excerpt}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Films */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Films Recommandés</h2>
              <Link href="/movies" className="text-red-600 hover:text-red-800 font-medium">
                Voir tout
              </Link>
            </div>

            {movies.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucun film disponible</p>
            ) : (
              <div className="space-y-4">
                {movies.slice(0, 3).map((movie, index) => (
                  <div
                    key={movie.id || index}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{movie.title}</h3>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        {movie.releaseYear}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{movie.description}</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <span>{(Math.random() * 2 + 3).toFixed(1)}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
