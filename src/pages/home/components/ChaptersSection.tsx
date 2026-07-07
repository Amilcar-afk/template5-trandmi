import { useRef, useEffect } from 'react';

const chapterData = [
  {
    numeral: "I",
    title: "All-in-one Care",
    subtitle: "Le soin total, l'essence même de Trandmi",
    description: "Une approche holistique où chaque formule concentre l'intégralité du savoir-faire coréen. Des textures enveloppantes qui unifient, raffermissent et illuminent en un geste.",
    featured: "TRX All-in-One Essence",
    imageUrl: "https://readdy.ai/api/search-image?query=Luxurious%20skincare%20product%20photography%20with%20dark%20dramatic%20lighting%2C%20single%20elegant%20glass%20bottle%20on%20black%20marble%2C%20golden%20accents%2C%20editorial%20fashion%20magazine%20aesthetic%2C%20minimalist%20composition%2C%20high%20contrast%2C%20champagne%20warm%20highlights%20against%20deep%20shadows&width=800&height=1000&seq=chapter-all-in-one&orientation=portrait",
  },
  {
    numeral: "II",
    title: "Ampoule & Essence",
    subtitle: "La quintessence de l'actif coréen",
    description: "Des concentrés d'une pureté absolue, formulés pour pénétrer au cœur de l'épiderme. Chaque ampoule est une promesse de renaissance cellulaire.",
    featured: "TRX Ampoule Régénératrice",
    imageUrl: "https://readdy.ai/api/search-image?query=Elegant%20glass%20ampoule%20bottle%20with%20dropper%20on%20dark%20velvet%20background%2C%20dramatic%20chiaroscuro%20lighting%2C%20golden%20liquid%20visible%20inside%2C%20luxury%20cosmetic%20editorial%20photography%2C%20minimalist%20composition%2C%20deep%20shadows%20with%20warm%20highlights&width=800&height=1000&seq=chapter-ampoule&orientation=portrait",
  },
  {
    numeral: "III",
    title: "Cream",
    subtitle: "La texture signature de la maison",
    description: "Des crèmes dont la richesse n'a d'égale que la légèreté. Des émulsions qui fondent sur la peau comme un voile de soie, libérant leurs actifs en profondeur.",
    featured: "TRX Crème Renaissance",
    imageUrl: "https://readdy.ai/api/search-image?query=Luxury%20skincare%20cream%20jar%20with%20golden%20lid%20on%20dark%20background%2C%20soft%20dramatic%20lighting%20from%20side%2C%20editorial%20beauty%20photography%2C%20minimal%20composition%2C%20warm%20champagne%20tones%2C%20texture%20visible%2C%20haute%20couture%20aesthetic&width=800&height=1000&seq=chapter-cream&orientation=portrait",
  },
  {
    numeral: "IV",
    title: "Peeling",
    subtitle: "L'art du renouvellement, maîtrisé",
    description: "Des exfoliants d'une finesse exceptionnelle qui révèlent l'éclat sans jamais agresser. Le geste peeling devient un rituel de métamorphose douce.",
    featured: "TRX Gentle Peel Expert",
    imageUrl: "https://readdy.ai/api/search-image?query=Minimalist%20skincare%20product%20photography%2C%20elegant%20dark%20bottle%20with%20subtle%20gold%20details%2C%20black%20background%2C%20soft%20directional%20light%2C%20editorial%20luxury%20aesthetic%2C%20warm%20golden%20rim%20light%2C%20refined%20composition&width=800&height=1000&seq=chapter-peeling&orientation=portrait",
  },
  {
    numeral: "V",
    title: "Mask & Pack",
    subtitle: "Le temps suspendu du soin",
    description: "Des masques qui transforment la cabine en écrin de sérénité. Chaque application est une parenthèse où la peau reçoit l'intégralité de l'attention qu'elle mérite.",
    featured: "TRX Hydrogel Gold Mask",
    imageUrl: "https://readdy.ai/api/search-image?query=Luxury%20sheet%20mask%20photography%2C%20dark%20dramatic%20background%2C%20golden%20packaging%20with%20minimal%20design%2C%20soft%20lighting%2C%20editorial%20beauty%20magazine%20style%2C%20warm%20champagne%20accents%2C%20elegant%20composition&width=800&height=1000&seq=chapter-mask&orientation=portrait",
  },
  {
    numeral: "VI",
    title: "Kit",
    subtitle: "Des collections pensées comme des écrins",
    description: "Des ensembles composés avec la rigueur d'un directeur artistique. Chaque kit est une narration en soi, un parcours de soin complet présenté dans un coffret d'exception.",
    featured: "TRX Collection Privée",
    imageUrl: "https://readdy.ai/api/search-image?query=Premium%20skincare%20gift%20set%20photography%2C%20dark%20background%2C%20luxury%20black%20box%20with%20golden%20accents%2C%20multiple%20products%20arranged%20elegantly%2C%20editorial%20fashion%20aesthetic%2C%20warm%20dramatic%20lighting%2C%20haute%20couture%20presentation&width=800&height=1000&seq=chapter-kit&orientation=portrait",
  },
  {
    numeral: "VII",
    title: "Device Solution",
    subtitle: "Quand la technologie rencontre l'élégance",
    description: "Des appareils de soin dont le design rivalise avec les plus belles pièces d'horlogerie. La précision coréenne au service d'une expérience professionnelle incomparable.",
    featured: "TRX Sonic Device Pro",
    imageUrl: "https://readdy.ai/api/search-image?query=Premium%20skincare%20device%20photography%2C%20sleek%20metallic%20device%20on%20dark%20surface%2C%20golden%20and%20black%20color%20scheme%2C%20editorial%20luxury%20product%20shot%2C%20minimal%20composition%2C%20dramatic%20lighting%2C%20high%20end%20technology%20aesthetic&width=800&height=1000&seq=chapter-device&orientation=portrait",
  },
];

