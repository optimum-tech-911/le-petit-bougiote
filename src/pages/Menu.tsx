import { SEO } from '../components/SEO';

const burgers = [
  { name: 'Classic Burger', desc: 'Bœuf, cheddar, salade, tomate, sauce maison', price: '9,90 €' },
  { name: 'Texan Burger', desc: 'Bœuf, bacon, oignons frits, sauce BBQ', price: '11,50 €' },
  { name: 'Chicken Burger', desc: 'Poulet croustillant, cheddar, sauce ranch', price: '10,50 €' },
  { name: 'Double Cheese', desc: 'Double steak, double cheddar, cornichons', price: '12,90 €' },
  { name: 'Le Veggie', desc: 'Galette de légumes, cheddar, avocat, salade', price: '10,90 €' },
];

const desserts = [
  { name: 'Le Brownie', desc: 'Fait maison, pépites de chocolat et noix', price: '4,50 €' },
  { name: 'Cookie Géant', desc: 'Au chocolat fondant', price: '3,50 €' },
  { name: 'Tiramisu', desc: 'Recette classique au café', price: '5,00 €' },
  { name: 'Donut', desc: 'Glaçage chocolat ou sucre', price: '3,00 €' },
];

const drinks = [
  { name: 'Soda', desc: 'Cola, Zéro, Iced Tea (33cl)', price: '2,50 €' },
  { name: 'Eau minérale', desc: 'Plate ou pétillante (50cl)', price: '2,00 €' },
  { name: 'Café', desc: 'Espresso', price: '1,50 €' },
  { name: 'Capuccino', desc: 'Lait moussé et touche de cacao', price: '3,50 €' },
];

export default function Menu() {
  return (
    <>
      <SEO 
        title="Notre Menu" 
        description="Découvrez la carte du Petit Bougiote à Béziers : burgers gourmands, désserts maison et boissons."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Notre Carte</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Le menu du <span className="text-brand-orange italic">Petit Bougiote</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Burgers signature, desserts maison et boissons soigneusement sélectionnées. <br/> Les prix sont indicatifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Menu Section */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-green/5 shadow-sm">
            <h3 className="text-3xl font-serif text-brand-green mb-8 flex items-center">
              Burgers
              <span className="flex-1 ml-4 border-b border-brand-green/20"></span>
            </h3>
            <div className="space-y-8">
              {burgers.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-brand-orange font-semibold">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            
            {/* Menu Section */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-green/5 shadow-sm">
              <h3 className="text-3xl font-serif text-brand-green mb-8 flex items-center">
                Desserts
                <span className="flex-1 ml-4 border-b border-brand-green/20"></span>
              </h3>
              <div className="space-y-6">
                {desserts.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-brand-orange font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Section */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-green/5 shadow-sm">
              <h3 className="text-3xl font-serif text-brand-green mb-8 flex items-center">
                Boissons
                <span className="flex-1 ml-4 border-b border-brand-green/20"></span>
              </h3>
              <div className="space-y-6">
                {drinks.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-brand-orange font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
