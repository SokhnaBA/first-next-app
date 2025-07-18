import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MB</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Mon Blog</span>
          </Link>

          {/* Menu de navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-purple-50"
            >
              À propos
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-green-600 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-green-50"
            >
              Blog
            </Link>
            <Link
              href="/movies"
              className="text-gray-600 hover:text-red-600 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-red-50"
            >
              Films
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50"
            >
              Dashboard
            </Link>
          </div>

          {/* Bouton mobile */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
