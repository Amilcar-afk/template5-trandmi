import { useEffect, useRef } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { chapters, skincarePro } from '@/mocks/chapters';

export default function Collection() {
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
            LA COLLECTION
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground-50 leading-none mb-6">
            Les Sept Chapitres
          </h1>
          <p className="text-base md:text-lg font-light italic text-primary-300/50 max-w-2xl leading-relaxed">
            Une collection pensée comme un ouvrage de maison. Sept chapitres, sept promesses d&rsquo;excellence pour le professionnel exigeant.
          </p>
        </div>
      </header>

      {chapters.map((chapter, index) => {
        const isDark = index % 2 === 0;
        return (
          <section
            key={chapter.numeral}
            className={`relative w-full py-20 md:py-28 px-8 md:px-12 lg:px-16 ${
              isDark ? 'bg-foreground-950' : 'bg-background-50'
            }`}
          >
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start gap-12 reveal-on-scroll">
                <div className="lg:w-1/2">
                  <span className={`text-[10px] tracking-[0.4em] font-light mb-4 block ${
                    isDark ? 'text-primary-400/70' : 'text-primary-600'
                  }`}>
                    CHAPITRE {chapter.numeral}
                  </span>
                  <h2 className={`font-heading text-4xl md:text-5xl font-light italic mb-4 leading-none ${
                    isDark ? 'text-foreground-50' : 'text-foreground-950'
                  }`}>
                    {chapter.title}
                  </h2>
                  <p className={`text-sm font-light italic mb-6 ${
                    isDark ? 'text-primary-300/50' : 'text-primary-700'
                  }`}>
                    {chapter.subtitle}
                  </p>
                  <p className={`text-[13px] leading-relaxed max-w-lg font-light ${
                    isDark ? 'text-foreground-300' : 'text-foreground-600'
                  }`}>
                    {chapter.description}
                  </p>
                  <p className={`mt-6 text-[11px] tracking-[0.2em] font-light ${
                    isDark ? 'text-foreground-500' : 'text-foreground-400'
                  }`}>
                    {chapter.featured}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full aspect-[16/10] bg-foreground-800/10 flex items-center justify-center">
                    <p className={`font-heading text-6xl md:text-8xl font-light italic ${
                      isDark ? 'text-foreground-800/30' : 'text-foreground-200/40'
                    }`}>
                      {chapter.numeral}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative w-full py-24 md:py-32 px-8 md:px-12 lg:px-16 bg-accent-500">
        <div className="max-w-[1200px] mx-auto text-center reveal-on-scroll">
          <span className="text-[10px] tracking-[0.4em] font-light text-background-50/60 mb-6 block">
            GAMME PROFESSIONNELLE
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-background-50 mb-6 leading-none">
            {skincarePro.title}
          </h2>
          <p className="text-sm font-light italic text-background-50/60 mb-6 max-w-xl mx-auto">
            {skincarePro.subtitle}
          </p>
          <p className="text-[13px] text-background-50/70 font-light max-w-2xl mx-auto leading-relaxed">
            {skincarePro.description}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}