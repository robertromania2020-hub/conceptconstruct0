import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-darker text-on-dark border-t border-white/5">
      <div className="container py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-accent font-display font-bold text-accent-foreground">C</span>
            <span className="font-display font-bold text-lg">
              Concept <span className="text-accent">Construct</span>
            </span>
          </div>
          <p className="mt-4 text-on-dark/60 text-sm leading-relaxed max-w-xs">
            Construim cu pasiune și livrăm cu responsabilitate. Soluții complete de construcții, de la fundație la finisaje.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Navigare</h4>
          <ul className="space-y-2 text-sm text-on-dark/70">
            <li><a href="#despre" className="hover:text-accent transition-smooth">Despre</a></li>
            <li><a href="#servicii" className="hover:text-accent transition-smooth">Servicii</a></li>
            <li><a href="#proiecte" className="hover:text-accent transition-smooth">Proiecte</a></li>
            <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+40767929044" className="flex items-center gap-2 text-on-dark/80 hover:text-accent transition-smooth">
                <Phone className="h-4 w-4" /> +40 767 929 044
              </a>
            </li>
            <li>
              <a href="mailto:contact@conceptconstruct.ro" className="flex items-center gap-2 text-on-dark/80 hover:text-accent transition-smooth">
                <Mail className="h-4 w-4" /> contact@conceptconstruct.ro
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container py-6 text-center text-sm text-on-dark/50">
          © {new Date().getFullYear()} Concept Construct. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
};
