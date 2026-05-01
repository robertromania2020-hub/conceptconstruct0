import { Building2, Home, Hammer, Building, Layers, Paintbrush } from "lucide-react";

const services = [
  { icon: Building2, title: "Construcții case la roșu", desc: "Execuție profesională a structurii: fundație, ziduri, planșee și acoperiș, gata pentru finisaje." },
  { icon: Home, title: "Case la cheie", desc: "Soluție completă, de la proiect la predare. Te muți direct, fără bătăi de cap." },
  { icon: Hammer, title: "Renovări complete", desc: "Modernizăm apartamente și case cu atenție la detaliu, finisaje premium și termene clare." },
  { icon: Building, title: "Construcții comerciale", desc: "Spații birouri, hale, magazine și clădiri industriale, conforme normelor în vigoare." },
  { icon: Layers, title: "Fundații și structuri", desc: "Calcule precise și execuție riguroasă pentru fundații solide, indiferent de teren." },
  { icon: Paintbrush, title: "Finisaje interioare & exterioare", desc: "Tencuieli, gresie, faianță, vopsitorii, fațade — finisaje cu impact estetic durabil." },
];

export const Services = () => {
  return (
    <section id="servicii" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Serviciile noastre</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Soluții complete de construcții.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            De la prima cărămidă la ultimul detaliu de finisaj — ne ocupăm de tot.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:border-accent/40 hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-3xl transition-smooth" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent group-hover:bg-gradient-accent group-hover:text-accent-foreground transition-smooth">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
