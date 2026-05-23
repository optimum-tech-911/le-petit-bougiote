import { SEO } from '../components/SEO';

const images = [
  { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200', alt: 'Extérieur de restaurant rue Diderot' },
  { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', alt: 'Burger signature' },
  { url: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800', alt: 'Assortiment de desserts' },
  { url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', alt: 'Café et latte art' },
  { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200', alt: 'Intérieur chaleureux' },
];

export default function Gallery() {
  return (
    <>
      <SEO 
        title="Galerie" 
        description="Découvrez l'ambiance et les plats du restaurant Le Petit Bougiote en images."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Galerie</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            L'ambiance & <span className="text-brand-orange italic">les saveurs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un aperçu de ce qui vous attend chez Le Petit Bougiote.
          </p>
        </div>

        {/* Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-1 md:row-span-2">
            <div className="aspect-[3/4] md:h-full rounded-3xl overflow-hidden shadow-sm group">
              <img 
                src={images[0].url} 
                alt={images[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm group">
              <img 
                src={images[1].url} 
                alt={images[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm group">
              <img 
                src={images[2].url} 
                alt={images[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-sm group">
              <img 
                src={images[4].url} 
                alt={images[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
