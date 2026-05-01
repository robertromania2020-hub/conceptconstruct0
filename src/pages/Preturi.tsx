import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsappButton } from "@/components/site/WhatsappButton";
import { Button } from "@/components/ui/button";
import {
  Shovel,
  Hammer,
  Layers,
  Building2,
  Droplets,
  Zap,
  Paintbrush,
  SquareStack,
  Home,
  ArrowRight,
  Phone,
} from "lucide-react";

type PriceItem = { name: string; unit: string; price: string };
type Category = {
  icon: typeof Shovel;
  title: string;
  items: PriceItem[];
};

const categories: Category[] = [
  {
    icon: Shovel,
    title: "Săpături și demolări",
    items: [
      { name: "Săpături manuale", unit: "lei / m³", price: "80 – 120" },
      { name: "Săpături mecanizate (excavator)", unit: "lei / m³", price: "25 – 45" },
      { name: "Demolări pereți cărămidă", unit: "lei / m²", price: "35 – 60" },
      { name: "Demolări pereți beton", unit: "lei / m²", price: "80 – 150" },
      { name: "Evacuare moloz (transport inclus)", unit: "lei / m³", price: "90 – 140" },
      { name: "Desfacere pardoseli (gresie/parchet)", unit: "lei / m²", price: "20 – 35" },
    ],
  },
  {
    icon: Layers,
    title: "Fundații și structură",
    items: [
      { name: "Cofraje fundație", unit: "lei / m²", price: "45 – 70" },
      { name: "Armare fundație (manoperă)", unit: "lei / kg", price: "2.5 – 4" },
      { name: "Turnare beton fundație", unit: "lei / m³", price: "120 – 180" },
      { name: "Centuri și stâlpi beton armat", unit: "lei / ml", price: "90 – 140" },
      { name: "Planșeu beton armat (cu cofraj)", unit: "lei / m²", price: "180 – 260" },
      { name: "Hidroizolație fundație", unit: "lei / m²", price: "35 – 55" },
    ],
  },
  {
    icon: Building2,
    title: "Zidărie și pereți",
    items: [
      { name: "Zidărie BCA 25 cm", unit: "lei / m²", price: "55 – 80" },
      { name: "Zidărie cărămidă porotherm", unit: "lei / m²", price: "60 – 90" },
      { name: "Pereți rigips simplă placare", unit: "lei / m²", price: "45 – 70" },
      { name: "Pereți rigips dublă placare + vată", unit: "lei / m²", price: "80 – 120" },
      { name: "Tavan fals din rigips", unit: "lei / m²", price: "55 – 85" },
      { name: "Termoizolație fațadă (polistiren 10 cm)", unit: "lei / m²", price: "70 – 110" },
    ],
  },
  {
    icon: Home,
    title: "Acoperiș și învelitoare",
    items: [
      { name: "Șarpantă lemn (manoperă + material)", unit: "lei / m²", price: "180 – 280" },
      { name: "Astereală + folie anticondens", unit: "lei / m²", price: "50 – 80" },
      { name: "Învelitoare tablă tip țiglă", unit: "lei / m²", price: "90 – 140" },
      { name: "Învelitoare țiglă ceramică", unit: "lei / m²", price: "120 – 200" },
      { name: "Jgheaburi și burlane", unit: "lei / ml", price: "55 – 90" },
    ],
  },
  {
    icon: Droplets,
    title: "Instalații sanitare",
    items: [
      { name: "Punct apă rece/caldă", unit: "lei / buc", price: "180 – 280" },
      { name: "Punct canalizare", unit: "lei / buc", price: "150 – 250" },
      { name: "Montaj obiect sanitar (lavoar, WC)", unit: "lei / buc", price: "200 – 400" },
      { name: "Montaj cabină duș", unit: "lei / buc", price: "350 – 600" },
      { name: "Centrală termică (montaj + probe)", unit: "lei / buc", price: "800 – 1.500" },
      { name: "Distribuție încălzire în pardoseală", unit: "lei / m²", price: "60 – 90" },
    ],
  },
  {
    icon: Zap,
    title: "Instalații electrice",
    items: [
      { name: "Punct electric (priză / întrerupător)", unit: "lei / buc", price: "80 – 130" },
      { name: "Punct lumină (spot / lustră)", unit: "lei / buc", price: "90 – 150" },
      { name: "Tablou electric apartament", unit: "lei / buc", price: "600 – 1.200" },
      { name: "Cablare rețea + TV", unit: "lei / buc", price: "100 – 160" },
      { name: "Verificare PRAM / probe", unit: "lei / lucrare", price: "400 – 800" },
    ],
  },
  {
    icon: Hammer,
    title: "Tencuieli și șape",
    items: [
      { name: "Tencuieli interioare (manuale)", unit: "lei / m²", price: "30 – 50" },
      { name: "Tencuieli mecanizate", unit: "lei / m²", price: "20 – 35" },
      { name: "Tencuieli decorative exterioare", unit: "lei / m²", price: "45 – 75" },
      { name: "Șapă autonivelantă", unit: "lei / m²", price: "35 – 55" },
      { name: "Șapă clasică (5 cm)", unit: "lei / m²", price: "30 – 50" },
    ],
  },
  {
    icon: SquareStack,
    title: "Gresie, faianță, parchet",
    items: [
      { name: "Montaj gresie", unit: "lei / m²", price: "55 – 90" },
      { name: "Montaj faianță", unit: "lei / m²", price: "60 – 100" },
      { name: "Montaj parchet laminat", unit: "lei / m²", price: "30 – 50" },
      { name: "Montaj parchet stratificat / lemn masiv", unit: "lei / m²", price: "50 – 90" },
      { name: "Plinte (PVC / lemn)", unit: "lei / ml", price: "12 – 25" },
    ],
  },
  {
    icon: Paintbrush,
    title: "Glet și finisaje interioare",
    items: [
      { name: "Glet pereți (2 straturi)", unit: "lei / m²", price: "20 – 35" },
      { name: "Glet tavan", unit: "lei / m²", price: "25 – 40" },
      { name: "Vopsitorie lavabilă (2 straturi)", unit: "lei / m²", price: "12 – 22" },
      { name: "Vopsitorie decorativă", unit: "lei / m²", price: "35 – 80" },
      { name: "Tapet (montaj)", unit: "lei / m²", price: "25 – 45" },
      { name: "Montaj uși interioare", unit: "lei / buc", price: "200 – 400" },
    ],
  },
];

