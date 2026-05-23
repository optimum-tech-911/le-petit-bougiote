import { Link } from 'react-router-dom';
import { MapPin, ShoppingBag, Wallet, Clock, Phone, Star } from 'lucide-react';
import { SEO, restaurantSchema } from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Accueil" 
        description="Le Petit Bougiote, restaurant de burgers, desserts et boissons à Béziers. Sur place ou à emporter au cœur de Béziers." 
        schema={restaurantSchema}
      />
      
      <div className="w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                Ouvert aujourd'hui · ferme à 22h
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Burgers, desserts & moments gourmands <br />
                <span className="text-brand-orange italic">au cœur de Béziers</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Sur place ou à emporter, Le Petit Bougiote vous accueille rue Diderot avec une cuisine généreuse, simple et gourmande.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/menu" 
                  className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
                >
                  Voir le menu
                </Link>
                <a 
                  href="tel:+33458281522" 
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler maintenant</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-brand-green/10 self-start px-6 py-3 rounded-full w-fit">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  5,0 sur Google
                </span>
                <span className="text-sm text-gray-500">· ~30 avis</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200" 
                  alt="Délicieux burger au Petit Bougiote Béziers" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-3xl shadow-xl border border-brand-green/5 max-w-[180px]">
                <p className="text-xs text-brand-green uppercase tracking-wider font-semibold mb-1">Prix moyen</p>
                <p className="text-brand-orange font-serif font-bold text-2xl">10 – 20 €</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="bg-white py-20 border-y border-brand-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-cream/50 p-8 rounded-3xl border border-brand-green/5 group hover:bg-cream transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">Adresse</h3>
              <p className="font-serif text-xl text-gray-900">28 Rue Diderot, 34500 Béziers</p>
            </div>

            <div className="bg-cream/50 p-8 rounded-3xl border border-brand-green/5 group hover:bg-cream transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">Services</h3>
              <p className="font-serif text-xl text-gray-900">Sur place & à emporter</p>
            </div>

            <div className="bg-cream/50 p-8 rounded-3xl border border-brand-green/5 group hover:bg-cream transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">Prix moyen</h3>
              <p className="font-serif text-xl text-gray-900">10 – 20 € par personne</p>
            </div>

            <div className="bg-cream/50 p-8 rounded-3xl border border-brand-green/5 group hover:bg-cream transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">Horaires</h3>
              <p className="font-serif text-xl text-gray-900">Ouvert jusqu'à 22h</p>
            </div>

          </div>
        </div>
      </div>

      {/* Center CTA Section */}
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Découvrir</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
          Une cuisine simple, généreuse et gourmande
        </h3>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Parcourez notre carte, découvrez nos plats à emporter, ou venez nous rendre visite rue Diderot.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/menu" className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3.5 rounded-full font-medium transition-all">
            Voir la carte
          </Link>
          <Link to="/galerie" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all">
            Voir la galerie
          </Link>
          <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all">
            Nous contacter
          </Link>
        </div>
      </div>
    </>
  );
}
