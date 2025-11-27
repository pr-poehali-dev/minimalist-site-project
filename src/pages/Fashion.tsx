import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Fashion = () => {
  const articles = [
    { title: 'The Art of Minimalism', path: '/article/minimalism', excerpt: 'Discovering beauty in simplicity' },
    { title: 'The New Classics', path: '/article/new-classics', excerpt: 'Timeless pieces that define elegance' },
    { title: 'Sustainable Style', path: '/article/sustainable-style', excerpt: 'Fashion with consciousness' },
    { title: 'Monochrome Magic', path: '/article/monochrome', excerpt: 'The power of black and white' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-7xl font-serif font-light mb-16">Fashion</h1>
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

export default Fashion;
