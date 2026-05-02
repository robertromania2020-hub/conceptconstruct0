import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, RotateCcw, ArrowRight, Phone } from "lucide-react";

export type CalcItem = { name: string; unit: string; price: string };
export type CalcCategory = { title: string; items: CalcItem[] };

// Parse "80 – 120" / "2.5 – 4" / "1.500" -> [min, max]
const parsePriceRange = (price: string): [number, number] => {
  const cleaned = price.replace(/\./g, "").replace(/,/g, ".");
  const parts = cleaned.split(/[–-]/).map((p) => parseFloat(p.trim()));
  if (parts.length === 1 || isNaN(parts[1])) return [parts[0] || 0, parts[0] || 0];
  return [parts[0] || 0, parts[1] || 0];
};

const formatLei = (n: number) =>
  new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 0 }).format(Math.round(n));

export const PriceCalculator = ({ categories }: { categories: CalcCategory[] }) => {
  const [qty, setQty] = useState<Record<string, number>>({});

  const handleChange = (key: string, value: string) => {
    const num = parseFloat(value);
    setQty((prev) => ({ ...prev, [key]: isNaN(num) || num < 0 ? 0 : num }));
  };

  const reset = () => setQty({});

  const { totalMin, totalMax, lines } = useMemo(() => {
    let totalMin = 0;
    let totalMax = 0;
    const lines: { name: string; qty: number; unit: string; min: number; max: number }[] = [];
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        const key = `${cat.title}::${item.name}`;
        const q = qty[key] || 0;
        if (q > 0) {
          const [pMin, pMax] = parsePriceRange(item.price);
          const min = pMin * q;
          const max = pMax * q;
          totalMin += min;
          totalMax += max;
          lines.push({ name: item.name, qty: q, unit: item.unit, min, max });
        }
      });
    });
    return { totalMin, totalMax, lines };
  }, [qty, categories]);

  const hasSelection = lines.length > 0;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground mb-4">
            <Calculator className="h-7 w-7" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Calculator <span className="text-accent">estimare cost</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Introdu cantitățile pentru lucrările de care ai nevoie și obții pe loc o estimare orientativă (lei, fără TVA).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {categories.map((cat) => (
              <article key={cat.title} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                <header className="px-6 py-4 border-b border-border bg-secondary/50">
                  <h3 className="font-display text-lg font-bold text-foreground">{cat.title}</h3>
                </header>
                <ul className="divide-y divide-border">
                  {cat.items.map((item) => {
                    const key = `${cat.title}::${item.name}`;
                    const q = qty[key] || 0;
                    const [pMin, pMax] = parsePriceRange(item.price);
                    const lineMin = pMin * q;
                    const lineMax = pMax * q;
                    return (
                      <li key={item.name} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground">{item.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.price} {item.unit}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 sm:w-auto">
                          <Input
                            type="number"
                            inputMode="decimal"
                            min={0}
                            step="0.1"
                            placeholder="0"
                            value={q || ""}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="w-24"
                            aria-label={`Cantitate pentru ${item.name}`}
                          />
                          <div className="font-display font-bold text-accent text-sm whitespace-nowrap min-w-[110px] text-right">
                            {q > 0 ? `${formatLei(lineMin)} – ${formatLei(lineMax)} lei` : "—"}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>

          {/* Total sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-surface-darker text-on-dark rounded-2xl p-6 shadow-elegant">
              <h3 className="font-display text-xl font-bold flex items-center gap-2">
                <Calculator className="h-5 w-5 text-accent" /> Estimare totală
              </h3>

              {hasSelection ? (
                <>
                  <ul className="mt-5 space-y-2 max-h-64 overflow-y-auto pr-1 text-sm">
                    {lines.map((l) => (
                      <li key={l.name} className="flex justify-between gap-3 text-on-dark/80">
                        <span className="truncate">
                          {l.name} <span className="text-on-dark/50">×{l.qty}</span>
                        </span>
                        <span className="whitespace-nowrap text-on-dark">
                          {formatLei(l.min)} – {formatLei(l.max)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-5 border-t border-on-dark/15">
                    <div className="text-on-dark/60 text-xs uppercase tracking-wider">Total estimativ</div>
                    <div className="font-display text-3xl md:text-4xl font-bold text-accent mt-1">
                      {formatLei(totalMin)} – {formatLei(totalMax)} <span className="text-lg">lei</span>
                    </div>
                    <div className="text-on-dark/50 text-xs mt-1">manoperă, fără TVA</div>
                  </div>
                </>
              ) : (
                <p className="mt-4 text-on-dark/60 text-sm">
                  Selectează cantitățile din listă pentru a vedea estimarea totală.
                </p>
              )}

              <div className="mt-6 flex flex-col gap-2">
                <Button variant="accent" size="lg" asChild>
                  <a href="/#contact">
                    Cere ofertă fermă <ArrowRight />
                  </a>
                </Button>
                <Button variant="outlineLight" size="lg" asChild>
                  <a href="tel:+40767929044">
                    <Phone /> +40 767 929 044
                  </a>
                </Button>
                <Button variant="ghost" size="sm" onClick={reset} className="text-on-dark/70 hover:text-on-dark hover:bg-white/10">
                  <RotateCcw /> Resetează
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
