import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'The Art of Minimalism',
      category: 'Fashion',
      image: 'https://cdn.poehali.dev/projects/8e713b1b-bd05-4f09-8e05-a8da3d838736/files/9e01dfcf-0b78-423e-b7eb-0c2c8b28a6f9.jpg',
      excerpt: 'Discovering beauty in simplicity through contemporary design',
      path: '/article/minimalism',
    },
    {
      id: 2,
      title: 'Essence of Elegance',
      category: 'Beauty',
      image: 'https://cdn.poehali.dev/projects/8e713b1b-bd05-4f09-8e05-a8da3d838736/files/b9806cc9-a879-4573-80e9-40e22123597d.jpg',
      excerpt: 'The timeless approach to modern beauty',
      path: '/article/elegance',
    },
    {
      id: 3,
      title: 'Living with Intent',
      category: 'Lifestyle',
      image: 'https://cdn.poehali.dev/projects/8e713b1b-bd05-4f09-8e05-a8da3d838736/files/ac0d7abc-3e40-4e91-a66c-ae875689bdc2.jpg',
      excerpt: 'Creating spaces that inspire and rejuvenate',
      path: '/article/living-intent',
    },
  ];

  const editorsPick = [
    { title: 'The New Classics', category: 'Fashion', path: '/article/new-classics' },
    { title: 'Beauty Rituals', category: 'Beauty', path: '/article/beauty-rituals' },
    { title: 'Culture Shift', category: 'Culture', path: '/article/culture-shift' },
    { title: 'Travel Diaries', category: 'Travel', path: '/article/travel-diaries' },
    { title: 'Modern Art', category: 'Art', path: '/article/modern-art' },
    { title: 'Home Sanctuary', category: 'Lifestyle', path: '/article/home-sanctuary' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-serif font-light mb-4 animate-fade-in">
              Where Style
              <br />
              Meets Substance
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in">
              A curated collection of stories that celebrate elegance, creativity, and the art of living well
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.id}
                to={article.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {article.category}
                </p>
                <h2 className="text-3xl font-serif font-light mb-3 group-hover:opacity-60 transition-opacity">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif font-light mb-12">Editor's Pick</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {editorsPick.map((article, index) => (
                <Link
                  key={index}
                  to={article.path}
                  className="group py-6 border-b border-border last:border-b-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-2xl font-serif font-light group-hover:opacity-60 transition-opacity">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-light mb-6">Stay Connected</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive our latest stories and exclusive content
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl font-serif font-light mb-6">ÉDITION</p>
            <p className="text-sm text-muted-foreground">
              © 2024 Édition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
