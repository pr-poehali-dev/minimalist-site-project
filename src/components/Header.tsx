import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: 'Fashion', path: '/fashion' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Culture', path: '/culture' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'Travel', path: '/travel' },
    { name: 'Art', path: '/art' },
  ];

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="text-4xl font-serif font-light tracking-wider">
            ÉDITION
          </Link>
          
          <nav className="hidden md:flex gap-8">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
              >
                {section.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container mx-auto px-6 py-6">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg uppercase tracking-wider hover:opacity-60 transition-opacity"
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
