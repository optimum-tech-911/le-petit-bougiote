import { Star } from 'lucide-react';
import { SEO } from '../components/SEO';

const reviews = [
  {
    content: "« Accueil chaleureux et burgers vraiment bons. Une adresse à découvrir à Béziers. »",
  },
  {
    content: "« Très bon rapport qualité-prix, parfait pour un déjeuner ou un repas à emporter. »",
  },
  {
    content: "« Desserts faits maison délicieux, le brownie est une tuerie ! »",
  },
  {
    content: "« [Placeholder Review 4: Exemple d'avis client soulignant le service rapide et convivial.] »",
  },
  {
    content: "« [Placeholder Review 5: Exemple d'avis client mentionnant la beauté du lieu et la propreté.] »",
  },
  {
    content: "« [Placeholder Review 6: Exemple d'avis client recommandant particulièrement la formule déjeuner.] »",
  },
];

export default function Reviews() {
  return (
    <>
      <SEO 
        title="Avis Clients" 
        description="Lisez les avis de nos clients. Le Petit Bougiote est évalué 5,0/5 sur Google par nos visiteurs."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Avis Clients</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            <span className="text-brand-orange italic">5,0 / 5</span> sur Google
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une adresse locale appréciée pour son accueil, ses burgers et son ambiance conviviale.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white px-8 py-4 rounded-full border border-brand-green/10 shadow-sm flex items-center gap-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <div className="border-l border-gray-200 pl-6 text-left">
              <span className="block font-serif font-bold text-xl text-gray-900 leading-none">5,0</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">~30 avis Google</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-brand-green/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                {review.content}
              </p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                Exemple d'avis · Google
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
