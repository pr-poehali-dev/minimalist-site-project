import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Beauty = () => {
  const articles = [
    { title: 'Essence of Elegance', path: '/article/elegance', excerpt: 'The timeless approach to modern beauty' },
    { title: 'Beauty Rituals', path: '/article/beauty-rituals', excerpt: 'Self-care as an art form' },
    { title: 'Natural Radiance', path: '/article/natural-radiance', excerpt: 'Embracing your authentic beauty' },
    { title: 'The Perfect Canvas', path: '/article/perfect-canvas', excerpt: 'Skincare essentials' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-7xl font-serif font-light mb-16">Beauty</h1>
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

export default Beauty;
