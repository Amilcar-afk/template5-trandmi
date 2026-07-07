import { professionalQuote } from '@/mocks/testimonial';

export default function ProfessionalQuote() {
  return (
    <section className="relative w-full py-28 md:py-36 lg:py-44 px-8 md:px-12 lg:px-16 bg-background-50">
      <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
        <span className="text-[64px] md:text-[96px] font-heading font-light italic text-primary-300/30 leading-none block mb-6">
          &ldquo;
        </span>
        <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground-900 leading-relaxed mb-10">
          {professionalQuote.text}
        </blockquote>
        <div>
          <p className="text-[13px] tracking-[0.15em] font-light text-foreground-700">
            {professionalQuote.author}
          </p>
          <p className="text-[11px] tracking-[0.1em] font-light text-foreground-500 mt-1">
            {professionalQuote.title}
          </p>
          <p className="text-[10px] tracking-[0.15em] font-light text-primary-600 mt-3">
            {professionalQuote.affiliation}
          </p>
        </div>
      </div>
    </section>
  );
}