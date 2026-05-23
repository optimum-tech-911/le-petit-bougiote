import { SEO } from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="À propos" 
        description="L'histoire du restaurant Le Petit Bougiote situé rue Diderot à Béziers, un lieu convivial pour déguster des burgers de qualité."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">À Propos</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Une adresse conviviale <span className="text-brand-orange italic">rue Diderot</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
                alt="Rue à Béziers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-serif text-brand-green">Notre histoire</h3>
            
            <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed">
              <p>
                Le Petit Bougiote est une adresse conviviale située rue Diderot à Béziers. L'établissement propose une cuisine simple, généreuse et gourmande, idéale pour un déjeuner, une pause café, un dessert ou un repas à emporter.
              </p>
              <p>
                On y vient pour la qualité d'un burger fait avec soin, la douceur d'un cappuccino l'après-midi ou la simplicité d'un repas à emporter dans le centre de Béziers. Notre équipe vous accueille avec le sourire pour vous offrir un moment agréable.
              </p>
              <p>
                Nous attachons une importance particulière à la sélection de nos produits et à l'ambiance chaleureuse de notre lieu.
              </p>
            </div>

            {/* Quick Stats Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
              <div className="bg-white p-6 rounded-3xl border border-brand-green/5 text-center">
                <p className="text-3xl font-serif text-brand-orange font-bold mb-1">5,0</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">sur Google</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-brand-green/5 text-center">
                <p className="text-2xl font-serif text-brand-orange font-bold mb-1 mt-1">10–20 €</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">prix moyen</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-brand-green/5 text-center col-span-2 md:col-span-1">
                <p className="text-3xl font-serif text-brand-orange font-bold mb-1">22h</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">fermeture</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