const PriceCard = ({ category }: { category: Category }) => {
  const Icon = category.icon;
  return (
    <article className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:border-accent/40 transition-smooth overflow-hidden">
      <header className="flex items-center gap-4 p-6 border-b border-border bg-secondary/50">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">{category.title}</h2>
      </header>
      <ul className="divide-y divide-border">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-secondary/40 transition-smooth">
            <div className="min-w-0">
              <div className="font-medium text-foreground">{item.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.unit}</div>
            </div>
            <div className="font-display font-bold text-accent text-lg whitespace-nowrap">{item.price}</div>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Preturi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-darker text-on-dark overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container relative">
            <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">Listă de prețuri</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl animate-fade-in">
              Prețuri orientative <span className="text-accent">manoperă</span> construcții.
            </h1>
            <p className="mt-6 text-on-dark/70 text-lg max-w-2xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Tarife actualizate pentru toate etapele unui proiect — de la săpături și demolări până la glet și finisaje interioare. Prețurile sunt orientative și pot varia în funcție de complexitate, volum și locație.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="lg" asChild>
                <a href="/#contact">Cere ofertă personalizată <ArrowRight /></a>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <a href="tel:+40767929044"><Phone /> +40 767 929 044</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Price grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {categories.map((c) => (
                <PriceCard key={c.title} category={c} />
              ))}
            </div>

            {/* Notes */}
            <div className="mt-14 max-w-3xl mx-auto bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground">Important de știut</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                <li>Prețurile sunt exprimate în <strong className="text-foreground">lei, fără TVA</strong>, și reprezintă manopera (materialul se cotează separat sau la cerere, la cheie).</li>
                <li>Tarifele finale depind de volumul lucrării, accesibilitate, complexitate și zona de execuție.</li>
                <li>Pentru proiecte la cheie oferim <strong className="text-foreground">deviz detaliat și contract ferm</strong>, cu prețuri blocate.</li>
                <li>Consultanța și deplasarea pentru evaluare sunt <strong className="text-foreground">gratuite</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface-darker text-on-dark">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Vrei un <span className="text-accent">preț exact</span> pentru proiectul tău?
            </h2>
            <p className="mt-4 text-on-dark/70 text-lg">
              Trimite-ne câteva detalii și primești o ofertă personalizată în maxim 24h.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a href="/#contact">Cere ofertă gratuită <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Preturi;
