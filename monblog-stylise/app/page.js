import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Bienvenue sur mon blog !
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Découvrez mes articles, projets et recommandations
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un blog moderne créé avec Next.js et Tailwind CSS pour partager mes apprentissages en développement web.
          </p>
        </div>

        {/* Cards de navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Blog */}
          <Link href="/blog">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Mon Blog</h3>
              <p className="text-gray-600 text-center text-sm">
                Articles sur le développement web et mes apprentissages
              </p>
            </div>
          </Link>

          {/* À propos */}
          <Link href="/about">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">À propos</h3>
              <p className="text-gray-600 text-center text-sm">
                Découvrez qui je suis et mes compétences
              </p>
            </div>
          </Link>

          {/* Films */}
          <Link href="/movies">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎬s</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Films</h3>
              <p className="text-gray-600 text-center text-sm">
                Ma sélection de films recommandés
              </p>
            </div>
          </Link>

          {/* Dashboard */}
          <Link href="/dashboard">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dashboard</h3>
              <p className="text-gray-600 text-center text-sm">
                Vue d’ensemble de tout mon contenu
              </p>
            </div>
          </Link>
        </div>

        {/* Section de présentation */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi ce blog ?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-xl">📘</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apprentissage</h3>
              <p className="text-gray-600 text-sm">
                Documenter mon parcours d’apprentissage du développement web
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Partage</h3>
              <p className="text-gray-600 text-sm">
                Partager mes connaissances et aider d’autres développeurs
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Pratique</h3>
              <p className="text-gray-600 text-sm">
                Pratiquer avec des technologies modernes comme Next.js
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block"
            >
              Commencer la lecture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
