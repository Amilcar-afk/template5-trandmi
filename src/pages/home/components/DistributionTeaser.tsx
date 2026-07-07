import { Link } from 'react-router-dom';
import { distributionCountries, distributionIntro } from '@/mocks/distribution';

export default function DistributionTeaser() {
  const activeCountries = distributionCountries.filter((c) => c.status === 'Distribution exclusive');

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 px-8 md:px-12 lg:px-16 bg-foreground-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal-on-scroll text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/60 mb-6 block">
            DISTRIBUTION & EXCLUSIVITÉ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-50 mb-6 leading-none">
            {distributionIntro.title}
          </h2>
          <p className="text-sm md:text-base font-light italic text-primary-300/40 mb-6 leading-relaxed max-w-xl mx-auto">
            {distributionIntro.subtitle}
          </p>
          <p className="text-[13px] md:text-sm leading-relaxed text-foreground-300 font-light max-w-2xl mx-auto">
            {distributionIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-on-scroll">
          {activeCountries.map((country) => (
            <div
              key={country.code}
              className="border border-foreground-800/30 p-8 md:p-10 text-center hover:border-primary-500/20 transition-colors duration-700"
            >
              <p className="font-heading text-3xl font-light italic text-primary-400 mb-4">
                {country.name}
              </p>
              <p className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                {country.status.toUpperCase()}
              </p>
              <p className="text-[12px] text-foreground-400 font-light">
                {country.partners}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal-on-scroll">
          <Link
            to="/distribution"
            className="inline-block text-[12px] tracking-[0.2em] font-light text-primary-400 hover:text-primary-300 border-b border-primary-400/30 hover:border-primary-300 transition-all duration-500 pb-1 whitespace-nowrap"
          >
            Tous les Pays Partenaires
          </Link>
        </div>
      </div>
    </section>
  );
}