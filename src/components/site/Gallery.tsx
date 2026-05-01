import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Vilă modernă", tag: "Rezidențial" },
  { img: p2, title: "Sediu corporate", tag: "Comercial" },
  { img: p3, title: "Renovare premium", tag: "Finisaje" },
  { img: p4, title: "Bloc rezidențial", tag: "Construcție nouă" },
  { img: p5, title: "Casă la roșu", tag: "Structură" },
  { img: p6, title: "Vilă cu finisaje piatră", tag: "Casă la cheie" },
];

export const Gallery = () => {
  return (
    <section id="proiecte" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Portofoliu</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Proiecte realizate.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            O selecție din lucrările noastre — calitate vizibilă în fiecare detaliu.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className={`w-full object-cover transition-smooth group-hover:scale-105 ${
                  i === 0 ? "h-72 lg:h-full" : "h-72"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/30 to-transparent opacity-80" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-on-dark">
                <div className="text-xs uppercase tracking-wider text-accent font-semibold">{p.tag}</div>
                <div className="font-display text-xl font-bold mt-1">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
