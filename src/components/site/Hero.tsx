import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Vilă premium în construcție la apus"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-on-dark/90 text-xs font-medium tracking-wide uppercase mb-6 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Construcții civile & industriale
          </div>

          <h1 className="font-display text-on-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in">
            Construim viitorul tău,
            <span className="block text-accent">pas cu pas.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-on-dark/80 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Servicii complete de construcții civile și industriale. Calitate, seriozitate și respectarea termenelor — de la fundație până la finisajul final.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="xl" asChild>
              <a href="#contact">
                Cere ofertă gratuită <ArrowRight />
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="tel:+40767929044">
                <Phone /> Sună acum
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { v: "120+", l: "Proiecte finalizate" },
              { v: "15 ani", l: "Experiență" },
              { v: "100%", l: "Termene respectate" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-accent">{s.v}</div>
                <div className="text-xs md:text-sm text-on-dark/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
