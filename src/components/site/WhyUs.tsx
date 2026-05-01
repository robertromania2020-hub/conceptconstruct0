import { ShieldCheck, FileText, Wallet, CalendarCheck, MessageSquare } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Calitate garantată", desc: "Materiale certificate și execuție conformă cu normele în vigoare." },
  { icon: FileText, title: "Contract & transparență", desc: "Totul scris și clar — fără surprize, fără costuri ascunse." },
  { icon: Wallet, title: "Respectarea bugetului", desc: "Devize detaliate și respectarea sumelor agreate de la început." },
  { icon: CalendarCheck, title: "Respectarea termenelor", desc: "Planificare riguroasă și predare la timp, garantat prin contract." },
  { icon: MessageSquare, title: "Consultanță gratuită", desc: "Te ajutăm să iei cele mai bune decizii, fără obligații." },
];

export const WhyUs = () => {
  return (
    <section id="de-ce-noi" className="py-24 md:py-32 bg-surface-darker text-on-dark relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl">
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">De ce Concept Construct</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            5 motive pentru care ne aleg clienții.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface-elevated/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-smooth"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-on-dark/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
