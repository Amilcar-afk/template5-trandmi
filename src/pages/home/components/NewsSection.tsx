import { newsItems } from '@/mocks/news';

export default function NewsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 px-8 md:px-12 lg:px-16 bg-foreground-950">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal-on-scroll mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/60 mb-6 block">
            ACTUALITÉS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground-50 leading-none">
            Chroniques
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {newsItems.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal-on-scroll py-10 md:py-12 ${
                idx < newsItems.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-foreground-800/30'
                  : ''
              } md:px-10 ${idx === 0 ? 'md:pl-0' : ''} ${idx === newsItems.length - 1 ? 'md:pr-0' : ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[10px] tracking-[0.2em] text-primary-400/60 font-light">
                  {item.date}
                </span>
                <span className="w-8 h-px bg-foreground-700/30"></span>
                <span className="text-[10px] tracking-[0.15em] text-foreground-500 font-light italic">
                  {item.publication}
                </span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-light italic text-foreground-100 leading-snug mb-4">
                {item.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-foreground-400 font-light">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}