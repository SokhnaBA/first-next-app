export async function GET() {
  const articles = [
    {
      id: 1,
      title: "Mon premier jour avec Next.js",
      slug: "premier-jour-nextjs",
      excerpt: "Aujourd’hui j’ai découvert Next.js et c’est incroyable !",
      content: `Aujourd’hui j’ai découvert Next.js et c’est incroyable !
C’est tellement plus simple que ce que je pensais.
En quelques minutes j’avais déjà un site qui fonctionne.

Ce qui m’a le plus impressionné :
- La simplicité du routing
- L’intégration avec Tailwind CSS
- La rapidité de développement

Je recommande vivement Next.js à tous les développeurs React !`,
      date: "2025-01-15",
      readTime: "3 min",
      category: "Personnel",
      author: "Votre Nom"
    },
    {
      id: 2,
      title: "Comment j’ai créé mon premier blog",
      slug: "creation-premier-blog",
      excerpt: "Guide étape par étape pour créer un blog avec Next.js",
      content: `Voici les étapes que j’ai suivies pour créer ce blog :
1. Installation de Next.js avec Tailwind CSS
2. Création de la structure des pages
3. Ajout de la navigation responsive
4. Création des APIs pour les articles
5. Styling avec Tailwind CSS

C’était plus facile que prévu ! En quelques heures,
j’avais un blog fonctionnel et beau.`,
      date: "2025-01-16",
      readTime: "8 min",
      category: "Tech",
      author: "Votre Nom"
    },
    {
      id: 3,
      title: "Mes conseils pour apprendre Next.js",
      slug: "conseils-apprendre-nextjs",
      excerpt: "Les meilleures pratiques pour maîtriser Next.js rapidement",
      content: `Si vous voulez apprendre Next.js, voici mes conseils :
- Maîtrisez d’abord React (composants, hooks, state)
- Commencez par des projets simples
- Pratiquez régulièrement (30 min par jour minimum)
- N’ayez pas peur de faire des erreurs !
- Utilisez Tailwind CSS pour le styling
- Regardez des tutoriels sur YouTube
- Rejoignez des communautés de développeurs

Le plus important : la pratique ! Codez, codez, codez !`,
      date: "2025-01-17",
      readTime: "5 min",
      category: "Tech",
      author: "Votre Nom"
    }
  ];

  return Response.json(articles);
}
