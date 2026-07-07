import { useEffect, useRef } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { distributionCountries, distributionIntro } from '@/mocks/distribution';

export default function Distribution() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background-50">
      <Navbar />

      <header className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-8 md:px-12 lg:px-16 bg-foreground-950">
        <div className="max-w-[1200px] mx-auto reveal-on-scroll">
          <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/60 mb-6 block">
            DISTRIBUTION & EXCLUSIVITÉ
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground-50 leading-none mb-6">
            {distributionIntro.title}
          </h1>
          <p className="text-base md:text-lg font-light italic text-primary-300/50 max-w-2xl leading-relaxed mb-8">
            {distributionIntro.subtitle}
          </p>
          <p className="text-[13px] md:text-sm leading-relaxed text-foreground-300 font-light max-w-xl">
            {distributionIntro.description}
          </p>
        </div>
      </header>

      <section className="relative w-full py-20 md:py-28 px-8 md:px-12 lg:px-16 bg-background-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {distributionCountries.map((country) => (
              <div
                key={country.code}
                className={`border p-8 md:p-10 text-center reveal-on-scroll transition-colors duration-500 ${
                  country.status === 'Distribution exclusive'
                    ? 'border-foreground-200/40 hover:border-primary-500/20'
                    : 'border-foreground-100/20 opacity-60'
                }`}
              >
                <p className={`font-heading text-3xl font-light italic mb-4 ${
                  country.status === 'Distribution exclusive' ? 'text-primary-600' : 'text-foreground-400'
                }`}>
                  {country.name}
                </p>
                <p className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                  {country.status.toUpperCase()}
                </p>
                <p className="text-[12px] text-foreground-600 font-light mb-2">
                  {country.partners}
                </p>
                {country.cities.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {country.cities.map((city) => (
                      <span key={city} className="text-[10px] text-foreground-400 font-light px-2 py-0.5 border border-foreground-200/30">
                        {city}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}