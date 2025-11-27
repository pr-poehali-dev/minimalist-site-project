import { Link } from 'react-router-dom';

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
