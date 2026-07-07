import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ChaptersSection from './components/ChaptersSection';
import EditorialSection from './components/EditorialSection';
import LabTeaser from './components/LabTeaser';
import DistributionTeaser from './components/DistributionTeaser';
import ProfessionalQuote from './components/ProfessionalQuote';
import NewsSection from './components/NewsSection';
import CTAQuoteSection from './components/CTAQuoteSection';
import { useEffect, useRef } from 'react';

export default function Home() {
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

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background-50">
      <Navbar />
      <HeroSection />
      <ChaptersSection />
      <EditorialSection />
      <LabTeaser />
      <DistributionTeaser />
      <ProfessionalQuote />
      <NewsSection />
      <CTAQuoteSection />
      <Footer />
    </div>
  );
}