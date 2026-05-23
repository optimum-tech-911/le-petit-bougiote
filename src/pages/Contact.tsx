import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact" 
        description="Contactez Le Petit Bougiote. Adresse : 28 Rue Diderot, 34500 Béziers. Téléphone : 04 58 28 15 22."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Contact</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
            Venez nous <span className="text-brand-orange italic">rencontrer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rue Diderot, en plein cœur de Béziers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-full border border-brand-green/5 shadow-sm flex items-center justify-center text-brand-green shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Adresse</h3>
                <p className="font-serif text-2xl text-gray-900">28 Rue Diderot, 34500 Béziers</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-full border border-brand-green/5 shadow-sm flex items-center justify-center text-brand-green shrink-0 mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Téléphone</h3>
                <p className="font-serif text-2xl text-gray-900">04 58 28 15 22</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-full border border-brand-green/5 shadow-sm flex items-center justify-center text-brand-green shrink-0 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Horaires</h3>
                <p className="font-serif text-2xl text-gray-900 mb-2">Du lundi au samedi · jusqu'à 22h</p>
                <p className="text-gray-500 text-sm">Horaires indicatifs — à confirmer avec le restaurant</p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <a 
                href="tel:+33458281522" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler</span>
              </a>
              <a 
                href="https://maps.google.com/?q=28+Rue+Diderot,+34500+Béziers,+France" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Itinéraire Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative h-[400px] lg:h-auto rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl border border-brand-green/10 bg-gray-100 isolate">
            {/* We embed a Google Maps iframe centering on Beziers, Rue Diderot */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4601446709214!2d3.2131971765876403!3d43.34836647111812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b10e58fa2ab2d7%3A0xc02eebd5733fcd9a!2s28%20Rue%20Diderot%2C%2034500%20B%C3%A9ziers!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 grayscale-[0.2] contrast-125 opacity-90"
              title="Carte de Béziers"
            ></iframe>
            {/* Custom Overlay map pin to make it look embedded */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-brand-green/10 flex items-center gap-3 transform -translate-y-12">
                <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-gray-900 leading-tight">Le Petit Bougiote</p>
                  <p className="text-xs text-gray-600 font-medium tracking-wide">28 Rue Diderot</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