export default function ChaptersSection() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const refs = sectionRefs.current;
    refs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="chapters">
      {chapterData.map((ch, index) => {
        const isDark = index % 2 === 0;
        return (
          <div
            key={ch.numeral}
            className={`relative w-full py-24 md:py-32 lg:py-40 px-8 md:px-12 lg:px-16 ${
              isDark ? 'bg-foreground-950' : 'bg-background-50'
            }`}
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 md:gap-16">
                <div
                  className="lg:w-1/2 reveal-on-scroll"
                  ref={(el) => { sectionRefs.current[index * 2] = el; }}
                >
                  <span className={`text-[10px] tracking-[0.4em] font-light mb-6 block ${
                    isDark ? 'text-primary-400/70' : 'text-primary-600'
                  }`}>
                    CHAPITRE {ch.numeral}
                  </span>
                  <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light italic mb-5 leading-none ${
                    isDark ? 'text-foreground-50' : 'text-foreground-950'
                  }`}>
                    {ch.title}
                  </h2>
                  <p className={`text-sm md:text-base font-light italic mb-6 leading-relaxed ${
                    isDark ? 'text-primary-300/60' : 'text-primary-700'
                  }`}>
                    {ch.subtitle}
                  </p>
                  <p className={`text-[13px] md:text-sm leading-relaxed max-w-md font-light ${
                    isDark ? 'text-foreground-300' : 'text-foreground-600'
                  }`}>
                    {ch.description}
                  </p>
                  <p className={`mt-8 text-[11px] tracking-[0.2em] font-light ${
                    isDark ? 'text-foreground-500' : 'text-foreground-400'
                  }`}>
                    {ch.featured}
                  </p>
                </div>

                <div
                  className="lg:w-[45%] reveal-on-scroll"
                  ref={(el) => { sectionRefs.current[index * 2 + 1] = el; }}
                >
                  <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-none mx-auto overflow-hidden">
                    <img
                      src={ch.imageUrl}
                      alt={`${ch.title} — Trandmi`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${
                      isDark
                        ? 'bg-gradient-to-t from-foreground-950/30 to-transparent'
                        : 'bg-gradient-to-t from-background-50/20 to-transparent'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}