import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mon Blog Next.js',
  description: 'Un blog moderne cree avec Next.js et Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
