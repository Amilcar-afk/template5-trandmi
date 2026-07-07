import { useEffect, useRef, useState, FormEvent } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function Contact() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get('phone_alt');
    if (honeypot && String(honeypot).trim() !== '') {
      setSubmitted(true);
      setLoading(false);
      return;
    }
    formData.delete('phone_alt');

    try {
      const response = await fetch('https://readdy.ai/api/form/d95tsbd7gtqne2as9nig', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();
      let parsed;
      try { parsed = JSON.parse(responseText); } catch { parsed = null; }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK') {
        setSubmitted(true);
        form.reset();
      } else {
        if (typeof serverMsg === 'string' && (serverMsg.toLowerCase().includes('spam') || serverMsg.toLowerCase().includes('form data is spam'))) {
          setError(serverMsg);
        } else {
          setError(serverMsg || 'Une erreur est survenue. Veuillez réessayer.');
        }
      }
    } catch {
      setError('Une erreur de connexion est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-background-50">
      <Navbar />

      <header className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 px-8 md:px-12 lg:px-16 bg-foreground-950">
        <div className="max-w-[1200px] mx-auto reveal-on-scroll">
          <span className="text-[10px] tracking-[0.4em] font-light text-primary-400/60 mb-6 block">
            CONTACT
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground-50 leading-none mb-6">
            Nous Écrire
          </h1>
          <p className="text-base md:text-lg font-light italic text-primary-300/50 max-w-2xl leading-relaxed">
            Pour toute question concernant la maison Trandmi, nos collections ou nos partenariats.
          </p>
        </div>
      </header>

      <section className="relative w-full py-20 md:py-28 px-8 md:px-12 lg:px-16 bg-background-50">
        <div className="max-w-2xl mx-auto reveal-on-scroll">
          {submitted ? (
            <div className="text-center py-16">
              <p className="font-heading text-3xl md:text-4xl font-light italic text-foreground-950 mb-4">
                Message envoyé.
              </p>
              <p className="text-sm text-foreground-500 font-light leading-relaxed">
                Nous vous répondrons dans les meilleurs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-readdy-form="true" noValidate>
              {error && (
                <div className="mb-8 p-4 border border-accent-400/30 bg-accent-500/5">
                  <p className="text-[12px] text-accent-400 font-light">{error}</p>
                </div>
              )}

              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                      NOM
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full bg-transparent border-b border-foreground-200/40 py-3 text-sm text-foreground-900 font-light outline-none focus:border-foreground-400 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                      PRÉNOM
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full bg-transparent border-b border-foreground-200/40 py-3 text-sm text-foreground-900 font-light outline-none focus:border-foreground-400 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-foreground-200/40 py-3 text-sm text-foreground-900 font-light outline-none focus:border-foreground-400 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                    SUJET
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full bg-transparent border-b border-foreground-200/40 py-3 text-sm text-foreground-900 font-light outline-none focus:border-foreground-400 transition-colors cursor-pointer"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="partnership">Partenariat & Distribution</option>
                    <option value="product">Information sur les Collections</option>
                    <option value="press">Presse & Médias</option>
                    <option value="other">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-foreground-500 font-light mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={500}
                    required
                    className="w-full bg-transparent border-b border-foreground-200/40 py-3 text-sm text-foreground-900 font-light outline-none focus:border-foreground-400 transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                  <p className="text-[10px] text-foreground-400 font-light mt-1">500 caractères maximum</p>
                </div>

                <input type="text" name="phone_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="honeypot-field" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-foreground-950 text-background-50 text-[12px] tracking-[0.2em] font-light hover:bg-foreground-800 transition-colors duration-500 whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}