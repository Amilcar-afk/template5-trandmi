import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground-950 text-foreground-200">
      <div className="w-full px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-heading text-2xl tracking-[0.3em] font-light text-foreground-50">
              TRANDMI
            </Link>
            <p className="mt-6 text-[13px] leading-relaxed text-foreground-400 font-light max-w-sm">
              Skincare médicale de prestige. <br />
              Séoul • Paris.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-5">NAVIGATION</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Accueil</Link>
              <Link to="/laboratoire" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Le Laboratoire</Link>
              <Link to="/collection" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Collection</Link>
              <Link to="/distribution" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Distribution</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-5">CONTACT</h4>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Contact</Link>
              <Link to="/devis" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Demande de Devis</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-5">COLLECTION</h4>
            <div className="flex flex-col gap-3">
              <Link to="/collection" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Les Chapitres</Link>
              <Link to="/collection" className="text-[13px] text-foreground-300 hover:text-foreground-50 transition-colors duration-300 font-light">Skincare Pro</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] text-foreground-500 font-light mb-5">SUIVEZ-NOUS</h4>
            <div className="flex gap-5">
              <a href="#" className="text-foreground-300 hover:text-foreground-50 transition-colors duration-300 cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="text-foreground-300 hover:text-foreground-50 transition-colors duration-300 cursor-pointer" aria-label="LinkedIn">
                <i className="ri-linkedin-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground-800/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[11px] text-foreground-500 font-light tracking-[0.05em]">
            &copy; {new Date().getFullYear()} Trandmi. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-foreground-500 hover:text-foreground-300 transition-colors duration-300 font-light">Mentions légales</a>
            <a href="#" className="text-[11px] text-foreground-500 hover:text-foreground-300 transition-colors duration-300 font-light">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}