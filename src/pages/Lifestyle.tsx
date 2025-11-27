import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Lifestyle = () => {
  const articles = [
    { title: 'Living with Intent', path: '/article/living-intent', excerpt: 'Creating spaces that inspire' },
    { title: 'Home Sanctuary', path: '/article/home-sanctuary', excerpt: 'Design for wellbeing' },
    { title: 'Mindful Living', path: '/article/mindful-living', excerpt: 'Balance in everyday life' },
    { title: 'The Art of Hosting', path: '/article/art-hosting', excerpt: 'Elegant entertaining' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-7xl font-serif font-light mb-16">Lifestyle</h1>
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

export default Lifestyle;
