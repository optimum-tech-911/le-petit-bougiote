import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-green text-cream mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-serif font-semibold text-2xl tracking-tight text-white">
                Le Petit Bougiote
              </span>
            </Link>
            <p className="text-cream/80 max-w-xs text-sm">
              Restaurant proposant des burgers, desserts et boissons avec une cuisine généreuse, simple et gourmande.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-brand-orange">Contact & Accès</h3>
            <ul className="space-y-2 text-sm text-cream/90">
              <li>28 Rue Diderot, 34500 Béziers</li>
              <li>
                <a href="tel:+33458281522" className="hover:text-brand-orange transition-colors">
                  04 58 28 15 22
                </a>
              </li>
              <li>Du lundi au samedi, jusqu'à 22h</li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-brand-orange">Liens utiles</h3>
            <ul className="space-y-2 text-sm text-cream/90 font-medium">
              <li><Link to="/menu" className="hover:text-brand-orange transition-colors">Notre Carte</Link></li>
              <li><Link to="/a-propos" className="hover:text-brand-orange transition-colors">À propos</Link></li>
              <li><Link to="/avis" className="hover:text-brand-orange transition-colors">Avis Clients</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-sm text-cream/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Le Petit Bougiote. Tous droits réservés.</p>
          <p>
            Site réalisé pour <span className="text-cream/80 font-medium">Le Petit Bougiote Béziers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
