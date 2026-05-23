import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Avis', path: '/avis' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b-2 border-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-cream font-serif font-semibold text-xl group-hover:bg-brand-orange transition-colors">
              B
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight text-gray-900">
              Le Petit Bougiote
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors hover:text-brand-orange',
                      isActive ? 'text-brand-orange' : 'text-gray-600'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <a
              href="tel:+33458281522"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Commander</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-green p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cream border-b border-brand-green/10 shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-3 rounded-md text-base font-medium',
                    isActive
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'text-gray-600 hover:bg-brand-green/5 hover:text-brand-green'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:+33458281522"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-brand-orange text-white px-5 py-3 rounded-xl font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Commander (04 58 28 15 22)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
