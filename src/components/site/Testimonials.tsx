import { Star } from "lucide-react";

const items = [
  {
    name: "Andrei Popescu",
    role: "Beneficiar vilă, Cluj",
    text: "Profesionalism de la primul telefon până la predarea cheii. Echipa Concept Construct a respectat fiecare termen și fiecare detaliu din proiect.",
  },
  {
    name: "Mihaela Ionescu",
    role: "Renovare apartament, București",
    text: "Seriozitate exemplară. Am primit un deviz clar, totul a fost transparent, iar finisajele arată impecabil. Recomand cu încredere.",
  },
  {
    name: "Radu Stancu",
    role: "Spațiu comercial, Brașov",
    text: "Lucrare de calitate, executată la timp și fără bătăi de cap. Comunicarea a fost excelentă pe toată durata proiectului.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Testimoniale</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Ce spun clienții noștri.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant transition-smooth"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-foreground leading-relaxed">"{t.text}"</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
