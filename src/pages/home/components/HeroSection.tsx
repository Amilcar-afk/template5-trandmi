export default function HeroSection() {
  return (
    <header className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Cinematic%20luxury%20brand%20film%20still%2C%20dark%20dramatic%20atmosphere%2C%20soft%20golden%20light%20on%20elegant%20glass%20surface%2C%20abstract%20luxury%20texture%2C%20deep%20black%20background%20with%20warm%20champagne%20highlights%2C%20minimalist%20composition%2C%20haute%20couture%20cinematography%2C%20silent%20film%20aesthetic%2C%20shallow%20depth%20of%20field&width=1920&height=1080&seq=trandmi-hero-bg&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/70 via-foreground-950/50 to-foreground-950/80"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 w-full">
        <p className="text-primary-400/80 text-[13px] tracking-[0.35em] font-light mb-8 animate-fade-reveal">
          SÉOUL • PARIS
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground-50 tracking-wide leading-none mb-8 animate-fade-reveal" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Trandmi
        </h1>
        <p className="text-foreground-200/80 text-base md:text-lg font-light tracking-[0.15em] max-w-xl leading-relaxed animate-fade-reveal" style={{ animationDelay: '0.6s', opacity: 0 }}>
          Skincare médicale de prestige. L&rsquo;alliance de la science coréenne et de l&rsquo;élégance française.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 animate-fade-reveal" style={{ animationDelay: '0.9s', opacity: 0 }}>
          <a
            href="#chapters"
            className="text-[12px] tracking-[0.2em] font-light text-primary-400 hover:text-primary-300 border-b border-primary-400/40 hover:border-primary-300 transition-all duration-500 pb-1 whitespace-nowrap"
          >
            Découvrir la Collection
          </a>
          <a
            href="/devis"
            className="text-[12px] tracking-[0.2em] font-light text-foreground-300 hover:text-foreground-50 transition-colors duration-500 whitespace-nowrap"
          >
            Demande de Devis
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-reveal" style={{ animationDelay: '1.5s', opacity: 0 }}>
          <a href="#chapters" className="flex flex-col items-center gap-2 text-foreground-400 hover:text-foreground-200 transition-colors duration-500 cursor-pointer">
            <span className="text-[10px] tracking-[0.25em] font-light">DÉFILER</span>
            <i className="ri-arrow-down-line text-sm animate-bounce"></i>
          </a>
        </div>
      </div>
    </header>
  );
}