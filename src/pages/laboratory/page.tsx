import { useEffect, useRef } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { laboratoryData } from '@/mocks/laboratory';

export default function Laboratory() {
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
            LE LABORATOIRE
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground-50 leading-none mb-6">
            {laboratoryData.title}
          </h1>
          <p className="text-base md:text-lg font-light italic text-primary-300/50 max-w-2xl leading-relaxed">
            {laboratoryData.subtitle}
          </p>
        </div>
      </header>

      <section className="relative w-full py-20 md:py-28 px-8 md:px-12 lg:px-16 bg-background-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-on-scroll">
            {laboratoryData.stats.map((stat) => (
              <div key={stat.label} className="border border-foreground-200/40 p-8 md:p-10 text-center">
                <p className="font-heading text-4xl md:text-5xl font-light italic text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.15em] text-foreground-500 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-28 reveal-on-scroll">
            <div className="max-w-2xl">
              <p className="text-[13px] md:text-sm leading-relaxed text-foreground-600 font-light">
                {laboratoryData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 md:py-28 px-8 md:px-12 lg:px-16 bg-foreground-950">
        <div className="max-w-[1200px] mx-auto reveal-on-scroll">
          <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/60 mb-10 block">
            CERTIFICATIONS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {laboratoryData.certifications.map((cert) => (
              <div key={cert.id} className="border-l border-primary-500/20 pl-6">
                <h3 className="font-heading text-xl md:text-2xl font-light italic text-foreground-100 mb-3">
                  {cert.label}
                </h3>
                <p className="text-[12px] text-foreground-400 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}