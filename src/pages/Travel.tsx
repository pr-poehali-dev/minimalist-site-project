import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Travel = () => {
  const articles = [
    { title: 'Travel Diaries', path: '/article/travel-diaries', excerpt: 'Stories from around the world' },
    { title: 'Hidden Gems', path: '/article/hidden-gems', excerpt: 'Undiscovered destinations' },
    { title: 'Luxury Escapes', path: '/article/luxury-escapes', excerpt: 'Exceptional experiences' },
    { title: 'Cultural Journeys', path: '/article/cultural-journeys', excerpt: 'Immersive adventures' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-7xl font-serif font-light mb-16">Travel</h1>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={article.path}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-3xl font-serif font-light mb-3 group-hover:opacity-60 transition-opacity">
                {article.title}
              </h2>
              <p className="text-muted-foreground">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Travel;
