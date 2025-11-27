import Header from '@/components/Header';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { slug } = useParams();

  const articles: Record<string, { title: string; category: string; content: string[] }> = {
    'minimalism': {
      title: 'The Art of Minimalism',
      category: 'Fashion',
      content: [
        'In a world overflowing with excess, minimalism emerges not as a trend but as a philosophy—a return to essence, where every element serves purpose and beauty.',
        'The minimalist approach to fashion transcends mere aesthetic. It speaks to a deeper understanding of quality over quantity, of timelessness over trend, of intention over impulse.',
        'Clean lines, monochromatic palettes, and carefully curated pieces form the foundation of a wardrobe that stands the test of time. This is fashion as art, stripped to its purest form.',
      ]
    },
    'elegance': {
      title: 'Essence of Elegance',
      category: 'Beauty',
      content: [
        'True elegance lies not in perfection, but in the confident embrace of one\'s natural beauty, enhanced with thoughtful care and minimal intervention.',
        'The beauty industry has long promised transformation, but the most profound change comes from within—from rituals that honor the skin, the body, the self.',
        'A minimalist beauty routine focuses on ingredients that matter, products that perform, and practices that nurture both appearance and wellbeing.',
      ]
    },
    'living-intent': {
      title: 'Living with Intent',
      category: 'Lifestyle',
      content: [
        'Our living spaces are more than mere backdrops to our lives—they are active participants in our daily experiences, shaping our moods, behaviors, and sense of self.',
        'Intentional living begins with the conscious curation of our environment. Each object, each piece of furniture, each color choice contributes to the atmosphere we create.',
        'In the pursuit of a meaningful home, less often reveals itself as more. Space to breathe, light to inspire, simplicity to soothe—these are the luxuries of modern living.',
      ]
    },
  };

  const article = articles[slug || ''] || {
    title: 'Article',
    category: 'Editorial',
    content: ['This article is coming soon.']
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
            {article.category}
          </p>
          <h1 className="text-6xl md:text-7xl font-serif font-light mb-12 animate-fade-in">
            {article.title}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p 
                key={index}
                className="text-lg leading-relaxed mb-8 text-foreground animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Share this story
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;
