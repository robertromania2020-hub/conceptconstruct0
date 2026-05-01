import { Check } from "lucide-react";
import project1 from "@/assets/project-1.jpg";

const points = [
  "Experiență vastă în domeniul construcțiilor",
  "Echipă calificată și dedicată",
  "Respectarea termenelor stabilite",
  "Materiale premium, certificate",
  "Soluții complete, la cheie",
];

export const About = () => {
  return (
    <section id="despre" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
          <img
            src={project1}
            alt="Vilă premium realizată de Concept Construct"
            width={1024}
            height={768}
            loading="lazy"
            className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-surface-darker text-on-dark rounded-xl p-6 shadow-elegant hidden md:block">
            <div className="font-display text-4xl font-bold text-accent">15+</div>
            <div className="text-sm text-on-dark/70 mt-1">ani de experiență</div>
          </div>
        </div>

        <div>
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Cine suntem</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Construim cu pasiune, livrăm cu responsabilitate.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Concept Construct este o firmă de construcții orientată spre calitate și profesionalism.
            Realizăm proiecte rezidențiale și comerciale, de la fundație până la finisaje. Punem
            accent pe seriozitate, transparență și execuție la standarde înalte.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
