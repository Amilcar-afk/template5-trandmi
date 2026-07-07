import { useRef, useEffect } from 'react';

function EditorialFeatureFirst() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div className="relative w-full bg-foreground-950">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[500px] md:h-[650px] lg:h-[800px] relative overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Black%20and%20white%20editorial%20fashion%20photography%2C%20elegant%20female%20silhouette%20with%20perfect%20skin%2C%20dark%20dramatic%20lighting%2C%20minimalist%20composition%2C%20haute%20couture%20aesthetic%2C%20soft%20focus%2C%20timeless%20elegance%2C%20magazine%20editorial%20quality&width=1200&height=1600&seq=editorial-feature-01&orientation=portrait"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground-950/20"></div>
        </div>
        <div className="lg:w-1/2 flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20 bg-foreground-950">
          <div className="max-w-lg reveal-on-scroll" ref={ref}>
            <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/70 mb-8 block">
              TRX All-in-One Essence — Chapitre I
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-50 mb-6 leading-none">
              L&rsquo;Essence du Renouveau
            </h2>
            <p className="text-sm md:text-base font-light italic text-primary-300/50 mb-8 leading-relaxed">
              Une nouvelle ère pour le soin professionnel coréen
            </p>
            <p className="text-[13px] md:text-sm leading-relaxed text-foreground-300 font-light">
              Issue de sept années de recherche au cœur des laboratoires Trandmi de Séoul, l&rsquo;All-in-One Essence incarne la philosophie de la maison : un geste, une perfection. Sa formule, enrichie en peptides biomimétiques et en extraits de ginseng rouge de Corée, offre aux praticiens une solution complète qui unifie le teint, raffermit les tissus et restaure l&rsquo;éclat naturel de la peau.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewArrivalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div className="relative w-full bg-background-50">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20 bg-background-50">
          <div className="max-w-lg reveal-on-scroll" ref={ref}>
            <span className="text-[10px] tracking-[0.4em] font-light text-primary-600 mb-8 block">
              TRX Crème Renaissance — Nouveauté 2026
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-950 mb-6 leading-none">
              La Crème qui Écrit l&rsquo;Avenir
            </h2>
            <p className="text-sm md:text-base font-light italic text-primary-700 mb-8 leading-relaxed">
              La nouvelle référence des soins professionnels anti-âge
            </p>
            <p className="text-[13px] md:text-sm leading-relaxed text-foreground-600 font-light">
              Présentée en première mondiale au Congrès de Dermatologie Esthétique de Paris, la Crème Renaissance concentre dix ans de recherche sur le microbiome cutané. Sa formule exclusive associe des probiotiques thermostables à un complexe de céramides végétaux, créant un bouclier régénérateur qui transforme visiblement la qualité de la peau en quatorze jours.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 h-[500px] md:h-[650px] lg:h-[800px] relative overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20skincare%20product%20photography%2C%20black%20and%20gold%20cream%20jar%2C%20dark%20dramatic%20background%2C%20soft%20golden%20light%2C%20editorial%20magazine%20quality%2C%20haute%20couture%20beauty%20aesthetic%2C%20minimal%20composition%2C%20warm%20highlights&width=1200&height=1600&seq=new-arrival-01&orientation=portrait"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground-950/10"></div>
        </div>
      </div>
    </div>
  );
}

function EditorialFeatureSecond() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div className="relative w-full bg-foreground-950">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 h-[500px] md:h-[650px] lg:h-[800px] relative overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Editorial%20beauty%20photography%20in%20black%20and%20white%2C%20close%20up%20of%20hands%20holding%20luxury%20glass%20bottle%2C%20dramatic%20lighting%2C%20minimal%20composition%2C%20haute%20couture%20advertising%20style%2C%20dark%20background%2C%20elegant%20and%20timeless&width=1200&height=1600&seq=editorial-feature-02&orientation=portrait"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground-950/20"></div>
        </div>
        <div className="lg:w-1/2 flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20 bg-foreground-950">
          <div className="max-w-lg reveal-on-scroll" ref={ref}>
            <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/70 mb-8 block">
              TRX Ampoule Régénératrice — Chapitre II
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-50 mb-6 leading-none">
              La Renaissance Cellulaire
            </h2>
            <p className="text-sm md:text-base font-light italic text-primary-300/50 mb-8 leading-relaxed">
              L&rsquo;ampoule qui redéfinit les standards du soin intensif
            </p>
            <p className="text-[13px] md:text-sm leading-relaxed text-foreground-300 font-light">
              Au croisement de la biotechnologie et de l&rsquo;artisanat coréen, l&rsquo;Ampoule Régénératrice Trandmi concentre 23 actifs purs dans un flacon de cristal. Sa technologie de libération prolongée, brevetée par les laboratoires Trandmi, garantit une diffusion optimale des principes actifs pendant 72 heures après application — un niveau d&rsquo;exigence qui place cette ampoule parmi les références des plus grandes cliniques esthétiques européennes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditorialSection() {
  return (
    <section>
      <EditorialFeatureFirst />
      <NewArrivalBlock />
      <EditorialFeatureSecond />
    </section>
  );
}