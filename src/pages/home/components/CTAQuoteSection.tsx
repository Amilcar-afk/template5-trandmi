import { Link } from 'react-router-dom';

export default function CTAQuoteSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-8 md:px-12 lg:px-16 bg-accent-500">
      <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light italic text-background-50 mb-8 leading-snug">
          Devenir partenaire Trandmi
        </h2>
        <p className="text-sm text-background-50/70 font-light max-w-xl mx-auto leading-relaxed mb-10">
          Chaque collaboration commence par une conversation. Présentez-nous votre clinique ou votre réseau et découvrez ce que la collection Trandmi peut apporter à votre pratique.
        </p>
        <Link
          to="/devis"
          className="inline-block px-10 py-4 border border-background-50/30 hover:border-background-50/60 text-background-50 text-[12px] tracking-[0.2em] font-light transition-all duration-500 whitespace-nowrap hover:bg-background-50/10"
        >
          Demande de Devis
        </Link>
      </div>
    </section>
  );
}