import { Link } from 'react-router-dom';
import { laboratoryData } from '@/mocks/laboratory';

export default function LabTeaser() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 px-8 md:px-12 lg:px-16 bg-background-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="reveal-on-scroll">
            <span className="text-[10px] tracking-[0.4em] font-light text-primary-600 mb-6 block">
              LE LABORATOIRE
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-950 mb-6 leading-none">
              {laboratoryData.title}
            </h2>
            <p className="text-sm md:text-base font-light italic text-primary-700 mb-6 leading-relaxed">
              {laboratoryData.subtitle}
            </p>
            <p className="text-[13px] md:text-sm leading-relaxed text-foreground-600 font-light max-w-lg">
              {laboratoryData.description}
            </p>
            <Link
              to="/laboratoire"
              className="inline-block mt-10 text-[12px] tracking-[0.2em] font-light text-foreground-800 hover:text-foreground-950 border-b border-foreground-300 hover:border-foreground-800 transition-all duration-500 pb-1 whitespace-nowrap"
            >
              Découvrir le Laboratoire
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 reveal-on-scroll">
            {laboratoryData.stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-foreground-200/40 p-6 md:p-8 text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-light italic text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.15em] text-foreground-500 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}